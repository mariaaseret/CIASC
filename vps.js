(function() {
    var injector;
    var myID; 
    var myParentID;
    var mySeatNumber;
    var reset = false;
    var clickCounter = 0;
    var RESET_TIME = 9500;
    var LOCATION_ROOT_URL = Script.resolvePath(".");
    var somhistorico3 = SoundCache.getSound(LOCATION_ROOT_URL + "vps.wav");    
    
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
            if((clickCounter%2) != 0){
                injector = Audio.playSound(somhistorico3, injectorOptions);         
                //reset = false;
            }else{
                injector.stop();
                //reset = true;
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
