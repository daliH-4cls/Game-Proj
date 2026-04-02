console.log("Script starts here");

function playGame() {
    console.log("click");

    // Start Level 1
    createCircle();
}

function createCircle() {
    // Create a div element for the circle
    let circle = document.createElement("div");

    // Set text to a number
    circle.innerText = "1";

    // Set styles
    circle.style.backgroundColor = "white";
    circle.style.width = "55px";
    circle.style.height = "35px";

    // Link to html
    document.body.appendChild(circle);
}