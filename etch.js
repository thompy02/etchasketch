
const mainContainer = document.getElementById("main-container");
let rows = document.getElementsByClassName("grid-row");
let cells = document.getElementsByClassName("cell")

//creates a 16x16 grid
function standardGrid(){
    makeRows(16);
    makeColumns(16);
}

//turns (rows, columns) input into a grid
function makeRows(rowNum){

    //makes rows
    for(i=0; i < rowNum; i++){
        let row = document.createElement("div");
        mainContainer.appendChild(row).classname = "gridRow"

    };
};

//makes columns 
function makeColumns(cellNum){
    for(r = 0; r < rows.length; r++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell)



        }


    }

}

//clear button

//color picker

