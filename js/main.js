$(document).ready(function() {
  initParticleNet();
  initProjectListeners();
  initFooterListeners();

  //hidePopups();
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

function initFooterListeners()
{
  $(document).on('mouseenter', '.hov_contact', function() {
    $(this).parent().find('.contact_popup').show();
  });

  $(document).on('mouseenter', '.hov_libs', function() {
    $(this).parent().find('.libs_popup').show();
  });

  $(document).on('mouseleave', '.hov_contact, .hov_libs', function() {
    $(this).parent().find('.contact_popup, .libs_popup').hide();
  });
}

function hidePopups()
{
  $(".contact_popup, .libs_popup").hide();
}

function initParticleNet()
{
  // Initialisation
  var canvasDiv = document.getElementById('particle-canvas');
  var options = {
    //particleColor: '#11ce00',
    particleColor: '#ff0000',
    //background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
    interactive: false,
    speed: 'low',
    density: 'high'
  };
  var particleCanvas = new ParticleNetwork(canvasDiv, options);
}
