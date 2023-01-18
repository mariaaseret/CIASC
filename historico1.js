
(function() {
    var myID; 
    var myParentID;
    var mySeatNumber;
    var reset = false;
    var RESET_TIME = 500;
    var LOCATION_ROOT_URL = Script.resolvePath(".");
    var clickSound = SoundCache.getSound("https://github.com/mariaaseret/CIASC/blob/main/HIST%C3%93RICO%201.wav");    
    
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
            Audio.playSound(clickSound, injectorOptions);   
            print(user + "start is Clicked!");           
            Entities.callEntityServerMethod(                             
                myParentID, 
                "registerUser",
                [MyAvatar.sessionUUID,MyAvatar.displayName,user,mySeatNumber]
            );            
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
