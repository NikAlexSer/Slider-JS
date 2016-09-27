var Preview = function() {
  var urlArray = [],
    arrayOfImages = [],
    arrayOfComments = [],
    arraySlides = [],
    $this = this,
    $previewBlock,
    $buttonDel,
    $buttonSave,
    source,
    template,
    context,
    htmlPreview;
    
  function _templateInit() {
    source = $("#preview-template").html();
    template = Handlebars.compile(source);
  };
  function _templateInsertData(urlArray) {
    context = {urls: urlArray};
    htmlPreview = template(context);
  };
  function _templateBuild() {
    $('body').append(htmlPreview);
  };
  
  function _formationArray() {
    var urlArray = $('#arrayURL').val().split(',');
    urlArray.forEach(function (item, i, urlArray) {
      urlArray[i] = urlArray[i].replace(/["\n \u005B\u005D]/g, '');
    });
    //console.log(urlArray);
    return urlArray;
  };
  function _extractValues(slides, comments) {
    slides.forEach(function(item, i, slides) {
      arraySlides[i] = {img: slides[i], com: comments[i]};
    });
  };
  function _deleteContent() {
        /*
         $(this) потому что parent() применяется к объекту Jquery,
         а $(this) дает такой объект в контексте нажимаемой кнопки
         */
    arrayOfImages.splice($(this).parent().index(), 1);
    $this.render();
  };
  function _saveContent() {
    $('.comment').each(function(i) {
            arrayOfComments[i] = $('.comment')[i].value;
        });
    $previewBlock.hide();
    _extractValues(arrayOfImages, arrayOfComments);
    sendValues(arraySlides);
  };
  function _preparePreview() {
    $previewBlock = $('.js-slider-preview');
    $buttonDel =  $('.js-slider-preview input[value="Удалить"]');
    $buttonSave = $('.js-slider-preview input[value="Сохранить"]');
    $buttonDel.on("click", _deleteContent);
    $buttonSave.on("click", _saveContent);
  };
  this.init = function(){
    arrayOfImages = urlArray = _formationArray();
    $('.input-form').hide();
    _templateInit();
  };
  this.render = function() {
    $('.js-slider-preview').remove(); //удаление старых/пустых превьюх перед рендером
    _templateInsertData(arrayOfImages);
    _templateBuild();
    _preparePreview();
  };
};