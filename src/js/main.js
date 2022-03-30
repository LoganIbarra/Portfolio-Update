(function() {
  const backToTopButton = document.getElementById('backToTop-js');

  const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();

      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    }
  }

  const showScrollButton = () => {
    if (this.pageYOffset >= 200 && !backToTopButton.classList.contains('is-visible')) {
      backToTopButton.classList.add('is-visible');
    } else if (this.pageYOffset < 200 && backToTopButton.classList.contains('is-visible')) {
      backToTopButton.classList.remove('is-visible');
    }
  }

  const throttledScroll = throttleFunction(showScrollButton, 50);

  window.addEventListener('scroll', throttledScroll);

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
})();