import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  state = {
    flipped: false
  };

  handleClick = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    const width = `${this.props.width}px`;
    const height = `${this.props.height}px`;

    const classes = `card-container ${this.state.flipped ? "flipped" : ""}`;

    return (
      <div
        className={classes}
        style={{ width: width, height: height }}
        onClick={this.handleClick}
      >
        <div className="card">
          <div className="front" style={{ width: width, height: height }}>
            {this.props.front}
          </div>
          <div className="back" style={{ width: width, height: height }}>
            {this.props.back}
          </div>
        </div>
      </div>
    );
  }
}
