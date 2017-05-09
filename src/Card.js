import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const width = `${this.props.width}px`;
    const height = `${this.props.height}px`;

    return (
      <div className="card-container">
        <div className="card" style={{width: width, height: height}}>
          <div className="front" style={{width: width, height: height}}>
            {this.props.front}
          </div>
          <div className="back" style={{width: width, height: height}}>
            {this.props.back}
          </div>
        </div>
      </div>
    );
  }
}
