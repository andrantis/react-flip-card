import React, { Component } from "react";
import "./App.css";

import Card from "./Card";

class App extends Component {
  render() {
    const front = <div style={{ backgroundColor: "pink" }}>F</div>;
    const back = <div style={{ backgroundColor: "yellow" }}>B</div>;
    return (
      <div className="App">
        <Card width="120" height="480" front={front} back={back} />
      </div>
    );
  }
}

export default App;
