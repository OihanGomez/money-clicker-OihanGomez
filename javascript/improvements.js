// Definición de las mejoras disponibles
const improvements = [
    { name: 'digital_wallet', baseCost: 10, benefit: 1, quantity: 0 }, // Monedero digital
    { name: 'bank', baseCost: 100, benefit: 5, quantity: 0 }, // Banco online
    { name: 'investor', baseCost: 400, benefit: 15, quantity: 0 }, // Inversor millonario
    { name: 'printer', baseCost: 1000, benefit: 30, quantity: 0 }, // Impresora de dinero
    { name: 'investment_fund', baseCost: 5000, benefit: 70, quantity: 0 }, // Fondo de inversión
    { name: 'money_launderer', baseCost: 10000, benefit: 150, quantity: 0 }, // Lavador de dinero
    { name: 'treasury_bonds', baseCost: 25000, benefit: 300, quantity: 0 } // Bonos del tesoro
];

// Inicializa el estado de las mejoras ocultando solo las que no son el Banco
document.addEventListener("DOMContentLoaded", () => {
    improvements.forEach(improvement => {
        // Oculta el div de la mejora (excepto el monedero)
        if (improvement.name !== 'digital_wallet') {
            const improvementDiv = document.getElementById(improvement.name);
            improvementDiv.style.display = 'none'; 
        }
    });
});

// Calcula el costo de una mejora en función de su cantidad
function calculateCost(improvement) {
    return Math.round(improvement.baseCost * Math.pow(1.15, improvement.quantity));
}

// Actualiza la tienda y maneja la compra de una mejora
function updateShop(improvementName) {
    const improvement = improvements.find(improve => improve.name === improvementName);
    const currentCost = calculateCost(improvement);

    // Verifica si hay suficiente dinero para comprar la mejora
    if (money >= currentCost) {
        improvement.quantity += 1;
        money -= currentCost;
        moneyPerSecond += improvement.benefit;
        document.getElementById('cost' + improvementName).textContent = calculateCost(improvement);
        document.getElementById('quantity' + improvementName).textContent = improvement.quantity; 
        updateUI(); 
        checkAchievements(); 
    } else {
        alert('No tienes dinero suficiente para comprar esta mejora.');
    }
}

// Actualiza los botones de compra en la tienda
function updateShopButtons() {
    improvements.forEach(improvement => {
        const currentCost = calculateCost(improvement);
        const button = document.querySelector(`#${improvement.name} .buy-button`);
        const improvementDiv = document.getElementById(improvement.name);

        // Controla la visibilidad del div de mejora
        if (money >= currentCost && improvement.quantity === 0) {
            improvementDiv.style.display = 'flex';
        }

        // Controla el estado del botón de compra
        if (money >= currentCost) {
            button.disabled = false;
        } else {
            button.disabled = true; 
        }
    });
}

// Función para calcular el tiempo necesario para la próxima mejora
function calculateTimeToNextImprovement() {
    // Obtener la mejora más cercana que se puede comprar
    const nextImprovement = improvements.find(improvement => {
        const currentCost = calculateCost(improvement);
        return currentCost > 0 && money < currentCost; 
    });

    if (!nextImprovement) {
        // Si no hay mejoras disponibles, regresar un mensaje
        document.getElementById('time-next-upgrade').textContent = 'Todas las mejoras compradas.';
        return;
    }

    const currentCost = calculateCost(nextImprovement); // Costo de la próxima mejora
    const timeNeeded = currentCost > 0 ? (currentCost - money) / moneyPerSecond : Infinity;

    // Mostrar el tiempo necesario en segundos
    const seconds = Math.ceil(timeNeeded);
    document.getElementById('time-next-upgrade').textContent = `Tiempo para próxima mejora: ${seconds} segundos`;
}
