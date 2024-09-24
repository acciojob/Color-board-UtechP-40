//your JS code here. If required.
let container = document.querySelectorAll(".container");
// console.log(container);



for (let i = 0; i < 800; i++) {
    let box = document.createElement("div");
    container[0].append(box);
    // box.style.cssText = "height: 20px; width: 20px;";
    box.className = "square"
}
let square = document.querySelectorAll(".square");

square.forEach((sq) => {
    sq.addEventListener("mouseover", () => {
        sq.style.backgroundColor =  randomColor();
        
        setTimeout(() => {
            sq.style.backgroundColor = '';
        }, 1000)
    })
})

function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}