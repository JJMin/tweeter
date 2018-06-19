/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [{
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweetData) {
  return tweetElement =
  `<div class="tweet border rounded">
    <header class="rounded-top">
      <div class="d-flex justify-content-between">
        <div class="align-self-center">
          <img src="${tweetData.user.avatars.small}" class="img-fluid" alt="Tweeter logo"> 
          ${tweetData.user.name}
        </div>
        <div class="align-self-center">
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
}

function renderTweets(tweets) {
  tweets.forEach(tweet => {
    $('.tweets').append(createTweetElement(tweet));
  });
}

$(document).ready(function () {
  renderTweets(data);
});