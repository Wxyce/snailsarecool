function summonEvilDog() {
    const evilDog = new Image();
    evilDog.src = `otherDogs/evildog.jpg`;
    evilDog.className = 'evil-dog';
    evilDog.draggable = false;

    let spawnPosX = randomXPos(evilDog);
    let spawnPosY = randomYPos(evilDog);
    evilDog.style.transform = `translate(${spawnPosX}px,${spawnPosY}px)`;

    const evildogData = {
        element: evilDog,
        hp: 3,
        alive: true,
        moneyTaken: 0
    }

    evilDog.onload = () => {
        evilDogContainer.appendChild(evilDog);
        moveDog(evilDog);

        const takeMoney = setInterval(() => {
            if(!evildogData.alive){
                clearInterval(takeMoney);
                return;
            }   
            money -= 20;
            evildogData.moneyTaken += 20;
            updateMoneyText();
            console.log("evil dog took your money");
        }, 1000)

        evilDog.addEventListener("click", () => attackEvilDog(evildogData));
    }
}

function attackEvilDog(evildogData) {
    evildogData.hp -= 1;
    console.log(evildogData.hp);

    if(evildogData.hp <= 0) {
        evildogData.element.remove();
        evildogData.alive = false;
        addMoney(Math.floor(evildogData.moneyTaken * 1.5));
        console.log("dog dided");
    }
}

function evildogSpawning() {
    const delay = (Math.random() * 20000) + 20000;
    setTimeout(() => {
        summonEvilDog();
        evildogSpawning()
    }, delay);
}

evildogSpawning();