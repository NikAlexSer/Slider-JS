var Slider = function(data) {
  var
      _template;

  // Handlebars functions
  function _templateInit() {
      _template = Handlebars.compile( $('#slider-template').html() );
  };
  function _templateRender(arraySlides) {
    $('.js-slider').html(_template({slidesTemp: arraySlides}));
  };




  this.init = function() {
    _templateInit();
  };

  this.render = function() {
    _templateRender(data);
  };
};