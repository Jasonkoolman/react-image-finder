import React, { Component } from 'react'
import { findImage } from '../services/CatService';
import SearchForm from './shared/SearchForm';
import DynamicImage from './shared/DynamicImage';

class Cat extends Component {
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
        <h3>Cats</h3>
        <SearchForm disabled={this.state.loading} onSubmit={this.search.bind(this)}/>
        <DynamicImage alt="Cat" src={this.state.imageUrl}/>
      </div>
    )
  }
}

export default Cat;
