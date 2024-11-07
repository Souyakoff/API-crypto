// Sélection des éléments de la page
const pricesDiv = document.getElementById("prices");
const difficultyDiv = document.getElementById("difficulty");

// Bouton pour actualiser les données
const refreshButton = document.createElement("button");
refreshButton.innerText = "Refresh Data";
refreshButton.style.margin = "10px 0";

document.querySelector("h1").after(refreshButton); 

// actualiser les données au clic
refreshButton.addEventListener("click", () => {
    fetchPrices();
    fetchDifficulty();
});

// récupération des prix
async function fetchPrices() {
    try {
        const response = await fetch("https://mempool.space/api/v1/prices");
        const data = await response.json();
        displayPrices(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des prix:", error);
    }
}

// affichage des prix
function displayPrices(prices) {
    pricesDiv.innerHTML = ""; // Réinitialise les données
    for (const [currency, price] of Object.entries(prices)) {
        const priceElement = document.createElement("div");
        priceElement.innerHTML = `<strong>${currency}:</strong> ${price}`;
        pricesDiv.appendChild(priceElement);
    }
}

//récupération de la difficulté
async function fetchDifficulty() {
    try {
        const response = await fetch("https://mempool.space/api/v1/difficulty-adjustment");
        const data = await response.json();
        displayDifficulty(data);
    } catch (error) {
        console.error("Erreur lors de la récupération de la difficulté:", error);
    }
}

// affichage de la difficulté
function displayDifficulty(data) {
    difficultyDiv.innerHTML = `
        <div><strong>Progress:</strong> ${data.progressPercent.toFixed(2)}%</div>
        <div><strong>Difficulty Change:</strong> ${data.difficultyChange.toFixed(2)}%</div>
        <div><strong>Estimated Retarget Date:</strong> ${new Date(data.estimatedRetargetDate * 1000).toLocaleString()}</div>
        <div><strong>Remaining Blocks:</strong> ${data.remainingBlocks}</div>
        <div><strong>Remaining Time:</strong> ${data.remainingTime} seconds</div>
    `;
}

// récupération des données de base et mise à jour toutes les 60 sec
fetchPrices();
fetchDifficulty();
setInterval(fetchPrices, 60000);
setInterval(fetchDifficulty, 60000);
