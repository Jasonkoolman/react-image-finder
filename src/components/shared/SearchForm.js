import React, { Component } from 'react';
import Button from './Button';

class SearchForm extends Component {
  state = {
    query: ''
  };

  render() {
    const setQuery = (e) => {
      this.setState({ query: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.query);
    };

    return (
      <form className="search-form" onSubmit={submit}>
        <input className="input" type="search" placeholder="Search query" onChange={setQuery} />
        <Button className="btn" type="submit">Search</Button>
      </form>
    );
  }
}

export default SearchForm;

