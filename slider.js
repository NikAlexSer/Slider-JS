var Preview = function() {
    var this$ = this;
    this.init = function(urlArray) {
        var source = $("#entry-template").html(),
            template = Handlebars.compile(source),
            context = {urls: urlArray},
            html = template(context);
        $('body').append(html);
        $('.input-form').remove();
        this$.arrayOfImgs = $('img');
        this$.previewBlock = $('.slider-preview');
        this$.buttonDel =  $('.slider-preview input[value="Удалить"]');
        this$.buttonSave = $('.slider-preview input[value="Сохранить"]');
    };
    this.init(urlArray);
    this.buttonDel.click( function () {
        $(this).parent().remove();
    });
    this.buttonSave.click( function () {
        this$.previewBlock.css('display', 'none');
        this$.arrayOfImgs = $('img');
        this$.arrayOfComments = $('input[type="text"]');
        sendValues(this$.arrayOfImgs, this$.arrayOfComments);
    });
};

var Slider = function(slides, comments) {
    var this$ = this;
    this.templateArr =  [];
    //Движения влево, вправо
    var moveRight = function () {
        this$.sliderUl.animate({
            left: - this$.slideWidth
        }, this$.animateTime, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            this$.sliderUl.css('left', '');
        });
    };
    var moveLeft = function () {
        this$.sliderUl.animate({
            left: + this$.slideWidth
        }, this$.animateTime, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            this$.sliderUl.css('left', '');
        });
    };
    //Функция включения слайдера
    this.nextSlide = function() {
        this$.interval = window.setInterval(function() {
            if (this$.frame == 1) {
                moveRight();
            }
            else {
                moveLeft();
            }
        }, this$.slideInterval);
    };
    //функция остановки
    this.stopSlider = function() {
        window.clearInterval(this$.interval);
    };
    this.init = function() {
        var sourceImg   = $("#entry-template2").html(),
            templateImg = Handlebars.compile(sourceImg),
            contextImg = {slidesTemp: this$.templateArr };
        html = templateImg(contextImg);
        $('body').append(html);
        this$.$sliderLi =  $('.slider li');
        this$.$sliderImg =  $('.slider img');
        this$.sliderUl = $('.slider ul');
        this$.prev = $('.control_prev');
        this$.next = $('.control_next');
        this$.holder = $('.holder');
        this$.slideCount = this$.$sliderLi.length;
        this$.slideWidth = this$.$sliderImg.width();
        this$.slideHeight = this$.$sliderImg.height();
        this$.sliderUlWidth = this$.slideCount * this$.slideWidth;
        this$.interval = 0;
        this$.slideInterval = 5000;
        this$.animateTime = 700;
        this$.frame = 1;
        this$.holder.css({ width: this$.slideWidth, height: this$.slideHeight });
        this$.sliderUl.css({ width: this.sliderUlWidth, marginLeft: - this$.slideWidth });
        $('.slider ul li:last-child').prependTo('.slider ul');
        this$.nextSlide();
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
        for (var c = 0; c < this.slides.length; c++) {
            this$.templateArr[c] = {img: this.slides[c], comment: this.comments[c]}
        }
    };
    this.extractValues(slides, comments);
    this.init();
    this.holder.mouseenter( function() {
        this$.stopSlider()
    });
    this.holder.mouseleave( function() {
        this$.nextSlide()
    });
    this.prev.click(function () {
        this$.animateTime = 100;
        moveLeft();
        this$.animateTime = 700;
    });
    this.next.click(function () {
        this$.animateTime = 100;
        moveRight();
        this$.animateTime = 700;
    });
};

//Передача данных из превью в слайдер
function sendValues(arrSlides, arrCom) {
    slider = new Slider(arrSlides, arrCom);
}
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
    urlArray = tempVal.split(',');
    return urlArray;
}
//Основная исполняемая функция
function main() {
    $('.input-form input[name="button"]').click( function() {
        var urlArray = arrayInit();
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