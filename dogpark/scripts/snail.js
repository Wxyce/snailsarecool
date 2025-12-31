function popConfetti(x, y) {
  const colors = ["#ff0", "#f00", "#0f0", "#0ff", "#f0f", "#ffa500"];
  const amount = 30;

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = x + "px";
    confetti.style.top = y + "px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 120 + 40;

    confetti.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    confetti.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(confetti);

    confetti.addEventListener("animationend", () => confetti.remove());
  }
}

snail.addEventListener("click", (e) => {
  popConfetti(e.clientX, e.clientY);
  addMoney(20);
  updateMoneyText();
  yaySound.currentTime = 0;
  yaySound.play();

});
