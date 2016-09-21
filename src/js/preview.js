var Preview = function() {
    var buildPreview = (function() {
        var source,
            template,
            context,
            htmlPreview;
        return {
            pv_templateInit: function() {
                source = $("#preview-template").html();
                template = Handlebars.compile(source);
            },
            pv_templateInsertData: function(urlArray) {
                context = {urls: urlArray};
                htmlPreview = template(context);
            },
            pv_templateBuild: function() {
                $('body').append(htmlPreview);
            }
        };
    }()), //модуль
        urlArray = [],
        arrayOfImages = [],
        arrayOfComments = [],
        arraySlides = [],
        $this = this,
        $previewBlock,
        $buttonDel,
        $buttonSave;
    function _arrayInit() {
            /*
             Добавил еще два реплейса для полной чистоты урлов.
             Регулярное выражение для исключения прерывания
             при первом нахождении символа в элементе
             */
            var urlArray = $('#arrayURL').val().split(',');
            urlArray.forEach(function (item, i, urlArray) {
                urlArray[i] = urlArray[i].replace(/"/g, '');
                urlArray[i] = urlArray[i].replace(/\n/g, '');
                urlArray[i] = urlArray[i].replace(/ /g, '');
                urlArray[i] = urlArray[i].replace('\u005B', '');
                urlArray[i] = urlArray[i].replace('\u005D', '');
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
        arrayOfImages = urlArray = _arrayInit();
        $('.input-form').hide();
        buildPreview.pv_templateInit();
    };
    this.render = function() {
        $('.js-slider-preview').remove(); //удаление старых/пустых превьюх перед рендером
        buildPreview.pv_templateInsertData(arrayOfImages);
        buildPreview.pv_templateBuild();
        _preparePreview();
    };
};