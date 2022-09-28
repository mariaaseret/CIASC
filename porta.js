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
         for(var i = 0; i < 10; ++i){
             Script.setTimeout(function () {
                Entities.editEntity(entityID, { dimensions: { x: i, y: 15, z: 7 } });
                 print(i);
            }, 3000);
         }
    };
})
