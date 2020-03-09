import React, { Component } from 'react';

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
        <input type="search" placeholder="Search query" onChange={setQuery} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;

