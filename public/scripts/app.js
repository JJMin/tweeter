/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweetData) {
  return tweetElement =
    `<div class="tweet border rounded">
    <header class="rounded-top">
      <div class="d-flex justify-content-between">
        <div class="align-self-center">
          <img src="${escape(tweetData.user.avatars.small)}" class="img-fluid rounded-circle" alt="Tweeter logo"> 
          ${escape(tweetData.user.name)}
        </div>
        <div class="align-self-center">
          ${escape(tweetData.user.handle)}
        </div>
      </div>
    </header>

    <p id="tweet_text">${escape(tweetData.content.text)}</p>
    <hr>

    <footer>
      <div class="row justify-content-between">
        <div class="col-5">
          <p>${moment(tweetData.created_at).fromNow()}</p>
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
    $('.tweets').prepend(createTweetElement(tweet));
  });
}

$(document).ready(function () {
  function loadTweets() {
    $.ajax({
        url: '/tweets',
        method: 'GET'
      })
      .done((tweets) => {
        renderTweets(tweets);
        console.log("Rendering + loading tweets");
      })
      .fail((error) => {
        console.log("Error!");
      })
      .always(() => {
        console.log("loadTweets function complete.");
      });
  };

  function sendTweet(tweet) {
    $.ajax({
        url: '/tweets',
        method: 'POST',
        data: tweet
      })
      .done((newTweet) => {
        $('.tweets').prepend(createTweetElement(newTweet));
        console.log("Prepend new tweet.");
      })
      .fail((error) => {
        console.log("Error!");
      })
      .always(() => {
        console.log("sendTweet function complete.");
      });
  };

  function formValidation(input) {
    if ($(input).val().length === 0) {
      return "You cannot tweet an empty message!";
    } else if ($(input).val().length > 140) {
      return "You cannot tweet a message that has more than 140 character!";
    } else {
      return false;
    }
  }

  $("#compose").click(function (event) {
    event.preventDefault();
    $(".new_tweet_container").slideToggle(function () {
      if ($(this).is(':visible')) {
        $("#new_tweet").focus();
      }
    });
  });

  $("#new_tweet").keyup(function () {
    const tweetLength = $(this).val().length;
    const characterNumber = $('#character-count').text();
    const maxCharacter = 140;

    if (tweetLength > maxCharacter) {
      $('#character-count').css('color', 'red');
    } else {
      $('#character-count').css('color', 'black');
    }

    $('#character-count').text(maxCharacter - tweetLength);
  });

  $(".new_tweet_container form").submit(function (event) {
    const errorMessage = formValidation("#new_tweet");

    if (errorMessage) {
      $(".errorMessage").empty();
      $(".errorMessage").append(errorMessage);
    } else {
      $(".errorMessage").empty();
      sendTweet($(this).serialize());
    }

    event.preventDefault();
  });

  loadTweets();
});