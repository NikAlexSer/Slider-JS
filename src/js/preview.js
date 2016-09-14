var Preview = function() {
    var source,
        template,
        context,
        htmlPreview,
        previewTemplateInit = function () {
            source = $("#preview-template").html();
            template = Handlebars.compile(source);
        },
        previewTemplateInsertData = function (urlArray) {
            context = {urls: urlArray};
            htmlPreview = template(context);
        };
    this.init = function(urlArray) {
        previewTemplateInit();
        previewTemplateInsertData(urlArray);
        $('body').append(htmlPreview);
        $('.input-form').hide();
    };
    this.init(urlArray);
    var arrayOfImgs = urlArray,
        $arrayOfComments = $('input[type="text"]'),
        $previewBlock = $('.slider-preview'),
        $buttonDel =  $('.slider-preview input[value="Удалить"]'),
        $buttonSave = $('.slider-preview input[value="Сохранить"]');
    $buttonDel.click( function () {
        $(this).parent().hide();
        arrayOfImgs.splice($(this).parent().index(), 1, '');
        console.log(arrayOfImgs);
        $arrayOfComments.splice(($(this).parent().index()), 1, '');
    });
    $buttonSave.click( function () {
        $previewBlock.hide();
        sendValues(arrayOfImgs, $arrayOfComments);
    });
};