// app.js

const transactionList = document.getElementById("transaction-list");

async function fetchTransactions() {
    try {
        const response = await fetch("https://mempool.space/api/mempool/txs");
        const transactions = await response.json();
        displayTransactions(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
}

function displayTransactions(transactions) {
    transactionList.innerHTML = ""; // Clear existing transactions
    transactions.slice(0, 10).forEach(transaction => {
        const transactionDiv = document.createElement("div");
        transactionDiv.classList.add("transaction");
        
        transactionDiv.innerHTML = `
            <p><strong>Transaction ID:</strong> ${transaction.txid}</p>
            <p><strong>Fee:</strong> ${transaction.fee} sat</p>
            <p><strong>Size:</strong> ${transaction.size} bytes</p>
        `;
        
        transactionList.appendChild(transactionDiv);
    });
}

// Update transactions every 30 seconds
setInterval(fetchTransactions, 30000);
fetchTransactions();
