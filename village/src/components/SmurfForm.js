import React, { Component } from 'react';
import axios from 'axios';
import Smurfs from './Smurfs'
import {Link} from 'react-router-dom'


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: props.smurfs,
      addSmurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
    .post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(res => {this.setState({
      smurfs: res.data
    })})
    .catch(err => {
      console.log(err)
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  


  render() {
    return (
      <div className="SmurfForm">

       
      

        <h2>New Smurf</h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
          type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
          type="number"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>

      </div>
    );
  }
}

export default SmurfForm;
