//Передача данных из превью в слайдер
function restructValues(slides, comments) {
    var arrayOfObject = [];
    slides.forEach(function(item, i, slides) {
        arrayOfObject[i] = {img: slides[i], com: comments[i]};
    });
    //console.log(arrayOfObject);
    //console.log(arrayOfObject[1].img);
    var slider = new Slider(slides, comments);
    return slider;
}
//Основная исполняемая функция
function main() {
    $('.input-form input[name="button"]').click( function() {
        var preview = new Preview();
        preview.init();
        preview.render();
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