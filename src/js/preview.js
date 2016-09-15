var Preview = function() {
    var arrayInit = function() {
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
    },
        buildPreview = (function () {
        var source,
            template,
            context,
            htmlPreview;
        return {
            _previewTemplateInit: function () {
                source = $("#preview-template").html();
                template = Handlebars.compile(source);
            },
            _previewTemplateInsertData: function (urlArray) {
                context = {urls: urlArray};
                htmlPreview = template(context);
                console.log(context);
            },
            _previewTemplateBuild: function () {
                $('body').append(htmlPreview);
            }
        };
    }()), //модуль
        urlArray = [],
        arrayOfImages = [],
        arrayOfComments = [],
        $this= this,
        $previewBlock,
        $buttonDel,
        $buttonSave;
    function deleteContent() {
        /*
         $(this) потому что parent() применяется к объекту Jquery,
         а $(this) дает такой объект в контексте нажимаемой кнопки
         */
       // $(this).parent().hide();
        $(this).parent().parent().html('');
        arrayOfImages.splice($(this).parent().index(), 1);
        //buildPreview._previewTemplateInsertData(arrayOfImages);
        //buildPreview.previewTemplateReBuild();
        $this.render();
        console.log(arrayOfImages);
    }
    function saveContent() {
        $('.comment').each(function (i) {
            arrayOfComments[i] = $('.comment')[i].value;
        });
        $previewBlock.hide();
        restructValues(arrayOfImages, arrayOfComments);
    }
    this.init = function(){
        arrayOfImages = urlArray = arrayInit();
        console.log(urlArray);
        $('.input-form').hide();
        buildPreview._previewTemplateInit();
    };
    this.render = function() {
        buildPreview._previewTemplateInsertData(arrayOfImages);
        buildPreview._previewTemplateBuild();
        $previewBlock = $('.js-slider-preview');
        $buttonDel =  $('.js-slider-preview input[value="Удалить"]');
        $buttonSave = $('.js-slider-preview input[value="Сохранить"]');
        $buttonDel.on("click", deleteContent);
        $buttonSave.on("click", saveContent);
    };
};