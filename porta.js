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
                Entities.editEntity(entityID, { dimensions: { x: 1,9900, y: 5, z: 0,1895 } });
            }, 1000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 1,9900, y: 4, z: 0,1895 } });
            }, 2000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 1,9900, y: 3, z: 0,1895 } });
            }, 3000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 1,9900, y: 4, z: 0,1895 } });
            }, 5000);
            Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: 1,9900, y: 5, z: 0,1895 } });
            }, 6000);
    };
})
