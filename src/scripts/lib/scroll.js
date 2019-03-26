/* eslint-disable prettier/prettier */
var body = document.getElementsByTagName('body')[0],
  nav = document.getElementById('nav')

window.addEventListener(
  'scroll',
  function () {
    if (body.scrollTop > 0) {
      nav.className += ' no-indent'
    } else {
      nav.classList.remove('no-indent')
    }
  },
  true
)