const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when clicking the toggle tag, toggle a class of open on the main tag
// once open, make toggle text say Close
// if closed, make toggle text say Menu
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="../img/close.svg"> Close`
  } else {
    toggleTag.innerHTML = `<img src="../img/menu.svg"> Menu`
  }

})
