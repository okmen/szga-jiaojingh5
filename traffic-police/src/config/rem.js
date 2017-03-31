/* eslint-disable */
(function () {
  const baseSize = 32
  const setFontSize = () => {
    const scale = document.documentElement.clientWidth / 750
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  }
  if (window.isMobile) {
    setFontSize()
    window.onresize = setFontSize
  } else {
    document.documentElement.className += ' norem'
  }
}())

/* eslint-enable */
