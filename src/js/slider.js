var Slider = function(data) {
  var
      $wrapper,
      _template,
      _interval,
      _index = 0;

  // Handlebars functions
  function _templateInit() {
      _template = Handlebars.compile( $('#slider-template').html() );
  };
  function _templateRender(arraySlides) {
    $('.js-slider').html(_template({slidesTemp: arraySlides}));
  };

  function _prepare() {
    $wrapper.css({width: $wrapper.children('li:first-child').width() * ($wrapper.children('li').length + 2)});
  };

  function _setInterval() {
    var duration = 1000;
    _interval = setInterval(function() {
      _slide()
    }, duration)
  };

  function _slide() {
    console.log('start', _index)
    $('.clone').remove();
    $('li').eq(0).clone().addClass('clone').appendTo($wrapper);
   $wrapper.css("transform", "translateX(-" + _index * 500 + "px) ").addClass('animated');
    _index++;
    console.log('end', _index)
    if (_index === $('.js-content-holder li').length + 1) {
     $wrapper.css("transform", "translateX(-" + 0 + "px) ").removeClass('animated');
      _index = 1;
      console.log('AHTUNG');
    }
  };

  this.init = function() {
    _templateInit();
  };

  this.render = function() {
    $wrapper = $('.js-content-holder');
    _templateRender(data);
    _prepare();
    _setInterval();
  };
};