// Inicialización de variables
let money = 0; // Cantidad de dinero disponible
let moneyPerSecond = 0; // Ingreso por segundo

const moneyButton = document.getElementById('click-btn');

// Añade un evento de clic al botón de ganar dinero
moneyButton.addEventListener('click', function() {
    moneyButton.classList.add('click-btn'); 
    setTimeout(() => {
        moneyButton.classList.remove('click-btn');
    }, 200);
    
    money += 1; 
    updateUI();
});

// Función para actualizar la interfaz de usuario
function updateUI() {
    document.getElementById('money-count').textContent = `${money}€`;
    document.getElementById('moneyPS').textContent = `${moneyPerSecond}`;
    updateShopButtons(); 
    checkAchievements(); 
    calculateTimeToNextImprovement();
}

setInterval(() => {
    money += moneyPerSecond; 
    updateUI();
    checkAchievements(); 
}, 1000); 

updateShopButtons();
