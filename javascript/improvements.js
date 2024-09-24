const improvements = [
    { name: 'bank', baseCost: 100, benefit: 1, quantity: 0 },
    { name: 'inverter', baseCost: 400, benefit: 5, quantity: 0 },
    { name: 'printer', baseCost: 1000, benefit: 13, quantity: 0 }
];

function calculateCost(improvement) {
    return Math.round(improvement.baseCost * Math.pow(1.15, improvement.quantity));
}

function updateShop(improvementName) {
    const improvement = improvements.find(improve => improve.name === improvementName);
    const currentCost = calculateCost(improvement);
    if (money >= currentCost) {
        improvement.quantity += 1;
        money -= currentCost;
        moneyPerSecond += improvement.benefit;
        document.getElementById('cost' + improvementName).textContent = calculateCost(improvement);
        document.getElementById('quantity' + improvementName).textContent = improvement.quantity;
        updateUI();
    } else {
        alert('No tienes dinero suficiente para comprar esta mejora.');
    }
}

