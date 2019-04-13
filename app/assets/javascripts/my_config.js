$(document).on('turbolinks:load', function(){
  $('#user_name').on('click', function(){
    $('.my_config_box').toggle();
  })
});