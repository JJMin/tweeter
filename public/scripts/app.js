/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
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
  function loadTweets() {
    console.log('Button clicked, performing ajax call...');
    $.ajax({
      url: '/tweets',
      method: 'GET'
      })
        .done((tweets) => {
          renderTweets(tweets);
        })
        .fail((error) => {
          console.log("Error!");
        })
        .always(() => {
          console.log("Function complete.");
    });
  };

  $(".new_tweet form").submit(function (event) {
    event.preventDefault();
    $(this).serialize();
    loadTweets();
  });
});