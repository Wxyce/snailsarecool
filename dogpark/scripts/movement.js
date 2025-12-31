function randomXPos(dog) {
    let dogWidth = dog.offsetWidth;
    let max = dogsContainer.clientWidth - dogWidth;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
} 

function randomYPos(dog) {
    let dogHeight = dog.offsetHeight;
    let max = dogsContainer.clientHeight - dogHeight;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function moveDogs() {
    const dogs = dogsContainer.children;
    for(const dog of dogs){
        moveDog(dog);
    }
}

function moveDog(dog) {
    if (dog.paused) return;

    let targetX = randomXPos(dog);
    let targetY = randomYPos(dog);
    dog.style.transform = `translate(${targetX}px,${targetY}px)`;
    
    dog.addEventListener("transitionend", () => {
        const delay = Math.random() * 2000 + 500;
        setTimeout(() => {
            moveDog(dog);
            addMoney(10);
            updateMoneyText();
        }, delay); 
    }, { once: true });
}
