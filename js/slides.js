// pick all images and layer them based on z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of two things
let currentSlide = 0
let z = 1

// when user clicks slideArea, change slide based on z-index
slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1

  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }

  z = z + 1

  // remove the animation from the style for EVERY IMAGE
  images.forEach(image => {
    image.style.animation = ""
  })

  // pick the right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

// when user hovers over the slide area, put all images in a random place
slideArea.addEventListener("mouseover", function () {
  images.forEach(image => {
    const x = 100 * Math.random() - 50
    const y = 100 * Math.random() - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

// when user moves pointer away, put images back in original position
slideArea.addEventListener("mouseout", function () {
  images.forEach(image => {
    image.style.transform = ""
  })
})
