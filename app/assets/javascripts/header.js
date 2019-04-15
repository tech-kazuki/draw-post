$(document).on('turbolinks:load', function(){
  $('#user_name').on('click', function(){
    $('.my_config_box').toggle();
  });
  
  $('.my_config_link').on('mouseover', function() {
    $(this).css('background-color', '#d4d9df');
  }).on('mouseout', function() {
    $(this).css('background-color', '#fff');
  });

  
});