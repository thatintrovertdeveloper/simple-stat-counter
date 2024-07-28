(function (global) {
  class SimpleStatCounter {
    constructor(options = {}) {
      const defaultOptions = {
        selector: ".counting",
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
        interval: 30,
        incrementDivisor: 50,
        container: null,
      };
      this.options = { ...defaultOptions, ...options };
      this.elements = document.querySelectorAll(this.options.selector);
      this.observer = new IntersectionObserver(
        this.callback.bind(this),
        this.options
      );
      this.observeElements();
    }

    observeElements() {
      if (this.options.container) {
        this.container = document.querySelector(this.options.container);
        if (this.container) {
          this.observer.observe(this.container);
        }
      } else {
        this.elements.forEach((element) => {
          this.observer.observe(element.parentElement);
        });
      }
    }

    callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countingElements = entry.target.querySelectorAll(".counting");
          countingElements.forEach((countingElement) => {
            this.startCountAnimation(countingElement);
          });
          this.observer.unobserve(entry.target);
        }
      });
    }

    startCountAnimation(element) {
      const countTo = parseInt(
        element.getAttribute("data-count").replace(/,/g, ""),
        10
      );
      let startCount = 0;
      const increment = Math.ceil(countTo / this.options.incrementDivisor);

      const animationInterval = setInterval(() => {
        startCount += increment;
        element.innerText = startCount.toLocaleString();
        if (startCount >= countTo) {
          element.innerText = countTo.toLocaleString();
          clearInterval(animationInterval);
        }
      }, this.options.interval);

      element.style.opacity = 1;
    }
  }

  global.SimpleStatCounter = SimpleStatCounter;
})(typeof window !== "undefined" ? window : this);
