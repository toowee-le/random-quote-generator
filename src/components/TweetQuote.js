import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function TweetQuote(props) {
  return (
    <React.Fragment>
      <a
        href="https://twitter.com/intent/tweet?screen_name=toowee_&ref_src=twsrc%5Etfw"
        class="twitter-mention-button"
        id="tweet-quote"
        data-show-count="false"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </React.Fragment>
  );
}
