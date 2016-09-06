
var urlArray,
 preview,
 slider,
 slidesTemp,
 commentTemp,
 imgUrls = [],
 commentsValue = [];

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
 slidesTemp = this$.arrayOfImgs;
 commentTemp = this$.arrayOfComments;
 createSlider(slidesTemp, commentTemp);
 })
 };

 var Slider = function(slides, comments) {
 this.slides = slides;
 this.comments = comments;
 this.frame = 0;
 var this$ = this;
 this.init = function () {
 var sourceImg   = $("#entry-template2").html(),
 templateImg = Handlebars.compile(sourceImg),
 contextImg = {imgs: this$.slides,
 comment: this$.comments};
 html = templateImg(contextImg);
 $('body').append(html);
 }
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
 urlArray = tempVal.split(',');
 }

 //Построение по шаблону превьюх
 function buildingPreview() {
 var source   = $("#entry-template").html(),
 template = Handlebars.compile(source),
 context = {urls: urlArray},
 html = template(context);

 $('body').append(html);
 $('.input-form').remove();
 }

 function createSlider(slides, comments) {
 for (var a = 0; a < slides.length; a++) {
 imgUrls[a] = slides[a].src
 }
 for (var b = 0; b < comments.length; b++) {
 commentsValue[b] = comments[b].value
 }
 slider = new Slider(imgUrls, commentsValue);
 slider.init();

 }

 //Основная исполняемая функция
 function main() {
 $('.input-form input[name="button"]').click( function() {
 arrayInit();
 buildingPreview();

 preview = new Preview();
 });
 }

 $(document).ready(function ()
 {
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