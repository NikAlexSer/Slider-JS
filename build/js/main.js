function sendValues(n){var e=new Slider(n);e.init(),e.render()}function main(){$('.input-form input[name="button"]').click(function(){var n=new Preview;n.init(),n.render()})}$(document).ready(function(){main()});var Preview=function(){function n(){d=$("#preview-template").html(),p=Handlebars.compile(d)}function e(n){f={urls:n},m=p(f)}function i(){$("body").append(m)}function t(){var n=$("#arrayURL").val().split(",");return n.forEach(function(n,e,i){i[e]=i[e].replace(/["\n \u005B\u005D]/g,"")}),n}function o(n,e){n.forEach(function(n,i,t){w[i]={img:t[i],com:e[i]}})}function r(){h.splice($(this).parent().index(),1),j.render()}function c(){$(".comment").each(function(n){x[n]=$(".comment")[n].value}),s.hide(),o(h,x),sendValues(w)}function a(){s=$(".js-slider-preview"),u=$('.js-slider-preview input[value="Удалить"]'),l=$('.js-slider-preview input[value="Сохранить"]'),u.on("click",r),l.on("click",c)}var s,u,l,d,p,f,m,v=[],h=[],x=[],w=[],j=this;this.init=function(){h=v=t(),$(".input-form").hide(),n()},this.render=function(){$(".js-slider-preview").remove(),e(h),i(),a()}},Slider=function(n){function e(){j=$("#slider-template").html(),b=Handlebars.compile(j)}function i(n){k={slidesTemp:n},g=b(k)}function t(){$("body").append(g)}function o(){f=$(".control-next"),m=$(".control-prev"),v=$(".js-content-holder li"),w=$(".js-slider"),x=$(".js-content-holder"),h=$(".js-nav span"),h.eq(C).addClass("on"),d=v.first(),p=v.last(),E=!1,s=temp=v.length,l=$(".js-content-holder img").width(),x.css({width:l*s})}function r(){f.on("click",function(){a(1)}),m.on("click",function(){a(-1)}),w.on("mouseenter",function(){clearInterval(u)}).on("mouseleave",function(){c()})}function c(){u=setInterval(function(){a(1)},I)}function a(n){if(!E)switch($(".on").removeClass("on"),E=!0,C+=n,h.eq(C).addClass("on"),console.log("Ahtung!",C),C){case-1:h.eq(s-1).addClass("on"),p.prependTo(x),x.transition({x:(C+2)*-l+"px"},0),x.transition({x:(C+1)*-l+"px"},300,"easeInOutExpo",function(){C=s-1,p.appendTo(x),x.transition({x:C*-l+"px"},0),E=!1});break;case s:h.eq(0).addClass("on"),d.appendTo(x),x.transition({x:(C-2)*-l+"px"},0),x.transition({x:(C-1)*-l+"px"},300,"easeInOutExpo",function(){C=0,d.prependTo(x),x.transition({x:C*-l+"px"},0),E=!1});break;default:x.transition({x:C*-l+"px"},300,"easeInOutExpo",function(){E=!1})}}var s,u,l,d,p,f,m,v,h,x,w,j,b,k,g,C=0,E=!1,I=1e3;this.init=function(){e()},this.render=function(){i(n),t(),o(),r(),c()}};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwcmV2aWV3LmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbInNlbmRWYWx1ZXMiLCJhcnJheVNsaWRlcyIsInNsaWRlciIsIlNsaWRlciIsImluaXQiLCJyZW5kZXIiLCJtYWluIiwiJCIsImNsaWNrIiwicHJldmlldyIsIlByZXZpZXciLCJkb2N1bWVudCIsInJlYWR5IiwiX3RlbXBsYXRlSW5pdCIsInNvdXJjZSIsImh0bWwiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnMiLCJjb21waWxlIiwiX3RlbXBsYXRlSW5zZXJ0RGF0YSIsInVybEFycmF5IiwiY29udGV4dCIsInVybHMiLCJodG1sUHJldmlldyIsIl90ZW1wbGF0ZUJ1aWxkIiwiYXBwZW5kIiwiX2Zvcm1hdGlvbkFycmF5IiwidmFsIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJyZXBsYWNlIiwiX2V4dHJhY3RWYWx1ZXMiLCJzbGlkZXMiLCJjb21tZW50cyIsImltZyIsImNvbSIsIl9kZWxldGVDb250ZW50IiwiYXJyYXlPZkltYWdlcyIsInNwbGljZSIsInRoaXMiLCJwYXJlbnQiLCJpbmRleCIsIiR0aGlzIiwiX3NhdmVDb250ZW50IiwiZWFjaCIsImFycmF5T2ZDb21tZW50cyIsInZhbHVlIiwiJHByZXZpZXdCbG9jayIsImhpZGUiLCJfcHJlcGFyZVByZXZpZXciLCIkYnV0dG9uRGVsIiwiJGJ1dHRvblNhdmUiLCJvbiIsInJlbW92ZSIsInNvdXJjZVNsaWRlcyIsInRlbXBsYXRlU2xpZGVzIiwiY29udGV4dFNsaWRlcyIsInNsaWRlc1RlbXAiLCJodG1sU2xpZGVzIiwiX3ByZXBhcmVBbmltYXRpb24iLCIkbmV4dCIsIiRwcmV2IiwiJHNsaWRlcyIsIiRzbGlkZXIiLCIkaG9sZGVyIiwiJGJ1bGxldHMiLCJlcSIsImFkZENsYXNzIiwiZmlyc3RJdGVtIiwiZmlyc3QiLCJsYXN0SXRlbSIsImxhc3QiLCJpc0FuaW1hdGluZyIsInRvdGFsU2xpZGVzIiwidGVtcCIsImxlbmd0aCIsInNsaWRlV2lkdGgiLCJ3aWR0aCIsImNzcyIsIl9hZGRFdmVudHMiLCJfc2xpZGUiLCJjbGVhckludGVydmFsIiwiX2ludGVydmFsIiwiX3NldHRpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJyZW1vdmVDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJwcmVwZW5kVG8iLCJ0cmFuc2l0aW9uIiwieCIsImFwcGVuZFRvIl0sIm1hcHBpbmdzIjoiQUFBQSxRQUFBQSxZQUFBQyxHQUNBLEdBQUFDLEdBQUEsR0FBQUMsUUFBQUYsRUFDQUMsR0FBQUUsT0FDQUYsRUFBQUcsU0FFQSxRQUFBQyxRQUNBQyxFQUFBLG9DQUFBQyxNQUFBLFdBQ0EsR0FBQUMsR0FBQSxHQUFBQyxRQUNBRCxHQUFBTCxPQUNBSyxFQUFBSixXQUdBRSxFQUFBSSxVQUFBQyxNQUFBLFdBQ0FOLFFDYkEsSUFBQUksU0FBQSxXQWNBLFFBQUFHLEtBQ0FDLEVBQUFQLEVBQUEscUJBQUFRLE9BQ0FDLEVBQUFDLFdBQUFDLFFBQUFKLEdBRUEsUUFBQUssR0FBQUMsR0FDQUMsR0FBQUMsS0FBQUYsR0FDQUcsRUFBQVAsRUFBQUssR0FFQSxRQUFBRyxLQUNBakIsRUFBQSxRQUFBa0IsT0FBQUYsR0FHQSxRQUFBRyxLQUNBLEdBQUFOLEdBQUFiLEVBQUEsYUFBQW9CLE1BQUFDLE1BQUEsSUFJQSxPQUhBUixHQUFBUyxRQUFBLFNBQUFDLEVBQUFDLEVBQUFYLEdBQ0FBLEVBQUFXLEdBQUFYLEVBQUFXLEdBQUFDLFFBQUEsc0JBQUEsTUFFQVosRUFFQSxRQUFBYSxHQUFBQyxFQUFBQyxHQUNBRCxFQUFBTCxRQUFBLFNBQUFDLEVBQUFDLEVBQUFHLEdBQ0FqQyxFQUFBOEIsSUFBQUssSUFBQUYsRUFBQUgsR0FBQU0sSUFBQUYsRUFBQUosTUFHQSxRQUFBTyxLQUtBQyxFQUFBQyxPQUFBakMsRUFBQWtDLE1BQUFDLFNBQUFDLFFBQUEsR0FDQUMsRUFBQXZDLFNBRUEsUUFBQXdDLEtBQ0F0QyxF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R0FBQW1DLEVBQUEsTUFBQSxJQUFBLGdCQUFBLFdBQ0FKLEdBQUEsS0F2R0EsR0FDQUMsR0FDQVMsRUFDQU4sRUFFQVIsRUFDQUUsRUFFQVYsRUFDQUMsRUFDQUMsRUFDQUcsRUFDQUQsRUFDQUQsRUFDQVQsRUFDQUMsRUFDQUMsRUFDQUUsRUFqQkFqQixFQUFBLEVBSUErQixHQUFBLEVBR0FhLEVBQUEsR0FxR0E5QyxNQUFBckMsS0FBQSxXQUNBUyxLQUVBNEIsS0FBQXBDLE9BQUEsV0FDQWMsRUFBQWxCLEdBQ0F1QixJQUNBcUMsSUFDQW9CLElBQ0FJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZW5kVmFsdWVzKGFycmF5U2xpZGVzKSB7XHJcbiAgdmFyIHNsaWRlciA9IG5ldyBTbGlkZXIoYXJyYXlTbGlkZXMpO1xyXG4gIHNsaWRlci5pbml0KCk7XHJcbiAgc2xpZGVyLnJlbmRlcigpO1xyXG59O1xyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICQoJy5pbnB1dC1mb3JtIGlucHV0W25hbWU9XCJidXR0b25cIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIHZhciBwcmV2aWV3ID0gbmV3IFByZXZpZXcoKTtcclxuICAgIHByZXZpZXcuaW5pdCgpO1xyXG4gICAgcHJldmlldy5yZW5kZXIoKTtcclxuICB9KTtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICBtYWluKCk7XHJcbn0pO1xyXG5cclxuLypcclxuW1xyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vNC8zMTE3LzMxNzUwMTQwNTJfNzQ4NGRhMTIwNV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vNC8zMjYyLzMxNzUwMTQ1NTRfZGI1OTdiYmI3M196LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vNC8zNjcwLzg4MTM1NjI1MTJfMjI5ZjVjZjI0YV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MxLnN0YXRpY2ZsaWNrci5jb20vOS84NDQwLzc3ODcyMzc1MTZfYjQ2YWE1ZmFiYl9jLmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vNC8zNDA0LzM0NDk1MjYzNzFfMDQ1NDUxNWIxM196LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vNC8zNjAyLzM0NTAzMjM2NThfYWI1OTYxYTBhYV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MxLnN0YXRpY2ZsaWNrci5jb20vMy8yNDkxLzM3NTE2NDczNzVfNDY5NWIzNzhkZV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MxLnN0YXRpY2ZsaWNrci5jb20vMy8yNDQzLzM3NTI0MjYxOThfZWJlMDNmYTYxNV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MyLnN0YXRpY2ZsaWNrci5jb20vMi8xMDMyLzMxNzUwMjIwNjZfNTdmY2U1MDViZV96LmpwZ1wiLFxyXG4gICAgXCJodHRwczovL2MxLnN0YXRpY2ZsaWNrci5jb20vMy8yNTI4LzM3NTE2MjQ1NzNfMDg4MTVmODk1MF96LmpwZ1wiXHJcbl1cclxuKi8iLCJ2YXIgUHJldmlldyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciB1cmxBcnJheSA9IFtdLFxyXG4gICAgYXJyYXlPZkltYWdlcyA9IFtdLFxyXG4gICAgYXJyYXlPZkNvbW1lbnRzID0gW10sXHJcbiAgICBhcnJheVNsaWRlcyA9IFtdLFxyXG4gICAgJHRoaXMgPSB0aGlzLFxyXG4gICAgJHByZXZpZXdCbG9jayxcclxuICAgICRidXR0b25EZWwsXHJcbiAgICAkYnV0dG9uU2F2ZSxcclxuICAgIHNvdXJjZSxcclxuICAgIHRlbXBsYXRlLFxyXG4gICAgY29udGV4dCxcclxuICAgIGh0bWxQcmV2aWV3O1xyXG4gICAgXHJcbiAgZnVuY3Rpb24gX3RlbXBsYXRlSW5pdCgpIHtcclxuICAgIHNvdXJjZSA9ICQoXCIjcHJldmlldy10ZW1wbGF0ZVwiKS5odG1sKCk7XHJcbiAgICB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gX3RlbXBsYXRlSW5zZXJ0RGF0YSh1cmxBcnJheSkge1xyXG4gICAgY29udGV4dCA9IHt1cmxzOiB1cmxBcnJheX07XHJcbiAgICBodG1sUHJldmlldyA9IHRlbXBsYXRlKGNvbnRleHQpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gX3RlbXBsYXRlQnVpbGQoKSB7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKGh0bWxQcmV2aWV3KTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIF9mb3JtYXRpb25BcnJheSgpIHtcclxuICAgIHZhciB1cmxBcnJheSA9ICQoJyNhcnJheVVSTCcpLnZhbCgpLnNwbGl0KCcsJyk7XHJcbiAgICB1cmxBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpLCB1cmxBcnJheSkge1xyXG4gICAgICB1cmxBcnJheVtpXSA9IHVybEFycmF5W2ldLnJlcGxhY2UoL1tcIlxcbiBcXHUwMDVCXFx1MDA1RF0vZywgJycpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXJsQXJyYXk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBfZXh0cmFjdFZhbHVlcyhzbGlkZXMsIGNvbW1lbnRzKSB7XHJcbiAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpLCBzbGlkZXMpIHtcclxuICAgICAgYXJyYXlTbGlkZXNbaV0gPSB7aW1nOiBzbGlkZXNbaV0sIGNvbTogY29tbWVudHNbaV19O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBmdW5jdGlvbiBfZGVsZXRlQ29udGVudCgpIHtcclxuICAgIC8qXHJcbiAgICAgICQodGhpcykg0L/QvtGC0L7QvNGDINGH0YLQviBwYXJlbnQoKSDQv9GA0LjQvNC10L3Rj9C10YLRgdGPINC6INC+0LHRitC10LrRgtGDIEpxdWVyeSxcclxuICAgICAg0LAgJCh0aGlzKSDQtNCw0LXRgiDRgtCw0LrQvtC5INC+0LHRitC10LrRgiDQsiDQutC+0L3RgtC10LrRgdGC0LUg0L3QsNC20LjQvNCw0LXQvNC+0Lkg0LrQvdC+0L/QutC4XHJcbiAgICAqL1xyXG4gICAgYXJyYXlPZkltYWdlcy5zcGxpY2UoJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgpLCAxKTtcclxuICAgICR0aGlzLnJlbmRlcigpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gX3NhdmVDb250ZW50KCkge1xyXG4gICAgJCgnLmNvbW1lbnQnKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgYXJyYXlPZkNvbW1lbnRzW2ldID0gJCgnLmNvbW1lbnQnKVtpXS52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICRwcmV2aWV3QmxvY2suaGlkZSgpO1xyXG4gICAgX2V4dHJhY3RWYWx1ZXMoYXJyYXlPZkltYWdlcywgYXJyYXlPZkNvbW1lbnRzKTtcclxuICAgIHNlbmRWYWx1ZXMoYXJyYXlTbGlkZXMpO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gX3ByZXBhcmVQcmV2aWV3KCkge1xyXG4gICAgJHByZXZpZXdCbG9jayA9ICQoJy5qcy1zbGlkZXItcHJldmlldycpO1xyXG4gICAgJGJ1dHRvbkRlbCA9ICAkKCcuanMtc2xpZGVyLXByZXZpZXcgaW5wdXRbdmFsdWU9XCLQo9C00LDQu9C40YLRjFwiXScpO1xyXG4gICAgJGJ1dHRvblNhdmUgPSAkKCcuanMtc2xpZGVyLXByZXZpZXcgaW5wdXRbdmFsdWU9XCLQodC+0YXRgNCw0L3QuNGC0YxcIl0nKTtcclxuICAgICRidXR0b25EZWwub24oXCJjbGlja1wiLCBfZGVsZXRlQ29udGVudCk7XHJcbiAgICAkYnV0dG9uU2F2ZS5vbihcImNsaWNrXCIsIF9zYXZlQ29udGVudCk7XHJcbiAgfTtcclxuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgYXJyYXlPZkltYWdlcyA9IHVybEFycmF5ID0gX2Zvcm1hdGlvbkFycmF5KCk7XHJcbiAgICAkKCcuaW5wdXQtZm9ybScpLmhpZGUoKTtcclxuICAgIF90ZW1wbGF0ZUluaXQoKTtcclxuICB9O1xyXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuanMtc2xpZGVyLXByZXZpZXcnKS5yZW1vdmUoKTsgLy/Rg9C00LDQu9C10L3QuNC1INGB0YLQsNGA0YvRhS/Qv9GD0YHRgtGL0YUg0L/RgNC10LLRjNGO0YUg0L/QtdGA0LXQtCDRgNC10L3QtNC10YDQvtC8XHJcbiAgICBfdGVtcGxhdGVJbnNlcnREYXRhKGFycmF5T2ZJbWFnZXMpO1xyXG4gICAgX3RlbXBsYXRlQnVpbGQoKTtcclxuICAgIF9wcmVwYXJlUHJldmlldygpO1xyXG4gIH07XHJcbn07IiwidmFyIFNsaWRlciA9IGZ1bmN0aW9uKGFycmF5U2xpZGVzKSB7XG4gIHZhciBpbmRleCA9IDAsIC8vIGNvdW50ZXJcbiAgICB0b3RhbFNsaWRlcyxcbiAgICBfaW50ZXJ2YWwsIC8vIGZvciBzZXRJbnRlcnZhbFxuICAgIHNsaWRlV2lkdGgsXG4gICAgaXNBbmltYXRpbmcgPSBmYWxzZSxcbiAgICBmaXJzdEl0ZW0sXG4gICAgbGFzdEl0ZW0sXG4gICAgZHVyYXRpb24gPSAxMDAwLFxuICAgICRuZXh0LFxuICAgICRwcmV2LFxuICAgICRzbGlkZXMsXG4gICAgJGJ1bGxldHMsXG4gICAgJGhvbGRlcixcbiAgICAkc2xpZGVyLFxuICAgIHNvdXJjZVNsaWRlcyxcbiAgICB0ZW1wbGF0ZVNsaWRlcyxcbiAgICBjb250ZXh0U2xpZGVzLFxuICAgIGh0bWxTbGlkZXM7XG5cbiAgLy8gSGFuZGxlYmFycyBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gX3RlbXBsYXRlSW5pdCgpIHtcbiAgICBzb3VyY2VTbGlkZXMgPSAkKFwiI3NsaWRlci10ZW1wbGF0ZVwiKS5odG1sKCk7XG4gICAgdGVtcGxhdGVTbGlkZXMgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlU2xpZGVzKTtcbiAgfVxuICBmdW5jdGlvbiBfdGVtcGxhdGVJbnNlcnREYXRhKGFycmF5U2xpZGVzKSB7XG4gICAgY29udGV4dFNsaWRlcyA9IHtzbGlkZXNUZW1wOiBhcnJheVNsaWRlc307XG4gICAgaHRtbFNsaWRlcyA9IHRlbXBsYXRlU2xpZGVzKGNvbnRleHRTbGlkZXMpO1xuICB9XG4gIGZ1bmN0aW9uIF90ZW1wbGF0ZUJ1aWxkKCkge1xuICAgICQoJ2JvZHknKS5hcHBlbmQoaHRtbFNsaWRlcyk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIF9wcmVwYXJlQW5pbWF0aW9uKCkge1xuICAgICRuZXh0ID0gJCgnLmNvbnRyb2wtbmV4dCcpO1xuICAgICRwcmV2ID0gICQoJy5jb250cm9sLXByZXYnKTtcbiAgICAkc2xpZGVzID0gJCgnLmpzLWNvbnRlbnQtaG9sZGVyIGxpJyk7XG4gICAgJHNsaWRlciA9ICQoJy5qcy1zbGlkZXInKTtcbiAgICAkaG9sZGVyID0gJCgnLmpzLWNvbnRlbnQtaG9sZGVyJyk7XG4gICAgJGJ1bGxldHMgPSAkKCcuanMtbmF2IHNwYW4nKTtcbiAgICAkYnVsbGV0cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XG4gICAgZmlyc3RJdGVtID0gJHNsaWRlcy5maXJzdCgpO1xuICAgIGxhc3RJdGVtID0gJHNsaWRlcy5sYXN0KCk7XG4gICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0b3RhbFNsaWRlcyA9IHRlbXAgPSAkc2xpZGVzLmxlbmd0aDtcbiAgICBzbGlkZVdpZHRoID0gJCgnLmpzLWNvbnRlbnQtaG9sZGVyIGltZycpLndpZHRoKCk7XG4gICAgJGhvbGRlci5jc3Moe3dpZHRoOiBzbGlkZVdpZHRoICogKHRvdGFsU2xpZGVzKX0pO1xuICB9O1xuICBmdW5jdGlvbiBfYWRkRXZlbnRzKCkge1xuICAgICRuZXh0Lm9uKCdjbGljaycsIChmdW5jdGlvbigpIHtcbiAgICAgIF9zbGlkZSgxKTtcbiAgICB9KSk7XG4gICAgJHByZXYub24oJ2NsaWNrJywgKGZ1bmN0aW9uKCkge1xuICAgICAgX3NsaWRlKC0xKTtcbiAgICB9KSk7XG4gICAgJHNsaWRlclxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX3NldHRpbmdJbnRlcnZhbCgpO1xuICAgIH0pO1xuICAgIFxuICB9O1xuICBmdW5jdGlvbiBfc2V0dGluZ0ludGVydmFsKCkge1xuICAgIF9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIF9zbGlkZSgxKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH07XG4gIGZ1bmN0aW9uIF9zbGlkZShkaXJlY3Rpb24pIHtcbiAgICBpZiAoaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJCgnLm9uJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIGluZGV4ICs9IGRpcmVjdGlvbjtcbiAgICAkYnVsbGV0cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XG4gICAgY29uc29sZS5sb2coJ0FodHVuZyEnLCBpbmRleCk7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgJGJ1bGxldHMuZXEodG90YWxTbGlkZXMgLSAxKS5hZGRDbGFzcygnb24nKTtcbiAgICAgICAgbGFzdEl0ZW0ucHJlcGVuZFRvKCRob2xkZXIpO1xuICAgICAgICAkaG9sZGVyLnRyYW5zaXRpb24oe3g6IChpbmRleCArIDIpICogLXNsaWRlV2lkdGggKyAncHgnfSwgMCk7XG4gICAgICAgICRob2xkZXIudHJhbnNpdGlvbih7eDogKGluZGV4ICsgMSkgKiAtc2xpZGVXaWR0aCArICdweCd9LCAzMDAsICdlYXNlSW5PdXRFeHBvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluZGV4ID0gdG90YWxTbGlkZXMgLSAxO1xuICAgICAgICAgIGxhc3RJdGVtLmFwcGVuZFRvKCRob2xkZXIpO1xuICAgICAgICAgICRob2xkZXIudHJhbnNpdGlvbih7eDogaW5kZXggKiAtc2xpZGVXaWR0aCArICdweCd9LCAwKTtcbiAgICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvdGFsU2xpZGVzOlxuICAgICAgICAkYnVsbGV0cy5lcSgwKS5hZGRDbGFzcygnb24nKTtcbiAgICAgICAgZmlyc3RJdGVtLmFwcGVuZFRvKCRob2xkZXIpO1xuICAgICAgICAkaG9sZGVyLnRyYW5zaXRpb24oe3g6IChpbmRleCAtIDIpICogLXNsaWRlV2lkdGggKyAncHgnfSwgMCk7XG4gICAgICAgICRob2xkZXIudHJhbnNpdGlvbih7eDogKGluZGV4IC0gMSkgKiAtc2xpZGVXaWR0aCArICdweCd9LCAzMDAsICdlYXNlSW5PdXRFeHBvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICBmaXJzdEl0ZW0ucHJlcGVuZFRvKCRob2xkZXIpO1xuICAgICAgICAgICRob2xkZXIudHJhbnNpdGlvbih7eDogaW5kZXggKiAtc2xpZGVXaWR0aCArICdweCd9LCAwKTtcbiAgICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyRob2xkZXIuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIChpbmRleCAqIC1zbGlkZVdpZHRoKSArICdweCknLCAndHJhbnNpdGlvbic6ICdhbGwgMC4zcyBjdWJpYy1iZXppZXIoMSwuMDEsLjMyLDEpJyB9KTtcbiAgICAgICAgJGhvbGRlci50cmFuc2l0aW9uKHt4OiBpbmRleCAqIC1zbGlkZVdpZHRoICsgJ3B4J30sIDMwMCwgJ2Vhc2VJbk91dEV4cG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgX3RlbXBsYXRlSW5pdCgpO1xuICB9O1xuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIF90ZW1wbGF0ZUluc2VydERhdGEoYXJyYXlTbGlkZXMpO1xuICAgIF90ZW1wbGF0ZUJ1aWxkKCk7XG4gICAgX3ByZXBhcmVBbmltYXRpb24oKTtcbiAgICBfYWRkRXZlbnRzKCk7XG4gICAgX3NldHRpbmdJbnRlcnZhbCgpO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
