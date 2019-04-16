$(document).on('turbolinks:load', function(){
  $('#user_name').on('click', function(){
    $('.my_config_box').toggle();
  });

  $('#user_name').on('mouseover', function() {
    $(this).css('opacity', '0.7');
  }).on('mouseout', function() {
    $(this).css('opacity', '1.0');
  });
  
  $('.my_config_link').on('mouseover', function() {
    $(this).css('background-color', '#d4d9df');
  }).on('mouseout', function() {
    $(this).css('background-color', '#fff');
  });
});