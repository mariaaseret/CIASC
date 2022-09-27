(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
     
      Script.setInterval(function () {
        Entities.editEntity(entityID, { color: { red: randRange(0,255), green: randRange(0,255), blue: randRange(0,255)} });
      }, 1000);

      Script.setTimeout(function () {
        Script.stop(true);
      }, 5000);
    };
})

