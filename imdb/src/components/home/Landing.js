import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
      
      {/* it will load the spinner depending on if it has some data or not */}
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

{/* i wil take the state of the movies in loading  */}
const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
