import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CrossfadeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSrc: props.src,
      topAlt: props.alt,
      bottomOpacity: 0,
      bottomSrc: props.src,
      bottomAlt: props.alt
    };
  }
  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const oldAlt = this.state.topAlt;
    const newSrc = newProps.src;
    const newAlt = newProps.alt;
    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: false }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          {
            bottomSrc: oldSrc,
            bottomAlt: oldAlt,
            topSrc: newSrc,
            topAlt: newAlt,
            bottomOpacity: 0.99
          },
          () => {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(
              () => this.setState({ bottomOpacity: 0 }),
              20
            );
          }
        )
      );
    }
  }
  render() {
    const { duration, timingFunction, delay, style } = this.props;
    const { topSrc, topAlt, bottomOpacity, bottomSrc, bottomAlt  } = this.state;
    return (
      <div style={{ ...defaultStyle, ...{ position: "relative" } }}>
        {topSrc &&
          <img
            style={{ ...defaultStyle, ...style, ...{ position: "absolute" } }}
            src={topSrc}
            alt={topAlt}
          />}
        {bottomSrc &&
          <img
            style={{
              ...defaultStyle,
              ...style,
              ...{
                opacity: bottomOpacity,
                transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`
              }
            }}
            src={bottomSrc}
            alt={bottomAlt}
          />}
      </div>
    );
  }
}

const defaultStyle = { maxWidth: "100%", maxHeight: "100%" };

CrossfadeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object
};

CrossfadeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0
};
