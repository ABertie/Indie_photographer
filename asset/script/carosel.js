const CAROSEL_SLIDE = document.querySelector(".carosel__slide")
const SPOTS = document.querySelector(".carosel__spots")
const SLIDE = ['<img src="./asset/img/Landskab/197A1499.jpg" alt="Flowers tree">',
    '<img src="./asset/img/Forlovelser/197A5168.jpg" alt="Field with two people">',
    '<img src="./asset/img/Hår/IMG_0034.jpg" alt="Girl with a flowery braid looking out at the water">',
    '<img src="./asset/img/Bryllup4/IMG_4708.jpg" alt="A bride with her hair up looking down at her bucket">']

var index = 0
CAROSEL_SLIDE.innerHTML = (SLIDE[index])

SLIDE.forEach(function () {
    const CREATESPOT = document.createElement("button")
    CREATESPOT.classList.add('carosel__spot')
    SPOTS.appendChild(CREATESPOT)
})
const BUTTONS = SPOTS.querySelectorAll("button")

window.addEventListener("keydown", function (e) {
    if (e.key == 'ArrowRight') {
        shuffleForward()
    } else if (e.key == 'ArrowLeft') {
        shuffleBack()
    }
})
CAROSEL_SLIDE.addEventListener("animationend", disabelAnimation)

function highlightButton() {
    BUTTONS.forEach(function (button, i) {
        if (index === i) {
            button.classList.add('highlight')
        } else {
            button.classList.remove('highlight')
        }
        button.addEventListener("click", function () {
            if (index < i) {
                CAROSEL_SLIDE.classList.add('animate__fadeOutLeftBig')
            } else {
                CAROSEL_SLIDE.classList.add('animate__fadeOutRightBig')
            }
            index = i
            highlightButton()
        })
    })
}
highlightButton()

function shuffleForward() {
    index++
    if (SLIDE.length === index) {
        index = 0
    }
    CAROSEL_SLIDE.classList.add('animate__fadeOutLeftBig')
    window.highlightButton()
}

function shuffleBack() {
    if (index === 0) {
        index = SLIDE.length
    }
    index--
    CAROSEL_SLIDE.classList.add('animate__fadeOutRightBig')
    window.highlightButton()
}

function disabelAnimation() {
    if (CAROSEL_SLIDE.classList.contains('animate__fadeOutRightBig')) {
        CAROSEL_SLIDE.innerHTML = (SLIDE[index])
        CAROSEL_SLIDE.classList.remove('animate__fadeOutRightBig')
        CAROSEL_SLIDE.classList.add('animate__fadeInLeftBig')
    } else {
        CAROSEL_SLIDE.classList.remove('animate__fadeInLeftBig')
    }

    if (CAROSEL_SLIDE.classList.contains('animate__fadeOutLeftBig')) {
        CAROSEL_SLIDE.innerHTML = (SLIDE[index])
        CAROSEL_SLIDE.classList.remove('animate__fadeOutLeftBig')
        CAROSEL_SLIDE.classList.add('animate__fadeInRightBig')
    } else {
        CAROSEL_SLIDE.classList.remove('animate__fadeInRightBig')
    }
    
}

window.setInterval(shuffleForward, 10000)