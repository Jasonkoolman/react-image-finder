import React, { Component } from 'react'
import { findImage } from '../services/DogService';

class Dog extends Component {
  state = {
    loading: false,
    imageUrl: null
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });

    findImage('hound').then(url => {
      this.setState({
        loading: false,
        imageUrl: url
      });
    });
  }

  render() {
    return (
      <div className="card">
        <h3>Dogs</h3>
        <form className="search-form">
          <input type="search" placeholder="Search query" />
          <button type="submit">Search</button>
        </form>
        <img alt="Dog" src={this.state.imageUrl}/>
      </div>
    )
  }
}

export default Dog;
