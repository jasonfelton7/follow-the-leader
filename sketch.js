let t;
let x; // x position
let y; // y position

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    t = 0;
}

function draw() {

    background(0, 16);
    noStroke();
    fill(166, 0, 0);

    // sets the x position and incorporates the noise function
    x = width * noise(t + 15);

    // sets the y position and incorporates the noise function
    y = height * noise(t + 5);

    // draws an ellipse with the variables for x and y passed in
    ellipse(x, y, 150, 150);

    fill(255, 255, 0);
    ellipse(x * 1.15, y *1.15, 100, 100);

    fill(255);
    ellipse(x * 1.25, y *1.25, 75, 75);
    // Increments the t variable to control the noise amount
    t += 0.005;

}
