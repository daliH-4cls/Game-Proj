console.log("Script starts here");

function playGame() {
    console.log("click");

    // Start Level 1
    let num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
    num = getRandomNum();
    createCircle(num);
    createCircle(num);
}

function createCircle(num) {
    // Create a div element for the circle
    let circle = document.createElement("div");

    // Set text to a number
    circle.innerText = num;

    // Set styles
    circle.style.backgroundColor = "white";
    circle.style.width = "75px";
    circle.style.height = "75px";
    circle.style.borderRadius = "35px";
    circle.style.alignContent = "center";
    circle.style.textAlign = "center";
    circle.style.fontSize = "25px";
    // Code below is important for getRandomX and getRandomY
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    // Link to html
    document.body.appendChild(circle);
}

// Generate random x coordinates
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

//Generate random y coordinates
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

function getRandomNum() {
    let randNum = Math.random() * 100;
    randNum = Math.floor(randNum);
    return randNum;
}