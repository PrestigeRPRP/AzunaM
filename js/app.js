/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };



var typed = new Typed('#text', {
    strings: ['Congrats on passing your interview at BCSO! That’s such an awesome achievement, and I’m so proud of you! You’ve worked hard to get here, and I know you’re going to do amazing things in this role. I’m here for you every step of the way, so if you ever have questions. Know that Im always here for you! Hindi ka na nila tatawagin panget!'],
    startDelay: 3000,
    typeSpeed: 70,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});




// Get the audio element
const audio = document.getElementById('audio');

// Set the volume to 0.2
audio.volume = 0.2;

// Function to play audio
function playAudio() {
    audio.muted = false; // Unmute the audio
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

// Play audio on user interaction
document.addEventListener('click', () => {
    playAudio();
}); 


