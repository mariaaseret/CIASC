
(function () {
    var clickSound = SoundCache.getSound(LOCATION_ROOT_URL + "448086__breviceps__normal-click.wav");    
    
    function randRange(low, high) {
        return Math.floor(low + Math.random() * (high - low));
    }

    this.clickDownOnEntity = function (entityID, mouseEvent) {
        Entities.editEntity(entityID, { color: { red: randRange(0,255), green: randRange(0,255), blue: randRange(0,255)} });
        Audio.playSound(clickSound);   
    };
})
