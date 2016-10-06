var Preview = function(data) {
  var
      imgArr = [],
      commentArr = [],
      self = this,
      _template;

  // Handlebars functions
  function _templateInit() {
    _template = Handlebars.compile( $('#preview-template').html() );
  }
  function _templateRender(urlArray) {
    $('.js-slider-preview').html(_template({urls: urlArray}));
  }


  function _mergeValues(images, comments) {
    var slideElemArr = [];
    images.forEach(function(item, i) {
      slideElemArr[i] = {img: item, comments: comments[i]};
    });
    return slideElemArr;
  };

  function _deleteContent() {
    imgArr.splice($(this).parent().index(), 1);
    self.render();
  };

  function _saveContent() {
    var $comment = $('.comment');
    $comment.each(function(i) {
      commentArr[i] = $comment.eq(i).val();
    });
    _sendArr();
  };

  function _sendArr() {
    Controller.receiveDataPreview(_mergeValues(imgArr, commentArr));
  }

  this.init = function(){
    imgArr = data;
    _templateInit();
    $('.js-slider-preview')
        .on("click", '.btnDel', _deleteContent)
        .on('click', '.btnSave', _saveContent);
  };

  this.render = function() {
    _templateRender(imgArr);
  };
};