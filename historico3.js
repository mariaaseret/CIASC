(function() {
    var injector = 0;
    var myID; 
    var myParentID;
    var mySeatNumber;
    var reset = false;
    var RESET_TIME = 500;
    var LOCATION_ROOT_URL = Script.resolvePath(".");
    var somhistorico2 = SoundCache.getSound(LOCATION_ROOT_URL + "historico3.wav");    
    
    this.preload = function (entityID) {
        myID = entityID;
        myParentID = Entities.getEntityProperties(myID,["parentID"]).parentID;
        mySeatNumber = Entities.getEntityProperties(myID,["description"]).description;     
    };

    function click() {
        if(injector.isPlaying()){
            injector.stop();
        }else{      
            if (reset) {
                var injectorOptions = {
                    position: MyAvatar.position,
                    volume: 1,
                    localOnly: true            
                };
                injector = Audio.playSound(somhistorico2, injectorOptions);
                injector.restart();
                reset = false;
            }
        }
    }

    Script.setInterval(function () {
        reset = true;    
    }, RESET_TIME);

    this.startNearTrigger = click;
    this.clickDownOnEntity = click;
    this.startFarTrigger = click;
});
