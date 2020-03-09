import React, { Component } from 'react'
import { findImage } from '../services/DogService';
import SearchForm from './shared/SearchForm';

class Dog extends Component {
  state = {
    loading: false,
    imageUrl: null
  };

  search(query) {
    this.setState({
      ...this.state,
      loading: true,
    });

    findImage(query).then(url => {
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
        <SearchForm disabled={this.state.loading} onSubmit={this.search.bind(this)}/>
        <img alt="Dog" src={this.state.imageUrl}/>
      </div>
    )
  }
}

export default Dog;
