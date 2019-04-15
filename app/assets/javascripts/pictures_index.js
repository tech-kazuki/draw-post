$(document).on('turbolinks:load', function(){
  $('.content_over_link').on('mouseover', function(){
    $(this).css('opacity', '0.7');
  }).on('mouseout', function(){
    $(this).css('opacity', '1');
  });
});