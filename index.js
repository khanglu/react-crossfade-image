import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CrossfadeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSrc: props.src,
      topOpacity: 1,
      bottomSrc: props.src
    };
  }
  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      this.setState({ bottomSrc: newSrc, topOpacity: 0 }, () => {
        if (!this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(
          () =>
            this.setState({
              topSrc: newSrc,
              topOpacity: 1
            }),
          this.props.duration + this.props.delay
        );
      });
    }
  }
  render() {
    const { duration, timingFunction, delay, style } = this.props;
    const { topSrc, topOpacity, bottomSrc } = this.state;
    return (
      <div style={style}>
        <img
          style={{
            opacity: topOpacity,
            position: "absolute",
            transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`
          }}
          src={topSrc}
        />
        <img src={bottomSrc} />
      </div>
    );
  }
}

CrossfadeImage.propTypes = {
  src: PropTypes.string.isRequired,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  style: PropTypes.object
};

CrossfadeImage.defaultProps = {
  duration: 300,
  timingFunction: "ease",
  delay: 0
};
