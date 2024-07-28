# SimpleStatCounter

SimpleStatCounter is a JavaScript class that enables smooth numeric counting animations for elements when they enter the viewport. It utilizes the Intersection Observer API to trigger these animations.

## Features

- **Counting Animation:** Smoothly animates numeric counting for elements.
- **Intersection Observer:** Watches elements and starts counting when they appear in the viewport.
- **Customizable Options:** Allows customization of selector, root, threshold, interval, increment divisor, and container.

## Installation

You can install the library via npm with the following command:

```bash
npm install simple-stat-counter
```

To use it as an ES module, import it in your script:

```javascript
import SimpleStatCounter from "simple-stat-counter";
```

Alternatively, include it as a script tag in your HTML file:

```html
<script src="path/to/simple-stat-counter.js"></script>
```

Replace `path/to/simple-stat-counter.js` with the actual path to the library file.

## Usage

1. **HTML Structure:**

   Ensure your HTML elements are structured for counting:

   ```html
   <div class="counting" data-count="100">0</div>
   ```

   - `.counting`: Identifies elements for counting.
   - `data-count`: Specifies the final count value.

2. **Initialization:**

   Initialize SimpleStatCounter with optional configuration:

   ```javascript
   const counter = new SimpleStatCounter({
     selector: ".counting", // Selector for counting elements
     root: null, // Viewport root (null for viewport)
     rootMargin: "0px", // Margin around the root
     threshold: 0.2, // Intersection threshold
     interval: 30, // Interval for counting animation (ms)
     incrementDivisor: 50, // Divisor for increment calculation
     container: null, // Optional container element selector
   });
   ```

3. **Customization:**

   Adjust options as needed:

   - `selector`: CSS selector for elements to observe and count.
   - `root`: Root element for intersection observer (default: `null` for viewport).
   - `rootMargin`: Margin around the root for intersection observer.
   - `threshold`: Intersection threshold for triggering the callback.
   - `interval`: Interval in milliseconds for counting animation.
   - `incrementDivisor`: Divisor for calculating increment values.
   - `container`: Optional container element selector to observe instead of individual elements.

4. **Notes:**

   - Ensure elements with the `.counting` class have a `data-count` attribute specifying the final count value.
   - Counting starts when an element with `.counting` enters the viewport.

## Example

Refer to `index.html` for a basic example demonstrating SimpleStatCounter in action or check out the [CodePen demo](https://codepen.io/thatIntrovertDeveloper/pen/RwzWXyx).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

This script is based on Veremey's code on [CodePen](https://codepen.io/veremey/pen/oNgbpKP).
