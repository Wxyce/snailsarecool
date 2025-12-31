let previousMoney = 0;

function updateMoneyText() {
    if (previousMoney != money) {

        const changedbyText = document.createElement("h2");
        changedbyText.textContent = money - previousMoney;
        
        moneycontainer.appendChild(changedbyText);
        setTimeout(() => {
            console.log("changed")
            moneycontainer.removeChild(changedbyText);
        }, 600);

        previousMoney = money;
    }

    moneyText.textContent = `$${money.toLocaleString()}`;
}

function updateRebirthText() {
    rebirthText.textContent = `Rebirths: ${rebirths}`
}

function addMoney(value) {
    money += (value * (rebirths + 1));
    updateMoneyText();
}
