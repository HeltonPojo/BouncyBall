function myMove() {
  let id = null;
  const elem = document.getElementById("ball");

  let posX = 10;
  let posY = 10;

  let velX = Math.floor(Math.random() * 8);
  let velY = Math.floor(Math.random() * 2);

  let decrease = 0.75;

  let gravtiy = 3.8;

  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (Math.abs(velX) < 1 && Math.abs(velY) < 1 && posY >= 450) {
      console.log();
      clearInterval(id);
    }

    if (posY === 450 && velY > 0) {
      velY = -1 * velY * decrease;
    }
    if (posY === 0 && velY < 0) {
      velY = -1 * velY * decrease;
    }
    if (posX === 450 && velX > 0) {
      velX = -1 * velX * decrease;
    }
    if (posX === 0 && velX < 0) {
      velX = -1 * velX * decrease;
    }
    if (posY === 450) {
      if (velX < 0) {
        velX = velX + (0.01 * gravtiy) / 5;
      } else {
        velX = velX - (0.01 * gravtiy) / 5;
      }
    }

    if (posY <= 450) velY = velY + gravtiy / 5;

    const lastBalls = document.querySelectorAll("[id='oldBall']");
    let i = lastBalls.length;
    if (i > 20) {
      for (const ball of lastBalls) {
        if (i > 20) {
          ball.remove();
          i--;
        }
      }
    }
    let divContainer = elem.parentNode;
    let beforeBall = document.createElement("div");
    beforeBall.id = "oldBall";
    beforeBall.style.top = posY + 25 + "px";
    beforeBall.style.left = posX + 25 + "px";
    divContainer.insertBefore(beforeBall, elem);

    posX = posX + velX;
    posY = posY + velY;

    if (posX < 0) posX = 0;
    if (posX > 450) posX = 450;
    if (posY < 0) posY = 0;
    if (posY > 450) posY = 450;

    elem.style.top = posY + "px";
    elem.style.left = posX + "px";
  }
}
