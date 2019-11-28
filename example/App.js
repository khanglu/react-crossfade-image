import React, { Component } from "react";
import ReactDOM from "react-dom";
import CrossfadeImage from "../index.js";

const images = [
  "http://a5.mzstatic.com/us/r30/Purple5/v4/c1/2f/4c/c12f4cba-1d9a-f6bf-2240-04085d3470ec/icon175x175.jpeg",
  "http://is2.mzstatic.com/image/thumb/Purple122/v4/d2/36/28/d23628e5-c9bf-d0fb-104f-61fa52976ff5/source/175x175bb.jpg"
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage() {
    if (this.state.imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }
  render() {
    return (
      <div>
        <CrossfadeImage
          src={images[this.state.imageIndex]}
          duration={1000}
          timingFunction={"ease-out"}
        />
        <button onClick={this.changeImage}>Change Image</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
