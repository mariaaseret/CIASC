(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }
    function rangeDoor(low, high) {
        for(var i = 0; i < high; ++i){
                return count++;
         }   
    }
    
    
    this.clickDownOnEntity = function (entityID, mouseEvent) {
             Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 5, y: 5, z: 5 } });
            }, 1000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 5, y: 3, z: 5 } });
            }, 2000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 5, y: 1, z: 5 } });
            }, 3000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 5, y: 3, z: 5 } });
            }, 5000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 5, y: 5, z: 5 } });
            }, 6000);
    };
})
