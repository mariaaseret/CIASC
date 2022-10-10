var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
var button = tablet.addButton({ text: "TEST" });

button.clicked.connect(function () {
    print("TEST button clicked");
});

Script.scriptEnding.connect(function () {
    tablet.removeButton(button);
});
