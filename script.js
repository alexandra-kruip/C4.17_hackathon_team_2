var array = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]; // x = big array

$(document).ready(function() {
    createBoard();
    $('.col').click(colClicked);
});


function createBoard () {

    for(var x = 0; x <= 6 ; x++){
        var outerDiv = $('<div>').addClass('col' + x).addClass('col').attr('keyValue', x);
        for(var y = 0; y<=5; y++){
            var innerDiv = $('<div>').addClass("innerDiv");
                // .text(x + " , " + y).addClass('col' + y);
            outerDiv.append(innerDiv);
        }
        $('body').append(outerDiv);
    }
}
// function selectingCol(){
// }
function colClicked () {
    var clickedCol = $(this).attr("keyValue");
    array[clickedCol].push("1");

    console.log(array);


}





// var checkCol = $("[class = xClicked]");
// var start = $(this).attr('x', parseInt(xClicked)).attr('y', 0);
// console.log(xClicked);
// var xClicked = null;
// console.log(xClicked);
// var openSpot =
// div with attr x is clicked, loop through all other divs with a class of x
// check if each div has class of empty(null) or taken
// if taken, go back one div and add taken class
// if not taken continue until y = 5
// take last available spot (y = 5)    // if div with attr x is clicked, loop through all other divs with a class of x
// check if each div has class of empty(null) or taken
// if taken, go back one div and add taken class
// if not taken continue until y = 5
// take last available spot (y = 5)
//
// $(openSpot).addClass(‘takenPlayer3’);
// }
