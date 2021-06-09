// defining a variable to track the posistion of the slider
var currentPosition = 1;
// gettomg the next & previous buttons
var nextBtn = document.getElementById('nextBtn');
var prvBtn = document.getElementById('prvBtn');

// next function
// the function move to the next position. Since we know we are having 3 slides cause we have 12 artists & 4 per page, we don't allow more than three moves
// when we reach the end of the slide, we add a disable style to the button so the user knows he can't move further.
function goNext() {
    currentPosition = currentPosition + 1;
    if (currentPosition <= 3) {
        let element_to_scroll_to = document.querySelector('.end_' + currentPosition);
        element_to_scroll_to.scrollIntoView({
            behavior: 'smooth'
        });
    }
    if (currentPosition == 3) { nextBtn.classList.add('disabled') } else { nextBtn.classList.remove('disabled'); }
    prvBtn.classList.remove('disabled');
}

// Previous function
// the function move to the previous position. We only allow moves when slidr position is more than one
// when we reach the begining of the slide, we add a disable style to the button so the user knows he can't move further.

function goPrv() {
    currentPosition = (currentPosition == 1) ? currentPosition : currentPosition - 1;

    if (currentPosition >= 1) {
        let element_to_scroll_to = document.querySelector('.start_' + currentPosition);
        element_to_scroll_to.scrollIntoView({
            behavior: 'smooth'
        });
    }
    if (currentPosition == 1) { prvBtn.classList.add('disabled') } else { prvBtn.classList.remove('disabled'); }
    nextBtn.classList.remove('disabled');
}