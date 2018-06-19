/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const tweetElement = 
  `<div class="tweet border rounded">
    <header class="rounded-top">
      <div class="row justify-content-between">
        <div class="col-5">
          <img src="${tweetData.user.avatars.small}" class="img-fluid" alt="Tweeter logo"> 
          ${tweetData.user.name}
        </div>
        <div class="col-3">
          ${tweetData.user.handle}
        </div>
      </div>
    </header>

    <p id="tweet_text">${tweetData.content.text}</p>
    <hr>

    <footer>
      <div class="row justify-content-between">
        <div class="col-3">
          <p>10 days ago</p>
        </div>
        <div class="col-3 icons">
          <i class="fal fa-flag"></i>
          <i class="far fa-retweet-alt"></i>
          <i class="fal fa-heart"></i>
        </div>
      </div>
    </footer>
  </div>`;

function createTweetElement(tweetData) {
  $('.tweets').append(tweetElement);
}

$(document).ready(function () {
  createTweetElement(tweetData) 
});