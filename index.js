const startSlider = () => {
    const root = document.documentElement;
    const numberOfBoxes = document.querySelectorAll('.bXi').length;

    // updates the variable for the total number of boxes we have on the slider
    root.style.setProperty('--numberOfBoxes', numberOfBoxes);

    const moveSliderLeft = () => {
        console.log('we dey move to the left')
    }
}

$(document).ready(function() {
    $('.coverIn').on('mouseover', function () {
        $('#goOut')[0].beginElement();
    })
    $('.coverIn').on('mouseout', function () {
        $('#goIn')[0].beginElement();
    })


    // for the images
    startSlider();
})

