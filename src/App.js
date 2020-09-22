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

  /**
   * @description Fetch quotes from API
   */
  componentDidMount() {
    const apiURL =
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    fetch(apiURL)
      .then((response) => response.json())
      .then((quotes) =>
        this.setState({ quotes }, () =>
          this.setState({ quoteIndex: this.generateRandomQuoteIndex })
        )
      );
  }

  /**
   * @description Returns a random integer between 0 and the length of the array to represent an index in this.state.quotes.
   * If array is empty, return undefined.
   */
  generateRandomQuoteIndex = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (!quotes.length) return;
    return randomIndex;
  };

  /**
   * @description Retrieve the selected quote from array (this.state.quotes).
   * If array is empty or index is not a number, return undefined.
   */
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex))
      return undefined;
    return this.state.quotes[this.state.quoteIndex];
  }

  handleNextQuoteClick = () => {
    this.setState({ quoteIndex: this.generateRandomQuoteIndex() });
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
