(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
        Entities.editEntity(entityID, { dimensions: { x: 0.5, y: 0.5, z: 0.1 } });
    };
})
