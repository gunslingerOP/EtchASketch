let container = document.getElementById('container')
let containerWidth = container.offsetWidth
let containerHeight = container.offsetHeight
function makeGrid(squares){

    if(squares>100){
       makeGrid(prompt('the maximum number is 100!'))
        return
    }
    
    for (i=0; i<squares;i++){
        let row = document.createElement('div')
        //row.style.width = containerWidth; 
        //row.style.height= containerHeight/squares;
        row.setAttribute('id','row')
        container.appendChild(row)
        

        for (j=0;j<squares;j++){
            let column = document.createElement('div')
            column.setAttribute('class','column')
            //column.style.height = containerHeight/squares
            //column.style.width = containerWidth/squares
            row.appendChild(column)
        }
                                                                                                                                                                                                                     

    }
}
makeGrid(4)

function clearGrid() {
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
}
function makeCustmGrid(){
    clearGrid()
makeGrid(prompt("How many squares per side do you want?"))  
}

function colorBlack(){
    let cell = document.getElementsByClassName('column') // .column to column

    let cells = Array.from(cell) // made an array from your node 

for (let i=0; i<cells.length;i++){
    cells[i].addEventListener('mouseover', function(){
        cell[i].style.backgroundColor = 'black'
        cell[i].style.opacity = 1

    })       
}
}

function resetGrid(){
    let cell = document.getElementsByClassName('column') // .column to column

    let reset = Array.from(cell)
    for(let i=0;i<reset.length;i++){
        reset[i].style.backgroundColor="white"
        reset[i].style.opacity = "1"
    }
}

function randomColor(){
    let cell = document.getElementsByClassName('column') // .column to column

    let cells = Array.from(cell) // made an array from your node 

for (let i=0; i<cells.length;i++){
    cells[i].addEventListener('mouseover', function(){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        cells[i].style.backgroundColor = randomColor
        cells[i].style.opacity = 1


                                                     })       
                            }
}


function darkenColor() {
    let cell = document.getElementsByClassName('column') // .column to column

    let cells = Array.from(cell)

    let opa = [];
  
    for (let i=0;i<cells.length; i++){
    opa[i]= 0
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    cells[i].addEventListener('mouseover', function(){
            opa[i] += 0.1;
            cells[i].style.backgroundColor = randomColor
            cells[i].style.opacity = opa[i]
            
        })
        
    }
}

function darkenGrey(){
    let cell = document.getElementsByClassName('column') // .column to column

    let opa = [];
    let cells = Array.from(cell)

    for (let i=0;i<cells.length; i++){
    opa[i]= 0

    cells[i].addEventListener('mouseover', function(){
            opa[i] += 0.2;
            this.style.backgroundColor = 'black'
            this.style.opacity = opa[i]
            
        })
        
    }
    
}
var stopID 
function clownTown(){
    let cell = document.getElementsByClassName('column') // .column to column

    let cells = Array.from(cell)

    for (let i=0;i<cells.length;i++){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        cells[i].style.backgroundColor=randomColor;
    }
        
}

let requestAnimationFrame = window.requestAnimationFrame  
function startClowning(){
    if(!clown){
        clown = true
      stopID= window.setInterval(clownTown, 200);
        
    }
    else{
        clown = false
        clearInterval(stopID)
    }
}

function makeCircles(){
    let cell = document.getElementsByClassName('column') // .column to column

    let cells = Array.from(cell)
    for(let i= 0;i<cells.length;i++){
        cells[i].style.borderRadius= "50%"
    } 
}

let resetBtn = document.getElementById('reset')
let colorBlackBtn = document.getElementById('black')
let gradualDark = document.getElementById('darken')
let rainbow = document.getElementById('random')
let darkenG = document.getElementById('darkenGrey')
let newGrid = document.getElementById('newG')
let clown = document.getElementById('clown')
let circles = document.getElementById('circles')

rainbow.addEventListener('click', randomColor)
colorBlackBtn.addEventListener('click', colorBlack)
resetBtn.addEventListener('click', resetGrid)
gradualDark.addEventListener('click', darkenColor)
darkenG.addEventListener('click',darkenGrey)
newGrid.addEventListener('click',makeCustmGrid)
clown.addEventListener('click',startClowning)
circles.addEventListener('click',makeCircles)