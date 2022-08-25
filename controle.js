(function () {
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
        Entities.editEntity({0b109ebe-4a97-4a85-91f2-ccd5354e79ce}, { color: { red: randRange(0,255), green: randRange(0,255), blue: randRange(0,255)} });
    };
})

