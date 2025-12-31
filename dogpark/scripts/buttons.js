function updateButtonText() {
    const formattedNum = new Intl.NumberFormat('en', { notation: 'compact' }).format(dogCost);
    addDogButton.textContent = `Add dog: $${formattedNum}`;
}



function updateRebirthCost() {
    const formattedNum = new Intl.NumberFormat('en', { notation: 'compact' }).format(rebirth_cost);
    rebirthButton.textContent = `Rebirth: $${formattedNum}`;
}

function rebirth() {
    if (money >= rebirth_cost) {
        dogCost = 10;
        rebirth_cost *= 2;
        rebirths += 1;

        while(dogsContainer.firstChild) {
            dogsContainer.removeChild(dogsContainer.firstChild);
        }

        money = 20;
        updateButtonText();
        updateRebirthText();
        updateRebirthCost();
        updateMoneyText();
    }else{
        noMoneySound.currentTime = 0;
        noMoneySound.play();
    }
}

rebirthButton.addEventListener("click", rebirth);

updateRebirthCost();