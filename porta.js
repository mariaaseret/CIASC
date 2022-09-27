(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
        Entities.editEntity(entityID, { dimensions: { x: 5, y: 15, z: 7 } });
    };
})
