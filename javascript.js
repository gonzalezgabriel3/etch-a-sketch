const div = document.querySelector(".container");
div.setAttribute("style", "height: 600px; width: 600px;background-color: blue; display: flex; flex-direction:column; margin: auto;");
const square = document.querySelector(".square");


let grid = function newGrid(columns){
    for (let i=0; i < columns; i++){
        
       const squareColumn = document.createElement("div");
        squareColumn.setAttribute("style", "display: flex; flex-direction: row; flex: 1; border: 1px dotted black;");
        div.appendChild(squareColumn);
         

        for (let x=0; x<columns; x++){
            const squareRow = document.createElement("div");
            squareRow.setAttribute("class", "square");
            squareRow.setAttribute("style", "flex: 1; border: 1px dotted black;");
            squareRow.addEventListener("mouseover", ()=>{squareRow.style.backgroundColor = "black";})
            squareColumn.appendChild(squareRow); 

        }
        
        
    }
    
    
    
}
grid(100); 
