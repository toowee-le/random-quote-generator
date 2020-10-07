import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

export default function TweetQuote(props) {
  return (
    <React.Fragment>
      <div className="btn-container">
        <div id="new-quote">
          <Button handleClick={props.handleNextQuoteClick} />
        </div>
        <a
          href="https://twitter.com/intent/tweet?screen_name=toowee_&ref_src=twsrc%5Etfw"
          class="twitter-mention-button"
          id="tweet-quote"
          data-show-count="false"
        >
          <FontAwesomeIcon icon={faTwitter} size={"xs"} style={iconStyle} />
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </React.Fragment>
  );
}

const iconStyle = {
  color: "#1ea2f1",
  fontSize: "2.5rem",
  paddingRight: 12,
};
