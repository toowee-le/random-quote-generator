import React from "react";

export default function QuoteGenerator(props) {
  return (
    <React.Fragment>
      <div className="quote" id="text">
        <p style={quoteStyle}>
          {props.selectedQuote ? `"${props.selectedQuote.quote}"` : ""}
        </p>
      </div>
      <div style={authorStyle} className="author" id="author">
        — {props.selectedQuote ? props.selectedQuote.author : ""}
      </div>
    </React.Fragment>
  );
}

const quoteStyle = {
  backgroundColor: "#0f7173",
  color: "#FFF",
  fontSize: "2.5rem",
  lineHeight: "3.2rem",
  display: "inline",
};

const authorStyle = {
  color: "#0f7173",
  fontStyle: "italic",
  fontSize: "2rem",
  letterSpacing: "2px",
  marginTop: ".2em",
  float: "right",
};
