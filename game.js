this.resetTitle = createElement("h2");
this.resetButton = createButton("");

//-----------------------------------
this.resetTitle.html("Reiniciar juego");
this.resetTitle.class("resetText");
this.resetTitle.position(width / 2 + 200, 40);

this.resetButton.class("resetButton");
this.resetButton.position(width / 2 + 230, 100);

//-----------------------------------
this.leadeboardTitle = createElement("h2");
this.leader1 = createElement("h2");
this.leader2 = createElement("h2");

//------------------------------------------
this.leadeboardTitle.html("Puntuación");
this.leadeboardTitle.class("resetText");
this.leadeboardTitle.position(width / 3 - 60, 40);

this.leader1.class("leadersText");
this.leader1.position(width / 3 - 50, 80);

this.leader2.class("leadersText");
this.leader2.position(width / 3 - 50, 130);

//------------------------------------------
showLeaderboard() {
    var leader1, leader2;
    var players = Object.values(allPlayers);
    if (
      (players[0].rank === 0 && players[1].rank === 0) ||
      players[0].rank === 1
    ) {
      // &emsp;    esta etiqueta se utiliza para mostrar cuatro espacios
      leader1 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;

      leader2 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;
    }

    if (players[1].rank === 1) {
      leader1 =
        players[1].rank +
        "&emsp;" +
        players[1].name +
        "&emsp;" +
        players[1].score;

      leader2 =
        players[0].rank +
        "&emsp;" +
        players[0].name +
        "&emsp;" +
        players[0].score;
    }

    this.leader1.html(leader1);
    this.leader2.html(leader2);
  }

  //-------------------------------
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
      });
      window.location.reload();
    });
  }

  //---------------------------------------------
  if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
    player.positionX -= 5;
    player.update();
  }
  if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
    player.positionX += 5;
    player.update();
  }