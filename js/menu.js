const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when clicking the toggle tag, toggle a class of open on the main tag
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")
})