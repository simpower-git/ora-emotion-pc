spa.clove.advantage=function(){var a,e,t,n={main_html:String()+'<div class="spa-module-title"><span class="spa-module-title-line"></span><p class="spa-module-title-txt">橘子优势</p><span class="spa-module-title-line"></span></div>'},i={$advantage:null},s={};return a=function(){var a=i.$advantage;s={$advantage:a,$swiper:a.find(".swiper-container"),$slide:a.find(".swiper-slide")}},e=function(){var a=new Swiper(s.$swiper,{autoHeight:!0,onSlideChangeStart:function(){$(".clove-advantage-main .tabs .active").removeClass("active"),$(".clove-advantage-main .tabs span").eq(a.activeIndex).addClass("active")}});$(".clove-advantage-main .tabs span").on("touchstart mousedown",function(e){e.preventDefault(),$(".clove-advantage-main .tabs .active").removeClass("active"),$(this).addClass("active"),a.slideTo($(this).index())}),$(".clove-advantage-main .tabs span").click(function(a){a.preventDefault()})},t=function(t){i.$advantage=t,t.html(n.main_html),a(),e()},{initModule:t}}();