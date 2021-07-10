
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

c1_image = "car1.png";
c1_x_position = 220;
c1_y_position = 380;
c1_width = 130;
c1_height = 90;

c2_image = "car2.png";
c2_x_position = 230;
c2_y_position = 310;
c2_width = 105;
c2_height = 110;

b_image = "track.jpeg";

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = b_image;

    c1_imgTag = new Image();
    c1_imgTag.onload = uploadc1;
    c1_imgTag.src = c1_image;

    c2_imgTag2 = new Image();
    c2_imgTag2.onload = uploadc2;
    c2_imgTag2.src = c2_image;

}

function uploadBackground() {

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadc1(){

    ctx.drawImage(c1_imgTag, c1_x_position, c1_y_position, c1_width, c1_height );

}

function uploadc2() {

    ctx.drawImage(c2_imgTag2, c2_x_position, c2_y_position, c2_width, c2_height);

}

canvas.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    //up = 38 , down = 40, right = 39, left = 37

    if(keyPressed == '38') {

        up();
        console.log("Up");

    }

    if(keyPressed == '40') {

        down();
        console.log("Down");

    }

    if(keyPressed == '39') {

        right();
        console.log("Right");

    }

    if(keyPressed == '37') {

        left();
        console.log("Left");

    }

}

function up() {

    if(c1_y >= 0){

        c1_y = c1_y - 10;
        uploadBackground();
        uploadc1();
        uploadc2();

    }

}

function down() {

    if(c1_y <= 500){

        c1_y = c1_y + 10;
        uploadBackground();
        uploadc1();
        uploadc2();

    }

}