import React, { Component } from 'react';

class Canvas extends Component {
  renderCanvas() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    canvas.width = canvas.width;
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      if(this.props.transform){
        const transform = this.props.transform.split(',');
        console.log(...transform);
        ctx.setTransform(...transform);
      }
      ctx.drawImage(img, 0, 0, img.width, img.height);
    }
    img.src = this.props.image;
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  render() {
      return (
        <div data-transform={this.props.transform}>
          <canvas ref="canvas" width={600} height={600} />
        </div>
      );
  }
}

export default Canvas;
