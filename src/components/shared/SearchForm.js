import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import Input from './Input';
import Button from './Button';

class SearchForm extends Component {
  state = {
    query: ''
  };

  render() {
    const { disabled, onSubmit } = this.props;

    const setQuery = (e) => {
      this.setState({ query: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      onSubmit(this.state.query);
    };

    return (
      <form className="search-form" onSubmit={submit}>
        <Input type="search" placeholder="Search query" disabled={disabled} onChange={setQuery} />
        <Button type="submit" disabled={disabled}>
          <SearchIcon/> Search
        </Button>
      </form>
    );
  }
}

export default SearchForm;

