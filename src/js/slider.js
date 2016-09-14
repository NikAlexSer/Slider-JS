var Slider = function(slides, comments) {
    var $this = this;
    this.templateArr =  [];
    this.init = function() {
        for (var c = 0; c < slides.length; c++) {
         $this.templateArr[c] = {img: slides[c], comment: comments[c]};
         }
        var sourceImg   = $("#slider-template").html(),
            templateImg = Handlebars.compile(sourceImg),
            contextImg = {slidesTemp: $this.templateArr };
        html = templateImg(contextImg);
        $('body').append(html);
        console.log(slides);
    };
    this.init();
};