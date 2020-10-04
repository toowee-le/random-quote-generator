import React from "react";
import Button from "./Button";

export default function QuoteGenerator(props) {
  return (
    <React.Fragment>
      <div className="quote" id="text">
        {props.selectedQuote ? `"${props.selectedQuote.quote}"` : ""}
      </div>
      <div className="author" id="author">
        {props.selectedQuote ? props.selectedQuote.author : ""}
      </div>
      <div id="new-quote">
        <Button handleClick={props.handleNextQuoteClick} />
      </div>
    </React.Fragment>
  );
}
