import React, { Component } from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import TweetQuote from "./components/TweetQuote";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
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
      .then((quotesData) =>
        this.setState({ quotes: quotesData }, () =>
          this.setState({ quoteIndex: this.generateRandomQuoteIndex() })
        )
      );
  }

  /**
   * @description Retrieve the selected quote from array.
   * If array is empty or index is not a number, return undefined.
   */

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.quoteIndex)) {
      return undefined;
    } else {
      return this.state.quotes[this.state.quoteIndex];
    }
  }

  /**
   * @description Returns a random integer between 0 and the length of the array to represent an index in the array of quotes.
   * If array is empty, return undefined.
   */
  generateRandomQuoteIndex = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length - 1);
    if (!quotes.length) return undefined;
    else {
      return randomIndex;
    }
  };

  handleNextQuoteClick = () => {
    this.setState({ quoteIndex: this.generateRandomQuoteIndex() });
  };

  render() {
    return (
      <div className="container">
        <div className="App" id="quote-box">
          <QuoteGenerator selectedQuote={this.selectedQuote} />
          <TweetQuote handleNextQuoteClick={this.handleNextQuoteClick} />
        </div>
      </div>
    );
  }
}

export default App;
