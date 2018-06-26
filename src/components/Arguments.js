import React, {Component} from 'react';

class Arguments extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const onRenderClick = () => {
      const image = this.refs.image.value;
      const transform = this.refs.transform.value;
      this.props.onRenderClick(image, transform);
    }

    return(
      <div id="arguments">
        <label htmlFor="img-url">IMAGE</label>
        <input
          ref="image"
          name="img-url"
          id="img-url"
          className="img-url"
          />
        <br/>
        <label htmlFor="img-transform">TRANSFORM MATRIX</label>
        <input
          ref="transform"
          name="img-transform"
          id="img-transform"
          className="img-transform"
          />
        <br/>
        <button className="button-render" onClick={onRenderClick}>Render</button>
      </div>
    );
  }
}

export default Arguments;