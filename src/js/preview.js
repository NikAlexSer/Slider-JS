var Preview = function(data) {
  var
      _imgArr = [],
      _commentArr = [],
      _self = this,
      _template;


  // Инициализация при создании экземпляра класса
  _init();

  // Handlebars functions
  function _templateInit() {
    _template = Handlebars.compile( $('#preview-template').html() );
  }
  function _templateRender(urlArray) {
    $('.js-slider-preview').html(_template({urls: urlArray}));
  }


  function _mergeValues(images, comments) {
    var _slideElemArr = [];
    images.forEach(function(item, i) {
      _slideElemArr[i] = {img: item, comments: comments[i]};
    });
    return _slideElemArr;
  };

  function _deleteContent() {
    _imgArr.splice($(this).parent().index(), 1);
    _self.render();
  };

  function _saveContent() {
    var $comment = $('.comment');
    $comment.each(function(i) {
      _commentArr[i] = $comment.eq(i).val();
    });
    _sendArr();
  };

  function _sendArr() {
    Controller.receiveDataPreview(_mergeValues(_imgArr, _commentArr));
  }

  function _init(){
    _imgArr = data;
    _templateInit();
    $('.js-slider-preview')
        .on('click', '.btnDel', _deleteContent)
        .on('click', '.btnSave', _saveContent);
  };

  this.render = function() {
    _templateRender(_imgArr);
  };
};
