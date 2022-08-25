(function () {
    this.hoverOverEntity = function (entityID, mouseEvent) {
        Entities.editEntity(entityID, { alpha: 1 });
    };
})
