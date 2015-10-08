$(document).ready(function(){

  $('.tweet-compose').on('click', function(){
    $('#tweet-submit').removeClass('hidden');
    $('#char-count').removeClass('hidden');
    $('.tweet-compose').css('height', '5em');
  });
  
  
  $('.tweet-compose').on('keyup', function(){
    var charlength = $(this).val().length - 1;
    var counter = 140 - charlength;
    
    $('#char-count').html(counter);
    
    if (counter < 11){
      $('#char-count').css('color', 'red');
    } 
    
    if (counter < 0) {
      $('button').prop('disable', true);
    }else {
      $('button').prop('disable', false);
    }
  });
  
  $('#tweet-submit').on('click', function(){
  
    var tweetMessage = $('#tweet-content').find('.tweet-compose').val();

    $('#stream').prepend(
      
      '<div class="tweet">'
		+ '<div class="content">'
		  + '<img class="avatar" src="img/alagoon.jpg"/>'
		  + '<strong class="fullname">My BFF</strong>'
		  + '<span class="username">@mybff</span>'
      
				+ '<p class="tweet-text">' + tweetMessage + '</p>'

                    + '<div class="tweet-actions">'
                        + '<ul>'
                            + '<li><span class="icon action-reply"></span> Reply</li>'
                            + '<li><span class="icon action-retweet"></span> Retweet</li>'
                            + '<li><span class="icon action-favorite"></span> Favorite</li>'
                            + '<li><span class="icon action-more"></span> More</li>'
                       + '</ul>'
                   + '</div>'

                   + '<div class="stats">'
                        + '<div class="retweets">'
                            + '<p class="num-retweets">30</p>'
                            + '<p>RETWEETS</p>'
                        + '</div>'
                        + '<div class="favorites">'
                            + '<p class="num-favorites">6</p>'
                            + '<p>FAVORITES</p>'
                        + '</div>'
                        + '<div class="users-interact">'
                            + '<div>'
                                + '<img src="img/alagoon.jpg" />'
                                + '<img src="img/vklimenko.jpg" />'
                            + '</div>'
                        + '</div>'

                        + '<div class="time">'
                            + '1:04 PM - 19 Sep 13'
                        + '</div>'
                    + '</div>'
                    + '<div class="reply">'
                       + '<img class="avatar" src="img/alagoon.jpg" />'
                        + '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'
                    + '</div>'
                + '</div>'
            + '</div>'

      )


  })



})