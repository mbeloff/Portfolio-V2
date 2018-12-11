let deg = 0
let el = document.querySelector('.face-bg')
let tick = () => {
    el.style.background = `background linear-gradient(${(deg++ / 2)}deg, #f03f57,#f03f57, #ff8965, #f03f57) 0 75% / 200% 200%`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElement
  }
}
