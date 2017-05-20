# react-crossfade-image

Simple component for crossfading images. Just pass it a new src prop and enjoy the fade!

## Usage



```javascript
<CrossfadeImage
  src={imageSrc}
  duration={500}
  timingFunction={"ease-out"}
  delay={200}
/>
```

Clone and run `npm start` for demo.

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
Styling for the image wrapper

## License
MIT

