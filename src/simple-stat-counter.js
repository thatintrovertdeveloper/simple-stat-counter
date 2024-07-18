(function (global) {
  function SimpleStatCounter(options = {}) {
    this.options = {
      selector: ".counting",
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
      interval: 30,
      incrementDivisor: 50,
      ...options,
    };
    this.init();
  }

  SimpleStatCounter.prototype.init = function () {
    this.elements = document.querySelectorAll(this.options.selector);
    this.observer = new IntersectionObserver(
      this.callback.bind(this),
      this.options
    );
    this.elements.forEach((element) => {
      this.observer.observe(element.parentElement);
    });
  };

  SimpleStatCounter.prototype.callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const countingElement = entry.target.querySelector(
          this.options.selector
        );
        this.startCountAnimation(countingElement);
        this.observer.unobserve(entry.target);
      }
    });
  };

  SimpleStatCounter.prototype.startCountAnimation = function (element) {
    const countTo = parseInt(element.getAttribute("data-count"), 10);
    let startCount = 0;
    const increment = Math.ceil(countTo / this.options.incrementDivisor);

    const animationInterval = setInterval(() => {
      startCount += increment;
      element.innerText = startCount;
      if (startCount >= countTo) {
        element.innerText = countTo;
        clearInterval(animationInterval);
      }
    }, this.options.interval);

    element.style.opacity = 1;
  };

  global.SimpleStatCounter = SimpleStatCounter;
})(typeof window !== "undefined" ? window : this);
