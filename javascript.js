let div = document.querySelector(".container");
div.setAttribute("style", "height: 600px; width: 600px;background-color: blue; display: flex; flex-direction:column; margin: auto;");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

newGrid(16);
    

function newGrid(columns){   
    for (let i=0; i < columns; i++){
        
        const squareColumn = document.createElement("div");
        squareColumn.setAttribute("style", "display: flex; flex-direction: row; flex: 1; ");        
        div.appendChild(squareColumn);         

        for (let x=0; x<columns; x++){
            const squareRow = document.createElement("div");            
            squareRow.setAttribute("style", "flex: 1; border: 1px dotted black;");
            squareRow.addEventListener("mouseover", ()=>{squareRow.style.backgroundColor = "black";})
            squareColumn.appendChild(squareRow); 

        }     
        
    } 
    
    
} 


btn.addEventListener("click", (() => {
    let userChoice;
    do {
        userChoice = prompt("Enter Desired Grid Size(Up to 100)");
    }
    while (+userChoice < 1 || +userChoice > 100 || !(+userChoice));
           
        div.replaceChildren();       
        newGrid(userChoice);          
}))
