var increment = document.getElementById("increase");
var result = document.getElementById("counter");
var reset = document.getElementById("reset");
var decrement = document.getElementById("decrease");


increment.addEventListener("click", function() {
    result.textContent ++;
})

reset.addEventListener("click", function() {
    result.textContent = 0;
})

decrement.addEventListener("click", function() {
    if (result.textContent >=1) {
        result.textContent --;
    }
})
var go = document.getElementById("start-round");

var div1 = document.getElementById("left-user");
var div2 = document.getElementById("right-user");

const images = ["paper.png","scissor.jpg","stone.jpg"];

go.addEventListener("click", function() {
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const index1 = Math.floor(Math.random() * images.length);
    const index2 = Math.floor(Math.random() * images.length);
    image1.alt = images[index1];
    image2.alt = images[index2];
    image1.src = `./game/${images[index1]}`;
    image2.src = `./game/${images[index2]}`;
    image1.width =250;
    image2.width =250;

    div1.append(image1);
    div2.append(image2);
})

