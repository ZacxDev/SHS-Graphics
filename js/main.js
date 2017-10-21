$(document).ready(function() {
  initProjectListeners();
});

$(window).load(function() {
  // blur all images and hide them
  boxBlurImage( "project_img", "canvas", 10, false, 5 );
});

function initProjectListeners()
{
  $(document).on('mouseenter', '.project_grid_item', function() {

    var canvas = $(this).find('#canvas');
    canvas.css('width', $(this).width() - 3);
    canvas.css('height', $(this).height() - 10);
    canvas.css('display', 'block');
    $(this).find('.desc_wrapper').css('display', 'block');
  });

  $(document).on('mouseleave', '.project_grid_item', function() {
    $(this).find('.desc_wrapper').css('display', 'none');
    $(this).find('#canvas').css('display', 'none');
  });
}
