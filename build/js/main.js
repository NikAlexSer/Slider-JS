var Controller=function(){function t(){$(".input-form").on("click",".js-data",function(){i=n(),e(),$(".input-form").hide()})}function n(){var t=$("#arrayURL").val().split(",");return t.forEach(function(n,e){t[e]=n.replace(/["\n \u005B\u005D]/g,"")}),t}function e(){o=new Preview(i),o.render()}function c(t){$(".js-slider-preview").hide(),r=new Slider(t,l),r.render()}var i=[],o={},r={},l={urlArray:["https://c2.staticflickr.com/4/3117/3175014052_7484da1205_z.jpg","https://c2.staticflickr.com/4/3262/3175014554_db597bbb73_z.jpg","https://c2.staticflickr.com/4/3670/8813562512_229f5cf24a_z.jpg","https://c1.staticflickr.com/9/8440/7787237516_b46aa5fabb_c.jpg","https://c2.staticflickr.com/4/3404/3449526371_0454515b13_z.jpg","https://c2.staticflickr.com/4/3602/3450323658_ab5961a0aa_z.jpg","https://c1.staticflickr.com/3/2491/3751647375_4695b378de_z.jpg","https://c1.staticflickr.com/3/2443/3752426198_ebe03fa615_z.jpg","https://c2.staticflickr.com/2/1032/3175022066_57fce505be_z.jpg","https://c1.staticflickr.com/3/2528/3751624573_08815f8950_z.jpg"],duration:1e3};return{init:function(){$("#arrayURL").val(l.urlArray),t()},receiveDataPreview:function(t){c(t)}}}();$(function(){Controller.init()});var Preview=function(t){function n(){a=Handlebars.compile($("#preview-template").html())}function e(t){$(".js-slider-preview").html(a({urls:t}))}function c(t,n){var e=[];return t.forEach(function(t,c){e[c]={img:t,comments:n[c]}}),e}function i(){s.splice($(this).parent().index(),1),u.render()}function o(){var t=$(".comment");t.each(function(n){f[n]=t.eq(n).val()}),r()}function r(){Controller.receiveDataPreview(c(s,f))}function l(){s=t,n(),$(".js-slider-preview").on("click",".btnDel",i).on("click",".btnSave",o)}var a,s=[],f=[],u=this;l(),this.render=function(){e(s)}},Slider;Slider=function(t,n){function e(){f=Handlebars.compile($("#slider-template").html())}function c(t){$(".js-slider").html(f({slidesTemp:t}))}function i(){var t=$(".js-content-holder li");$(".js-content-holder").css({width:t.width()*(t.length+2)}),$(".js-bullets").eq(0).addClass("active")}function o(){u=setInterval(function(){a(1)},n.duration)}function r(){$(".js-bullets").removeClass("active").eq(d).addClass("active")}function l(t){t?($(".js-content-holder").css("transform","translateX(-"+500*d+"px) ").addClass("animated"),r()):($(".js-content-holder").css({transform:"translateX(-"+500*d+"px) "}).removeClass("animated"),r())}function a(t){$(".clone").remove(),console.log("start",d),d+=t,d===$(".js-content-holder li").length?($("li").first().clone().addClass("clone").appendTo($(".js-content-holder")),d=0,l(!1)):d===-1?($("li").last().clone().addClass("clone").prependTo($(".js-content-holder")),d=$(".js-content-holder li").length-2,l(!1)):l(!0),console.log("end",d)}function s(){e(),$(".js-slider").on("click",".control-next",function(){a(1)}).on("click",".control-prev",function(){a(-1)}).on("click",".js-bullets",function(){d=parseInt($(this).data("number"))+1,a(-1)}).on("mouseenter",function(){clearInterval(u)}).on("mouseleave",function(){o()})}var f,u,d=0;s(),this.render=function(){c(t),i(),o()}};