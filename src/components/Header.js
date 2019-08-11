import React, { Component } from "react";
import tmdblogo from "../tmdb.svg";
import { Movie } from "styled-icons/boxicons-solid";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          color: "#eeeeee"
        }}
      >
        <header
          className="App-header"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto"
          }}
        >
          <h1
            style={{
              textAlign: "left",
              display: "inline-block",
              margin: "0.5rem 1rem",
              color: "#dddddd",
              userSelect: "none"
            }}
            id="title"
          >
            <span>
              <Movie
                style={{
                  height: "2rem",
                  verticalAlign: "sub"
                }}
              />
            </span>
            Flickk
          </h1>
          <span
            style={{
              textAlign: "right",
              verticalAlign: "super",
              margin: "0.5rem 1rem",
              fontWeight: "bold"
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "#cccccc"
              }}
              href="http://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src={tmdblogo}
                alt="www.themoviedb.org"
                style={{
                  height: "2rem",
                  verticalAlign: "middle"
                }}
              />
            </a>
          </span>
        </header>
      </nav>
    );
  }
}
