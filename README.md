# Simple Stat Counter

A simple library for animating counting elements when their parent element is in view.

## Installation

To install the library using npm, run the following command:

```
npm install simple-stat-counter
```

To use the library as a script, include the following `<script>` tag in your HTML file:

```
<script src="path/to/simple-stat-counter.js"></script>
```

Replace path/to/simple-stat-counter.js with the actual path to the library file.

## Usage

To use the library as an ES module, import it in another script like this:

```
import SimpleStatCounter from 'simple-stat-counter';

const counter = new SimpleStatCounter({
  selector: '.my-counter',
  interval: 20,
  incrementDivisor: 100
});
```

To use the library as a script, create a new instance of the `SimpleStatCounter` constructor function like this:

```
const counter = new SimpleStatCounter({
  selector: '.my-counter',
  interval: 20,
  incrementDivisor: 100
});
```

The `SimpleStatCounter` constructor function accepts an options object as an argument. The options object can contain the following properties:

- `selector`: the CSS selector for the elements to animate. The default value is `'.counting'`.

- `root`: the element that is used as the viewport for the IntersectionObserver. The default value is null, which means the viewport.

- `rootMargin`: the margin around the root element. The default value is `'0px'`.

- `threshold`: the threshold at which the IntersectionObserver callback is called. The default value is `0.2`.

- `interval`: the interval (in milliseconds) for the animation. The default value is `30`.

- `incrementDivisor`: the divisor used to calculate the increment value for the animation. The default value is `50`.

## License

The SimpleStatCounter library is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository. If you would like to contribute code, please fork the repository and submit a pull request.

## Credits

- This script is based on Veremey's code on [CodePen](https://codepen.io/veremey/pen/oNgbpKP).
