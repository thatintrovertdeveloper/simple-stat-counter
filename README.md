# SimpleStatCounter

SimpleStatCounter is a JavaScript class that provides a way to animate numeric counting for elements when they become visible in the viewport. It uses the Intersection Observer API to trigger the counting animation when elements scroll into view.

## Features

- **Counting Animation:** Smoothly animates numeric counting for elements.
- **Intersection Observer:** Observes elements to start counting when they enter the viewport.
- **Customizable Options:** Allows customization of selector, root, threshold, interval, increment divisor, and container.

## Installation

No installation is necessary to use SimpleStatCounter directly in your HTML files. Simply include the script in your project:

```html
<script src="simple-stat-counter.js"></script>
```

## Usage

1. **HTML Structure:**

   Ensure your HTML elements are structured appropriately for counting:

   ```html
   <div class="counting" data-count="100">0</div>
   ```

   - `.counting`: The class used to identify elements for counting.
   - `data-count`: Attribute specifying the final count value.

2. **Initialization:**

   Initialize SimpleStatCounter with optional configuration:

   ```javascript
   // Example initialization
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

   Adjust the options to fit your specific needs:

   - `selector`: CSS selector for elements to observe and count.
   - `root`: Root element for the intersection observer (default: `null` for viewport).
   - `rootMargin`: Margin around the root for intersection observer.
   - `threshold`: Intersection threshold for triggering the callback.
   - `interval`: Interval in milliseconds for the counting animation.
   - `incrementDivisor`: Divisor for calculating increment values.
   - `container`: Optional container element selector to observe instead of individual elements.

4. **Notes:**

   - Ensure elements with the `.counting` class have a `data-count` attribute specifying the final count value.
   - The counting animation starts when an element with `.counting` enters the viewport.

## Example

See `index.html` for a basic example demonstrating SimpleStatCounter in action.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
