const numDots = 60;
const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;
const clientheight = document.documentElement.clientHeight;

function createNDots (n) {
    var dots = '';
    for (let i = 0; i < n; i++) {
        dots += `<div id=dot-${i} class="dot"></div>`;
    }
    return dots;
}

$(document).ready(function () {

    var dots = createNDots(numDots);
    var hasBeenRun = false;

    $('.container').append(dots);
    
    $('.starter').click(function() {
        $('.dot').css('visibility', 'visible');
        for (let i = 0; i < numDots; i++) {
            var aniHeight = Math.max(5, Math.floor(Math.random() * 30));
            var aniWidth = aniHeight;
            $(`#dot-${i}`).animate({
                top: `${Math.floor(Math.random() * clientheight)}px`,
                bottom: `${Math.floor(Math.random() * clientheight)}px`,
                left: `${Math.floor(Math.random() * screenWidth)}px`,
                right: `${Math.floor(Math.random() * screenWidth)}px`,
                height: aniHeight,
                width: aniWidth,
                opacity: Math.random()
            }, 2000);
        }
    })

});

