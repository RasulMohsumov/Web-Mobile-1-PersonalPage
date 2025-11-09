const div = document.querySelector(".home-text");
div.setAttribute("id", "main-div-id");

console.log(div.getAttributeNames());

let classesss = div.classList;
classesss.add("highlight");
classesss.remove("home-container");
div.setAttribute("class", classesss);
console.log(classesss);

const contact = document.getElementById("             kontakt");

// contact.addEventListener("click", showAlert);

function showAlert() {
    console.log("ALERTTTTTTT DO NOT CONTACT WITH MEEEEE!!!!!");
}

const els = [1, 2, 3];

const renderEl= () => {
    console.log("ALIASAD AL DAYYANI");
}


els.forEach(el => console.log(el));

const newParagraf = document.createElement("p");

newParagraf.textContent= "SALAM AEEE AGSAQQAAALL";
newParagraf.classList.add("highlight");
newParagraf.style.color = "purple";

document.body.appendChild(newParagraf);


//document.removeChild(document.body.children);
console.log(document.body.children);

const hobi = document.getElementById("hobby-title");
hobi.remove();

var x=10;
function testScope() {
    var x=20;
    if(true) {
        var x =30;
        console.log(x);
    }
    console.log(x);

}
testScope();
console.log(x);