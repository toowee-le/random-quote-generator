import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      quotes: [],
      quoteIndex: null,
    };
  }

  // Fetch quotes from an API
  componentDidMount() {
    const apiURL =
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    fetch(apiURL)
      .then((response) => response.json())
      .then((quotes) =>
        this.setState({ quotes }, () =>
          this.setState({ quoteIndex: this.getQuoteIndex() })
        )
      );
  }

  getQuoteIndex = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (!quotes.length) return;
    return randomIndex;
  };

  handleNextQuoteClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <Button handleClick={this.handleNextQuoteClick} />
      </div>
    );
  }
}

export default App;
