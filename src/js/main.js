//Передача данных из превью в слайдер
function sendValues(slides, comments) {
    extractValues(slides, comments);
    var slider = new Slider(slides, comments);
    return slider;
}
function extractValues(slides, comments){
    slides.forEach(function (i, slides) {
        if ( slides[i] !== '' ) {}
        else {
            slides[i].splice(i, 1);
        }
    });
    comments.forEach(function (j, comments) {
        comments[j] = comments[j].value;
    });
}
//Получение и обработка массива урлов
function arrayInit() {
    urlArray = $('#arrayURL').val().split(',');
    urlArray.forEach(function (item, i, urlArray) {
        urlArray[i] = urlArray[i].replace( /"/g, '');
        urlArray[i] = urlArray[i].replace('\u005B', '');
        urlArray[i] = urlArray[i].replace('\u005D', '');
    });
    return urlArray;
    /*
    urlArray = urlArray.replace( /"/g, '');
    urlArray = urlArray.replace('\u005B', '');
    urlArray = urlArray.replace('\u005D', '');
    return urlArray.split(',');*/
}
//Основная исполняемая функция
function main() {
    $('.input-form input[name="button"]').click( function() {
        urlArray = arrayInit();
        var preview = new Preview();
        return preview;
    });
}
//Вызоп основной функции после загрузки страницы
$(document).ready(function ()
{
    main();
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