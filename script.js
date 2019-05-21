
var parameters = {
    "id": "ggbApplet",
    "appName": "graphing",
    "customToolBar": "Herramientas, 0 39 | 1 501 67 , 5 19 , 72 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12",
    "width": window.innerWidth,
    "height": window.innerHeight,
    "showToolBar": true,
    "showAlgebraInput": true,
    "showMenuBar": false,
    "showToolBarHelp": true,
    "showZoomButtons": true,
    "allowStyleBar": true,
    "showFullscreenButton": true,
    "language":"es"
};

var ggbApp = new GGBApplet(parameters, true);

window.addEventListener("load", function() { 
    ggbApp.inject('ggb-element');
});