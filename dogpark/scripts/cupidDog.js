function summonCupidDog() {
    const cupidDog = new Image();
    cupidDog.src = `otherDogs/cupiddog.jpg`;
    cupidDog.className = 'cupid-dog';
    cupidDog.draggable = false;

    let spawnPosX = randomXPos(cupidDog);
    let spawnPosY = randomYPos(cupidDog);
    cupidDog.style.transform = `translate(${spawnPosX}px,${spawnPosY}px)`;

    const cupidDogData = {
        element: cupidDog,
    }

    cupidDog.onload = () => {
        cupidDogContainer.appendChild(cupidDog);
        cupidDog.addEventListener("click", () => attackcupidDog(cupidDogData));
    }
}

function getRandomDog() {
    let children = dogsContainer.children;
    let randomIndex = Math.floor(Math.random() * children.length);
    
    return children[randomIndex];
}

function getCurrentTranslate(element) {
  if (!element) return { x: 0, y: 0 };

  const style = window.getComputedStyle(element);
  const transform = style.transform;

  let translateX = 0, translateY = 0;

  if (transform && transform !== 'none') {
    const values = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
    translateX = parseFloat(values[4]);
    translateY = parseFloat(values[5]);
  }

  return { x: translateX, y: translateY };
}

function attackcupidDog(cupidDogData) {
    const randomDog = getRandomDog();
    const targetPos = getCurrentTranslate(randomDog);
    cupidDogData.element.style.transition = "transform 0.5s ease-in-out"
    cupidDogData.element.style.transform = `translate(${targetPos.x}px, ${targetPos.y}px)`;
    cupidDogData.element.style.pointerEvents = 'none';
    setTimeout(() => {
        if (money >= 0){
            money *= 2;
            updateMoneyText();
        }else{
            money *= -1;
            updateMoneyText();
        }
        kissSound.currentTime = 0;
        kissSound.play();
        cupidDogData.element.remove();
    }, 2000);
}

function cupidDogSpawning() {
    const delay = (Math.random() * 20000) + 20000;
    setTimeout(() => {
        summonCupidDog();
        cupidDogSpawning()
    }, delay);
}

cupidDogSpawning();