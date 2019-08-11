import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

const mapStateToProps = state => {
  return {
    // movies: state.fetchMovies.movies
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   onFetchMovies: () => dispatch(fetchMovies())
  // };

  // return () => dispatch(fetchMovies);

  return {
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export class HomePage extends Component {
  fetchMoreMovies() {
    // this.props.onFetchMovies();
    this.props.fetchMovies();
  }

  componentDidMount() {
    // this.props.dispatch(fetchMovies());
    // this.props.fetchMovies();
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>All Movies</p>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   fetchMovies
// };

// const mapDispatchToProps = dispatch => ({
//   fetchMovies: () => dispatch(fetchMovies())
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
