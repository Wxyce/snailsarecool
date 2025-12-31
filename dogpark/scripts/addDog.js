function randomDog() {
    const numberDogs = 10;
    const randomDog = Math.floor(Math.random() * numberDogs) + 1;
    return `dogs/dog${randomDog}.jpg`;
}

function addDog() {
    console.log("hello");

    if (money >= dogCost) {
        money -= dogCost;
        dogCost = Math.floor(dogCost * 1.2);
        updateMoneyText();
        updateButtonText();

        boughtSound.currentTime = 0;
        boughtSound.play();

        const newDog = new Image();
        newDog.src = randomDog();
        newDog.className = 'dog-image'

        const newDogData = {
            element: newDog,
            paused: false
        }
    
        newDog.onload = () => {
            dogsContainer.appendChild(newDog);
            moveDog(newDog);
        };
    }else{
        noMoneySound.currentTime = 0;
        noMoneySound.play();
    }
}

moveDogs();
addDogButton.addEventListener("click", addDog);
updateMoneyText();
updateButtonText();