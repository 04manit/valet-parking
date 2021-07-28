canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_x = 10;
car_y = 10;
car_width = 70;
car_height = 125;
car_image = 'car.png';
background_image = 'background.png';
add();
function add(){
    console.log("came");
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadcar();
    rover_imgTag.src = car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar(){
    ctx.drawImage(rover_imgTag, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}
function up(){
    if(car_y > 10){
        car_y = car_y - 10;
        console.log("When up key is pressed, X = "+car_x+", Y = "+car_y);
        uploadBackground();
        uploadcar();
    }
}
function down(){
    if(car_y < 260){
        car_y = car_y + 10;
        console.log("When up key is pressed, X = "+car_x+", Y = "+car_y);
        uploadBackground();
        uploadcar();
    }
}
function left(){
    if(car_x > 15){
        car_x = car_x - 10;
        console.log("When up key is pressed, X = "+car_x+", Y = "+car_y);
        uploadBackground();
        uploadcar();
    }
}
function right(){
    if(car_x < 720){
        car_x = car_x + 10;
        console.log("When up key is pressed, X = "+car_x+", Y = "+car_y);
        uploadBackground();
        uploadcar();
    }
}