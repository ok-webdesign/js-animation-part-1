const numDots = 20;
const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;
const clientheight = document.documentElement.clientHeight;
const clientWidth = document.documentElement.clientWidth;

function createNDots (n) {

    var dots = '';

    for (let i = 0; i < n; i++) {

        dots += `<div id=dot-${i} class="dot"></div>`;

    }

    return dots;

}


function setUpDotPositions () {

    for (let i = 0; i < numDots; i++) {

        var aniHeight = Math.max(5, Math.floor(Math.random() * 30));
        var aniWidth = aniHeight;

        $(`#dot-${i}`).animate({
            top: `${Math.floor(Math.random() * clientheight)}px`,
            bottom: `${Math.floor(Math.random() * clientheight)}px`,
            left: `${Math.floor(Math.random() * clientWidth)}px`,
            right: `${Math.floor(Math.random() *clientWidth)}px`,
            height: aniHeight,
            width: aniWidth,
            opacity: Math.random()
        }, 2000);

    }

}


$(document).ready(function () {

    var dots = createNDots(numDots);
    var hasBeenRun = false;

    $('.container').append(dots);
    $('.starter').click(function() {
        if (!hasBeenRun) {
            $('.dot').css('visibility', 'visible');
            hasBeenRun = true;
        }
        setUpDotPositions();
    });

    // setInterval(setUpDotPositions, 30);

});

