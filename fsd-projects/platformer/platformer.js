$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //git add -AtoggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(350,650, 100, 5, "blue");
      createPlatform(1050,500, 100, 5, "red");
      createPlatform(700,250, 100, 5, "green");
      createPlatform(700,650, 100, 5, "orange");
      createPlatform(175,450, 100, 5, "white");
      createPlatform(950,600, 2, 5, "black");
      createPlatform(1000,400, 5, 5, "gold");
      createPlatform(900,350, 25, 5, "gold");
      createPlatform(600,300, 100, 5, "green");
      createPlatform(500,350, 100, 5, "green");
      createPlatform(300,450, 100, 5, "green");

    // TODO 3 - Create Collectables
      createCollectable("database", 725, 150,.1,1.1);
      createCollectable("kennedi", 200, 500, -.1, .6);
      createCollectable("max", 700, 600);
      createCollectable("steve", 400, 500);
      createCollectable("grace", 1100, 450);
      createCollectable("diamond", 200, 300,.1);
    // TODO 4 - Create Cannons
      createCannon("top", 200, 2000);
      createCannon("bottom", 400, 1050);
      createCannon("right", 150, 100);
      createCannon("left", 190, 10000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
