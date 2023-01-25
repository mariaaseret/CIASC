(function() {
    var injector;
    var myID; 
    var myParentID;
    var mySeatNumber;
    var reset = false;
    var clickCounter = 0;
    var RESET_TIME = 12000;
    var LOCATION_ROOT_URL = Script.resolvePath(".");
    var somhistorico3 = SoundCache.getSound(LOCATION_ROOT_URL + "historico3.wav");    
    
    this.preload = function (entityID) {
        myID = entityID;
        myParentID = Entities.getEntityProperties(myID,["parentID"]).parentID;
        mySeatNumber = Entities.getEntityProperties(myID,["description"]).description;     
    };

    function click() {
        clickCounter++;
        var user = Account.username;       
        if (reset) {
            var injectorOptions = {
                position: MyAvatar.position,
                volume: 1,
                localOnly: true            
            };
            injector = Audio.playSound(somhistorico3, injectorOptions);         
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
