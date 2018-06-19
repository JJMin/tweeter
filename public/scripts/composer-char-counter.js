$(document).ready(function () {
  $("#new_tweet").keyup(function () {
    let tweetLength = $(this).val().length;
    let characterNumber = $('#character-count').text();

    if (tweetLength > 140) {
      $('#character-count').css('color', 'red');
    } else {
      $('#character-count').css('color', 'black');
    }

    $('#character-count').text(140 - tweetLength);
  });
});