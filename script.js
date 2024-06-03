const grid = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}


grid.addEventListener("mouseover", function (e) {
    e.target.style.background = "green";
});

let number = 0;
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    number = prompt("Please enter your new grid size.");
    while (number > 100 || number < 0) {
        number = prompt("Invalid value, value should be 0 - 100");
    }
    grid.remove();
    const gridTwo = document.querySelector(".container-two");
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            gridTwo.appendChild(cell);
        }
    }
});

