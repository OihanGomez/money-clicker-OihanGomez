// Definición de los logros del juego
const achievements = [
    { 
        name: 'primer_ingreso', 
        description: 'Compra tu primer Monedero Digital', 
        achieved: false, 
        // Condición para lograr el achievement: se verifica si se ha comprado un Monedero Digital
        condition: () => improvements.find(improve => improve.name === 'digital_wallet' && improve.quantity > 0) 
    },
    { 
        name: 'banquero', 
        description: 'Compra un Banco Online', 
        achieved: false, 
        // Condición: verifica si se ha comprado un Banco Online
        condition: () => improvements.find(improve => improve.name === 'bank' && improve.quantity > 0) 
    },
    { 
        name: 'inversor_inteligente', 
        description: 'Compra un Inversor Millonario', 
        achieved: false, 
        // Condición: verifica si se ha comprado un Inversor Millonario
        condition: () => improvements.find(improve => improve.name === 'investor' && improve.quantity > 0) 
    },
    { 
        name: 'impresor_dinero', 
        description: 'Compra una Impresora de Dinero', 
        achieved: false, 
        // Condición: verifica si se ha comprado una Impresora de Dinero
        condition: () => improvements.find(improve => improve.name === 'printer' && improve.quantity > 0) 
    },
    { 
        name: 'magnate_inversiones', 
        description: 'Compra un Fondo de Inversión', 
        achieved: false, 
        // Condición: verifica si se ha comprado un Fondo de Inversión
        condition: () => improvements.find(improve => improve.name === 'investment_fund' && improve.quantity > 0) 
    },
    { 
        name: 'lavador_maestro', 
        description: 'Compra un Lavador de Dinero', 
        achieved: false, 
        // Condición: verifica si se ha comprado un Lavador de Dinero
        condition: () => improvements.find(improve => improve.name === 'money_launderer' && improve.quantity > 0) 
    },
    { 
        name: 'rey_bonos', 
        description: 'Compra Bonos del Tesoro', 
        achieved: false, 
        // Condición: verifica si se ha comprado Bonos del Tesoro
        condition: () => improvements.find(improve => improve.name === 'treasury_bonds' && improve.quantity > 0) 
    },
];

// Función para calcular el total de beneficios obtenidos a partir de las mejoras
function calculateTotalProfit() {
    return improvements.reduce((total, improve) => {
        // Suma los beneficios de cada mejora multiplicados por su cantidad
        return total + (improve.benefit * improve.quantity);
    }, 0);
}

// Inicializa la lista de logros en la interfaz al cargar la página
function initializeAchievements() {
    const achievementsList = document.querySelector('.achievements ul'); 
    achievements.forEach(achievement => {
        const achievementItem = document.createElement('li');
        achievementItem.textContent = achievement.description; 
        achievementItem.classList.add('not-achieved');
        achievementItem.setAttribute('data-achievement-name', achievement.name);
        achievementsList.appendChild(achievementItem);
    });
}

// Verifica los logros y actualiza el estado de cada uno
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.achieved && achievement.condition()) {
            achievement.achieved = true;
            updateAchievementUI(achievement)
        }
    });
}

// Actualiza la interfaz de usuario para reflejar que se ha alcanzado un logro
function updateAchievementUI(achievement) {
    const achievementsList = document.querySelector('.achievements ul'); 
    const achievementItem = achievementsList.querySelector(`[data-achievement-name="${achievement.name}"]`); 
    
    if (achievementItem) {
        achievementItem.classList.remove('not-achieved');
        achievementItem.classList.add('achieved'); 
    }
    
    // Muestra una notificación de que se ha desbloqueado un logro
    showNotification(`¡Logro desbloqueado: ${achievement.description}!`); 
}

// Muestra una notificación en pantalla
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Elimina la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove(); 
    }, 3000);
}

// Inicializa los logros al cargar la página
initializeAchievements();
