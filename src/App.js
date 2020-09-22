import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  handleNextQuoteClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button handleClick={this.handleNextQuoteClick} />
      </div>
    );
  }
}

export default App;
