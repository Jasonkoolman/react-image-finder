import React, { Component } from 'react'
import { findImage } from '../services/DogService';
import SearchForm from './shared/SearchForm';
import DynamicImage from './shared/DynamicImage';

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
    const { loading, imageUrl } = this.state;

    return (
      <div className="card">
        <h3>Dogs</h3>
        <SearchForm disabled={loading} onSubmit={this.search.bind(this)}/>
        <DynamicImage alt="Dog" src={imageUrl}/>
      </div>
    )
  }
}

export default Dog;
