const startSlider = () => {
    const root = document.documentElement;
    const eachBoxClass = '.bXi' // each of the box classes
    const transitionClass = 'boxManTransition' // the transitionClass for the slider cover
    let timmer;
    let timmerTime = 5000;
    let slideTo;
    let currentBoxInView = 1; // the number of box in the view window of our slider

    const sliderCover = document.querySelector('.boxMan');
    const numberOfBoxes = document.querySelectorAll(eachBoxClass).length;
    let moveToTheLeftMargin = document.querySelector(eachBoxClass).offsetWidth;

    // updates the variable for the total number of boxes we have on the slider, because we use the number to update the slider cover
    root.style.setProperty('--numberOfBoxes', numberOfBoxes);

    // the function below resets the slider
    const resetSlider = () => {
        let bxArray = [], i = 1, cln, grab;

        // loops through all the boxes pre the current box been viewed(which is surely the last box since this function would only run when the viewer is at the last box)
        for (; i < numberOfBoxes; i++) {
            grab = document.querySelector(eachBoxClass); // grabs each box
            cln = grab.cloneNode(true); // clones the box
            bxArray.push(cln); // saves the cloned clopy
            grab.remove(); // removes the box since we now a clone copy of the box
        }

        sliderCover.classList.remove(transitionClass) // removes the transition class so that we can manipulate the sliderCover without the viewer noticing any changes
        sliderCover.style.marginLeft = '0px'; // resets the margin left to zero, because at this stage we have only one box in our slider
        bxArray.forEach(elm => { sliderCover.appendChild(elm); }) // loops through the clones boxes and re-attaches them to the slider

        // we just wait for some milliseconds before we add the transition class, by now all the dom modifications must have been completed
        setTimeout(() => { sliderCover.classList.add(transitionClass) }, 100);
        currentBoxInView = 1; // now we reset the currentBoxInView
    }

    const moveSliderLeft = () => {
        slideTo = `-${currentBoxInView * moveToTheLeftMargin}px`;
        currentBoxInView++;
        sliderCover.style.marginLeft = slideTo;

        if (currentBoxInView >= numberOfBoxes) {
            setTimeout(resetSlider, 1100);
            return false;
        }
    }

    timmer = setInterval(() => { moveSliderLeft() }, timmerTime);

    document.querySelector('.boxNavLeft').addEventListener('click', () => {
        if (currentBoxInView <= 1) {
            let grab = sliderCover.lastElementChild;
            let cln = grab.cloneNode(true);

            grab.remove();
            sliderCover.insertBefore(cln, sliderCover.childNodes[0]);
            sliderCover.style.marginLeft = `-${moveToTheLeftMargin/3}px`;
            currentBoxInView = 0;

        } else {
            currentBoxInView -= 2;
        }

        clearInterval(timmer);
        moveSliderLeft();
        timmer = setInterval(() => { moveSliderLeft() }, timmerTime);
    })

    document.querySelector('.boxNavRight').addEventListener('click', () => {
        if (currentBoxInView >= numberOfBoxes) { return false; }

        clearInterval(timmer);
        moveSliderLeft();
        timmer = setInterval(() => { moveSliderLeft() }, timmerTime);
    })
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

