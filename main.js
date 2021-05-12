var canvas = new fabric.Canvas('myCanvas');
image_width = 30;
image_height = 30;
player_x = 10;
player_y = 10;
var playerObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
        top:player_y,
        left:player_x
        });
        canvas.add(playerObject);
        
    });
}

function newimg(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
    image_object = Img;

    image_object.scaleToWidth(image_width);
    image_object.scaleToHeight(image_height);
    image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(image_object);
    
});

}