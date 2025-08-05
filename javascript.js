const div = document.querySelector(".container");
div.setAttribute("style", "height: 600px; width: 600px;background-color: #adb9ba; display: flex; flex-direction:column; margin: auto; border: 5px solid black;");
const btn = document.querySelector(".btn");
btn.setAttribute("style", "background-color: gold; padding: 8px; border-radius: 12px; font-size: 20px;" 
                +"display: block; margin: auto; margin-bottom: 18px; width: 200px;")

newGrid(16);    

function newGrid(columns){   
    for (let i=0; i < columns; i++){
        
        const squareColumn = document.createElement("div");
        squareColumn.setAttribute("style", "display: flex; flex-direction: row; flex: 1; ");        
        div.appendChild(squareColumn);         

        for (let x=0; x<columns; x++){
            const squareRow = document.createElement("div");            
            squareRow.setAttribute("style", "flex: 1; ");
            squareRow.addEventListener("mouseover", ()=>{
                let randomColor = function (){return  Math.floor(Math.random() * 256); }
                squareRow.style.backgroundColor = `rgb(${+randomColor()},${+randomColor()},${+randomColor()})`;
                // squareRow.style.opacity = `0.5`;
                let opac = 0;
                // while (opac<101){
                //     squareRow.setAttribute("style", `opacity: ${+opac}%` )
                //     opac+=10;
                // }
            });
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
               
}));
