import React, { Component } from 'react'
import { findImage } from '../services/CatService';
import SearchForm from './shared/SearchForm';

class Cat extends Component {
  state = {
    loading: false,
    imageUrl: null
  };

  search() {
    this.setState({
      ...this.state,
      loading: true,
    });

    findImage('cat').then(url => {
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
        <img alt="Cat" src={this.state.imageUrl}/>
      </div>
    )
  }
}

export default Cat;
