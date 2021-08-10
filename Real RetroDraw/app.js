

function makeGrid(){


for (i=0; i<64; i++){
    $('.grid').append('<div class="cell">')
}

}

makeGrid();


//


let colors = [
    'firebrick',
    'coral',
    'blue',
    'lightskyblue',
    'blueviolet',
    'darkgreen',
    'limegreen',
    'darkorange',
    'gold',
    'saddlebrown',
    'black',
    'white',
]

function makePalette(){

for (let i=0; i<colors.length; i++){

    const newColor = colors[i];
    const colorButton = $('<button>').css('background-color', newColor);
    $('.palette').append( $(colorButton))

}

$('.palette button').first().addClass('active');
}

makePalette();


//


function onPaletteClick(){

    $('.palette button').removeClass('active');
    
    $(this).addClass('active');

}

$('.palette button').click(onPaletteClick);


//

let mouseIsDown = false;

function clickDrag() {
    let activeColor = $('.active').css('background-color')

    $('.cell').mousedown(function(){
        mouseIsDown = true
    })


    $('.cell').mouseup(function (){
        mouseIsDown = false
    })

    if (mouseIsDown === true){
        $(this).css('background-color', activeColor)
    }

}

$('.cell').mouseenter(clickDrag)


//


function onGridClick(){


    const buttonColor = $('button.active').css('background-color')

    if ($(this).css('background-color') === buttonColor){
        $(this).css('background-color', '')
    } else {
        $(this).css('background-color', buttonColor)
    }

}

$('.grid .cell').click(onGridClick);


//


function onClearClick(){

$('.grid .cell').css('background-color', '')

$('.grid').css('background-color', '')

}

$('.controls .clear').click(onClearClick)


//


function onFillAllClick(){

    const buttonColor = $('button.active').css('background-color')

    $('.grid').css('background-color', buttonColor)

    $('.grid .cell').css('background-color', buttonColor)

}

$('.controls .fill-all').click(onFillAllClick)

//


function onFillEmptyClick(){

    const buttonColor = $('button.active').css('background-color')

    const grid = $('.grid .cell')

    for(let i=0; i<grid.length; i++){

        let squareColor = $(grid[i]);

        if (squareColor.css('background-color') === 'rgba(0, 0, 0, 0)') {
            squareColor.css('background-color', buttonColor)

        }
    }

}

$('.controls .fill-empty').click(onFillEmptyClick)


//


function newColor(){
    let customColor = $('#custom-color').val();
    $('.palette button').removeClass('active');
    let customButton = $('<button>').css('background-color', customColor);
    $('.palette').prepend(customButton.first().addClass('active'))
    $('.palette button').click(onPaletteClick);

}

$(".newColorButton").click(newColor)


//

$('#grid-columns').click(function(){
    $('#grid-columns').text('')
})

$('#grid-rows').click(function(){
    $('#grid-rows').text('')
})


//


$('.newGrid').click(function(){
    makeGrid();
    let gridCols = $('#grid-columns').val();
    let gridRows = $('#grid-rows').val();
    let totalSq = gridRows * gridCols;

    $('.cell').remove();
    $('.grid').css('height', totalSq * gridRows + 2).css('width', totalSq * gridCols + 2)

    for (let i=1; i<= totalSq; i++){
        let newCells = $("<div class='cell'>").css('height', totalSq).css("flex", `0 0 ${totalSq}px`)
        $('.grid').append(newCells)
    }
    
$('.cell').click(onGridClick)
$('.cell').mouseenter(clickDrag)

})





