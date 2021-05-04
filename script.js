const gridcontainer = document.querySelector("#grid-container");
let numOFTimes = 256;  
for (let i = 0;i<5;i++){
    const singleCell = document.createElement("div");
    singleCell.textContent = "hello";
    singleCell.style.color = "white";
    singleCell.classList.add("bg-red")
    singleCell.addEventListener('click',() =>{alert ("blue");});
    gridcontainer.appendChild(singleCell);
}