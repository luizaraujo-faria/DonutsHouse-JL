const slides = document.getElementById('slides')
const totalSlides = document.querySelectorAll('.slide').length
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let slideIndex = 0

function slideShow(index){
    const slideWidth = document.querySelector('.slide').clientWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`
}

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides
    slideShow(slideIndex)
})

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides
    slideShow(slideIndex)
})