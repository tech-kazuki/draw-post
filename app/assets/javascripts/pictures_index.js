$(document).on('turbolinks:load', function(){
  $('.content_over_link').on('mouseover', function(){
    $(this).css('box-shadow', '0 0 8px gray');
  }).on('mouseout', function(){
    $(this).css('box-shadow', 'none');
  });
});