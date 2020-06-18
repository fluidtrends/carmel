;(() => {
  if ('addEventListener' in window) {
    window.addEventListener('load', function () {
      document.body.className = document.body.className.replace(
        /\bis-preload\b/,
        ''
      )
    })
    document.body.className += navigator.userAgent.match(/(MSIE|rv:11\.0)/)
      ? ' is-ie'
      : ''
  }
})()
