import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

export class HomePage extends Component {
  fetchMoreMovies() {
    this.props.fetchMovies();
  }

  // increment = () => {
  //   // We can call the `increment` prop,
  //   // and it will dispatch the action:
  //   this.props.increment();
  //   }
  //   decrement = () => {
  //   this.props.decrement();
  //   }

  render() {
    return (
      <div>
        <p>All Movies</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

// const mapDispatchToProps = () => {
//   return {
//     movies: state.movies
//   };
// };

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
