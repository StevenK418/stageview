// Based on code shown at: https://www.jqueryscript.net/gallery/Simple-Dynamic-Tiled-Photo-Gallery-Plugin-with-jQuery-jLastic.html
$(document).ready(function() {
    $('.jLastic').jLastic({
        tilesPerRow: 5,
        tileMargin: 15,
        tileWidth:	150,
        tileHeight: 100,
        landscapeExpandWidth: 240,
        landscapeExpandHeight: 130,
        portraitExpandWidth: 130,
        portraitExpandHeight: 240,
        animationDurationExpand: 300,
        animationDurationCompress: 300,
        event: "default"
    });
});