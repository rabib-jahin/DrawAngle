import React from 'react';
import logo from './logo.svg';

import * as ReactDOM from 'react-dom';
import { Surface } from '@progress/kendo-drawing';

import { drawScene } from './draw-scene';

class App extends React.Component {
    surface;

    _element = null;
    _surface = null;
    state={
      angle:"",


    }
    componentDidMount() {
      
    }
    change=(e)=>{

     this.setState({
      [e.target.name]:[e.target.value]
     })
    }
    click=()=>{
  drawScene(this.createSurface(),parseInt(this.state.angle));

    }
    createSurface = () => {
        //const element = ReactDOM.findDOMNode(this);

        //this.surface = Surface.create(element);
this._surface = Surface.create(this._element, { width: 1000, height: 1000 });
        return this._surface;
    }
    render() {
          return  ( <div>
            <input type="text" name="angle" onChange={this.change}/>
            <button onClick={this.click}>click</button>
            <div ref={(div) => { this._element = div; } } />
            
            </div>


            )
    }
}

export default App;
