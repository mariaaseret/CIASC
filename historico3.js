(function() {
    var myID; 
    var myParentID;
    var mySeatNumber;
    var reset = false;
    var RESET_TIME = 50000;
    var LOCATION_ROOT_URL = Script.resolvePath(".");
    var somhistorico2 = SoundCache.getSound(LOCATION_ROOT_URL + "historico3.wav");    
    
    this.preload = function (entityID) {
        myID = entityID;
        myParentID = Entities.getEntityProperties(myID,["parentID"]).parentID;
        mySeatNumber = Entities.getEntityProperties(myID,["description"]).description;     
    };

    function click() {
        var user = Account.username;       
        if (reset) {
            var injectorOptions = {
                position: MyAvatar.position,
                volume: 1,
                localOnly: true            
            };
            Audio.playSound(somhistorico2, injectorOptions);         
            reset = false;
        }         
    }

    Script.setInterval(function () {
        reset = true;    
    }, RESET_TIME);

    this.startNearTrigger = click;
    this.clickDownOnEntity = click;
    this.startFarTrigger = click;
});
