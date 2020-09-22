import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import { render } from "react-dom";

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
    // Check if array is empty otherwise return the random index
    if (!quotes.length) return;
    return randomIndex;
  };

  // Get the randomly chosen quote from array
  get selectedQuote() {
    // Return undefined if array is empty or index is not a number
    if (!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex))
      return;
    return this.state.quotes[this.state.quoteIndex];
  }

  handleNextQuoteClick = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div className="App" id="quote-box">
        {this.selectedQuote
          ? `${this.selectedQuote.quote} - ${this.selectedQuote.author} `
          : ""}
        <Button handleClick={this.handleNextQuoteClick} />
      </div>
    );
  }
}

export default App;
