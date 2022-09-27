(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }
    function rangeDoor(low, high) {
        var count = 0;
        for(var i = 0; i < array.length; ++i){
            if(array[i] == 2)
                return count++;
            }   
        }
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
     
      Script.setInterval(function () {
        Entities.editEntity(entityID, { 
            color: { red: randRange(0,255), green: randRange(0,255), blue: randRange(0,255)} },
            dimensions: { x: rangeDoor(0,5), y: 0.5, z: 0.5 },);
      }, 1000);

      Script.setTimeout(function () {
        Script.stop(true);
      }, 5000);
    };
})

