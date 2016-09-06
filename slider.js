var Preview = function() {
    var this$ = this;
    this.arrayOfImgs = $('img');
    this.previewBlock = $('.slider-preview');
    this.buttonDel =  $('.slider-preview input[value="Удалить"]');
    this.buttonSave = $('.slider-preview input[value="Сохранить"]');

    this.buttonDel.click( function () {
        $(this).parent().remove();
    });

    this.buttonSave.click( function () {
        this$.previewBlock.css('display', 'none');
        this$.arrayOfImgs = $('img');
        this$.arrayOfComments = $('input[type="text"]');
        sendValues(this$.arrayOfImgs, this$.arrayOfComments);
    })
};

function sendValues(arrSlides, arrCom) {
    slider = new Slider(arrSlides, arrCom);
}

var Slider = function(slides, comments) {
    var this$ = this;
    this.interval = 100;
    this.frame = 0;
    this.init = function() {
        var sourceImg   = $("#entry-template2").html(),
            templateImg = Handlebars.compile(sourceImg),
            contextImg = {imgs: this$.slides,
                comment: this$.comments};
        html = templateImg(contextImg);
        $('body').append(html);
        this$.$sliderLi =  $('.slider li');
        this$.$sliderImg =  $('.slider img');
        this$.slideCount = this$.$sliderLi.length;
        this$.slideWidth = this$.$sliderImg.width();
        this$.slideHeight = this$.$sliderImg.height();
        this$.sliderUlWidth = this$.slideCount * this$.slideWidth;
        $('.holder').css({ width: this$.slideWidth, height: this$.slideHeight });
        $('.slider ul').css({ width: this.sliderUlWidth, marginLeft: - this$.slideWidth });
        $('.slider ul li:last-child').prependTo('.slider ul');
    };
    this.extractValues = function(slides, comments) {
        this.slides = [];
        for (var a = 0; a < slides.length; a++) {
            this.slides[a] = slides[a].src
        }
        this.comments = [];
        for (var b = 0; b < comments.length; b++) {
            this.comments[b] = comments[b].value
        }
    };

    this.extractValues(slides, comments);
    this.init();

    function moveRight() {
        $('.slider ul').animate({
            left: - this$.slideWidth
        }, 700, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    }
    function moveLeft() {
        $('.slider ul').animate({
            left: + this$.slideWidth
        }, 800, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    }
    this.stopSlider = function() {
        window.clearInterval(this$.interval);
    };
    setInterval(function () {
            if (frame = 1) {
                moveRight();
            }
            else {
                moveLeft();
            }
    }, this.interval);

    $('.holder').mouseenter(this.stopSlider());
};

//Получение и обработка массива урлов
function arrayInit() {
    var inputVal,
        tempVal;

    inputVal = $("#arrayURL").val();
    tempVal = inputVal.replace('\u005B', "");                                 // удаление [
    tempVal = tempVal.replace('\u005D', "");                                  // удаление ]
    for (var x = 0; x < tempVal.length; x++) {
        tempVal = tempVal.replace('\u0022', "");                              // удаление "
    }
    var urlArray = tempVal.split(',');
    return urlArray;
}

//Построение по шаблону превьюх
function buildingPreview(urlArray) {
    var source   = $("#entry-template").html(),
        template = Handlebars.compile(source),
        context = {urls: urlArray},
        html = template(context);

    $('body').append(html);
    $('.input-form').remove();
}

//Основная исполняемая функция
function main() {
    $('.input-form input[name="button"]').click( function() {
        var urlArray = arrayInit();
        buildingPreview(urlArray);
        preview = new Preview();
    });
}

$(document).ready(function ()
{
    var preview,
        slider;
    main()
});


/*
 [
 "https://c2.staticflickr.com/4/3117/3175014052_7484da1205_z.jpg",
 "https://c2.staticflickr.com/4/3262/3175014554_db597bbb73_z.jpg",
 "https://c2.staticflickr.com/4/3670/8813562512_229f5cf24a_z.jpg",
 "https://c1.staticflickr.com/9/8440/7787237516_b46aa5fabb_c.jpg",
 "https://c2.staticflickr.com/4/3404/3449526371_0454515b13_z.jpg",
 "https://c2.staticflickr.com/4/3602/3450323658_ab5961a0aa_z.jpg",
 "https://c1.staticflickr.com/3/2491/3751647375_4695b378de_z.jpg",
 "https://c1.staticflickr.com/3/2443/3752426198_ebe03fa615_z.jpg",
 "https://c2.staticflickr.com/2/1032/3175022066_57fce505be_z.jpg",
 "https://c1.staticflickr.com/3/2528/3751624573_08815f8950_z.jpg"
 ]
 */