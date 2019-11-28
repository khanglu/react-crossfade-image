# react-crossfade-image

![](https://img.shields.io/npm/v/react-crossfade-image.svg)

Simple component for crossfading images. Just pass it a new src prop and enjoy the fade!

![alt react-crossfade-image-example](https://media.giphy.com/media/xUPGcHDL5FJaQXz2EM/giphy.gif)

## Usage

```javascript
npm install react-crossfade-image
```
Clone and run `npm start` for demo.

Sample component:

```javascript
<CrossfadeImage src={imageSrc} />
```

## Props

### src
Image source as string - required

### duration
Duration of the fade, in ms - default to 300

### timingFunction
Support all CSS timing functions - default to 'ease'

### delay
Duration of the delay before fading, in ms - default to 0

### style
Custom styling for the image - default to { maxWidth: '100%', maxHeight: '100%' } for responsive image scaling

### containerClass

Custom class string for the container element - default to 'CrossfadeImage'

## License
MIT

