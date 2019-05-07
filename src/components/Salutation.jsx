import React, { Component } from 'react';

// with class
export default class Salutation extends Component {

  state = {
    type: this.props.type, // Good for us
    name: this.props.name // Jenifer
  }

  setType(e) {
    // let i = 1;    
    // setInterval(() => {
    //   this.setState({ type: ++i})
    // }, 1000);

    this.setState({ type: e.target.value }) // this is for change the value in the screen, component is only updated when the state changes
  }

  setName(e) {
    this.setState({ name: e.target.value })
  }  
  
  render() {
    const { type, name }  = this.state;

    return (
      <div>
        <h1> {type} {name}!</h1>
        <hr/>
        <input type="text" placeholder="Type..." value={type} onChange={e => this.setType(e)}/>
        <input type="text" placeholder="Name..." value={name} onChange={e => this.setName(e)}/>
      </div>
    )
  } 
}
