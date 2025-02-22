'use strict';

const TO_RIGHT = -1;
const TO_LEFT = 1;
const MAX_MARGIN_LEFT  = 0;

let numberOfImages = 0;
let transitionDuration = 0;

window.addEventListener('load', function() {
    const buttonLeft = document.getElementsByClassName('left')[0];
    const buttonRight = document.getElementsByClassName('right')[0];

    const sliderContainer = document.getElementsByClassName('slider-container')[0];

    numberOfImages = this.document.getElementsByClassName('image').length;

    getTransitionDuration(sliderContainer);

    buttonLeft.addEventListener('click', function(e) {
        moveToLeft(e, sliderContainer);
    });

    buttonRight.addEventListener('click', function(e) {
        moveToRight(e, sliderContainer);
    });
});

function getTransitionDuration(container) {
    const currentStyle = window.getComputedStyle(container);
    const transition = currentStyle.getPropertyValue('transition');
    const transitionValues = transition.split(' ');
    const transitionValueDuration = +transitionValues[1].replace('s', '');
    transitionDuration = transitionValueDuration + 0.1;
}

function moveToRight(e, container) {
    disableButton(e);
    move(container, TO_RIGHT);
}

function moveToLeft(e, container) {
    disableButton(e);
    move(container, TO_LEFT);
}

function disableButton(e) {
    e.srcElement.setAttribute('disabled', '');
    setTimeout(function() {e.srcElement.removeAttribute('disabled');}, transitionDuration);
}

function move(container, move) {
    const currentStyle = window.getComputedStyle(container);
    const totalWidth = currentStyle.width.replace('px', '');
    const width = +(totalWidth / numberOfImages);
    const marginLeft = +(currentStyle.marginLeft.replace('px', ''));
    const minMarginLeft = -(width * (numberOfImages- 1));

    if(isAllowedToMove(move, marginLeft, minMarginLeft)) {
        container.style.marginLeft = (marginLeft + (width * move)) + 'px';
    }
}

const isAllowedToMove = (move, marginLeft, minMarginLeft) =>
    allowedToMoveToLeft(move, marginLeft) ||
    allowedToMoveToRight(move, marginLeft, minMarginLeft);

const allowedToMoveToLeft = (move, marginLeft) => move === TO_LEFT && marginLeft < MAX_MARGIN_LEFT;
const allowedToMoveToRight = (move, marginLeft, minMarginLeft) => move === TO_RIGHT && marginLeft > minMarginLeft;
