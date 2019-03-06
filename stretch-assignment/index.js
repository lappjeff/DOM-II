const boxes = document.querySelectorAll('.block')
//set base ticker to 0
let ticker = 0;

boxes.forEach(function(currentBox) {
    currentBox.addEventListener('click', function(e) {
        //every time a box is clicked ticker is decreased by 1
        ticker += -1
        //the new value of ticker is assigned to the order display of the box clicked
        e.target.style.order = ticker
    })
    currentBox.addEventListener('mousedown', function(e) {

    })
})
