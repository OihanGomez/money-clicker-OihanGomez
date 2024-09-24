let money = 0;
let moneyPerSecond = 0;

const moneyButton = document.getElementById('click-btn');

moneyButton.addEventListener('click', function() {
    moneyButton.classList.add('click-btn');
    setTimeout(() => {
        moneyButton.classList.remove('click-btn');
    }, 200);
    money += 1;
    updateUI();
});

function updateUI() {
    document.getElementById('money-count').textContent = `${money}€`;
    document.getElementById('moneyPS').textContent = `${moneyPerSecond}`;
}


setInterval(() =>{
    money += moneyPerSecond;
    updateUI();
},1000
)