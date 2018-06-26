import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas'
import Arguments from './components/Arguments'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: '',
      transform: ''
    };
  }

  render() {
    const onRender = (image, transform) => {
      this.setState({ image, transform });
    }

    return (
      <div className="App">
        <Arguments onRenderClick={onRender}/>
        <Canvas image={this.state.image} transform={this.state.transform}/>
      </div>
    );
  }
}

export default App;
