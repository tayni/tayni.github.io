flexbe_cli.block.register(111,{mapInit:!1,index:!1,onLoad:function(){var t=this;this.$map=$(".component-map",this.$block),this.$map.length?this.initMap():setTimeout(function(){t.onLoad()},50)},initMap:function(){var a=this;if(this.data=this.$map.data("data"),this.$map.on("mapInit",function(){a.mapInit=!0,a.selectMark(a.index||0,!0)}),this.$block.find(".tab-list").on("click","a",function(t){var i=parseInt($(t.currentTarget).closest(".tab").attr("data-item-id"),10)-1;a.selectMark(i)}),this.$map.on("balloonOpen",function(t,i){a.selectMark(i)}),flexbe_cli.is_admin){var i=this.$map[0].offsetHeight;clearInterval(this.timer),this.timer=setInterval(function(){var t=a.$map[0].offsetHeight;t!=i&&(i=t,a.$map.trigger("resizeMap"))},100)}},selectMark:function(t,i){void 0===i&&(i=!1);var a=this.data.places[t];if(a&&(this.index!=t||i)){this.index=t;var e=this.$block.find(".tab-list"),s=this.$block.find(".item-list");e.find(".active").removeClass("active"),s.find(".active").removeClass("active"),e.find('[data-item-id="'+(this.index+1)+'"]').addClass("active"),s.find('[data-item-id="'+(this.index+1)+'"]').addClass("active"),this.data.center=a.coords,this.$map.trigger("selectMark",this.index)}}});
flexbe_cli.block.register(2,{onLoad:function(){var o=this.$block.find('.component-menu[data-style="opacity"]');o.on("mouseenter","a",function(e){o.addClass("hover")}).on("mouseleave","a",function(e){o.removeClass("hover")})}});
flexbe_cli.block.register(20,{onLoad:function(){var l=this;if(!flexbe_cli.is_admin){var o=this.$block.find(".component-scroll-down");o.length&&o.on("click",function(){flexbe_cli.block.scrollTo(l.$block.next())})}}});
flexbe_cli.block.register(21,{onLoad:function(){var l=this;if(!flexbe_cli.is_admin){var o=this.$block.find(".component-scroll-down");o.length&&o.on("click",function(){flexbe_cli.block.scrollTo(l.$block.next())})}}});
flexbe_cli.block.register(22,{onLoad:function(){var l=this;if(!flexbe_cli.is_admin){var o=this.$block.find(".component-scroll-down");o.length&&o.on("click",function(){flexbe_cli.block.scrollTo(l.$block.next())})}}});
flexbe_cli.block.register(23,{onLoad:function(){var l=this;if(!flexbe_cli.is_admin){var o=this.$block.find(".component-scroll-down");o.length&&o.on("click",function(){flexbe_cli.block.scrollTo(l.$block.next())})}}});

flexbe_cli.block.register(34,{mapInit:!1,index:!1,onLoad:function(){var i=this;if(this.$map=$(".component-map",this.$block),this.data=this.$map.data("data"),flexbe_cli.is_admin){var a=this.$map[0].offsetHeight;clearInterval(this.timer),this.timer=setInterval(function(){var t=i.$map[0].offsetHeight;t!=a&&(a=t,i.$map.trigger("resizeMap"))},100)}}});
flexbe_cli.block.register(39,{onLoad:function(){this.timer=flexbe_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"})}});
flexbe_cli.block.register(42,{onLoad:function(){var e=this,c=this.$block.find(".title-holder"),d=this.$block.find(".content-holder");c.on("click",".item",function(t){var i=$(t.currentTarget),a=+i.attr("data-item-id");c.find(".item").removeClass("active"),i.addClass("active"),d.find(".item").removeClass("active").closest('[data-item-id="'+a+'"]').addClass("active"),e.$block.find("[data-active]").attr("data-active",a)})}});
flexbe_cli.block.register(44,{onLoad:function(){var i=this;flexbe_cli.is_admin&&(setTimeout(function(){i.set_width()},300),$(window).on("resize.b44 orientationchange.b44",function(){i.set_width()}))},set_width:function(){var i=this.$block.find(".fake-table"),t=i.find(".fake-td").css("width",""),e=i.find(".fake-tr").eq(0).find(".fake-td").length,n=i.innerWidth();n<300||t.css("width",n/e+"px")}});
flexbe_cli.block.register(50,{require:["/_s/lib/swiper/swiper.v4.js"],onLoad:function(i){var e=this,s=this.$block.find(".slider"),a=this.$block.find(".slider-button"),l=this.$block.find(".slider-pagination"),t=s.data("count");if(1!=t){this.slideshow=Math.floor(s.data("slideshow"));var o=!flexbe_cli.is_admin&&1<t,n={prevEl:a[0],nextEl:a[1]},r={el:l[0],type:"bullets",clickable:!0},d=!1;!flexbe_cli.is_admin&&this.slideshow&&(d={delay:this.slideshow});var p=Math.floor(e.$block.data("slide-move"))||0;t<=p&&(p=t-1),p<0&&(p=0),this.swiper=new Swiper(s[0],{wrapperClass:"slider-wrapper",slideClass:"slide",slideActiveClass:"active",noSwipingClass:"fr-element",simulateTouch:!flexbe_cli.is_admin,touchMoveStopPropagation:!1,preventClicksPropagation:!1,preventClicks:!1,spaceBetween:30,autoHeight:!1,initialSlide:p,navigation:n,pagination:r,autoplay:d,loop:o,on:{slideChange:function(){e.$block.data("slide-move",this.activeIndex)}}}),i&&"items_add"===i.reason&&this.swiper.slideTo(i.reasonData.to)}},onFocus:function(i){this.swiper&&this.swiper.autoplay&&this.slideshow&&(i?this.swiper.autoplay.run():this.swiper.autoplay.pause())}});
flexbe_cli.block.register(51,{require:["/_s/lib/swiper/swiper.v4.js"],onLoad:function(i){var s=this,e=this,t=this.$block.find(".slider"),a=this.$block.find(".slider-button"),l=this.$block.find(".slider-pagination"),o=t.find(".info-wrapper > .item"),n=t.data("count");if(1!=n){this.slideshow=Math.floor(t.data("slideshow"));var r={prevEl:a[0],nextEl:a[1]},d={el:l[0],type:"bullets",clickable:!0},p=!1;!flexbe_cli.is_admin&&this.slideshow&&(p={delay:this.slideshow});var c=Math.floor(this.$block.data("slide-move"))||0;void 0===c&&(c=3===n?1:0),n<=c&&(c=n-1),c<0&&(c=0),this.swiper=new Swiper(t[0],{wrapperClass:"slider-wrapper",slideClass:"slide",slideActiveClass:"active",noSwipingClass:"fr-element",touchMoveStopPropagation:!1,preventClicksPropagation:!1,preventClicks:!1,spaceBetween:0,autoHeight:!1,paginationClickable:!0,initialSlide:c,navigation:r,pagination:d,autoplay:p,loop:!1,on:{init:function(){h(this.activeIndex)},slideChange:function(){h(this.activeIndex)}}}),i&&"items_add"===i.reason&&this.swiper.slideTo(i.reasonData.to),o.on("click",function(i){var e=$(i.currentTarget).index();s.swiper.slideTo(e)})}function h(i){e.$block.data("slide-move",i),o.removeClass("selected").eq(i).addClass("selected")}},onFocus:function(i){this.swiper&&this.swiper.autoplay&&this.slideshow&&(i?this.swiper.autoplay.run():this.swiper.autoplay.pause())}});

flexbe_cli.block.register(61,{onLoad:function(){var e=this.$block.find(".item").addClass("noanimate").removeClass("closed");e.find(".list").css("max-height",""),flexbe_cli.is_admin||"true"!=this.$block.find(".container").attr("data-expand")?this.$block.find(".toggle-list").remove():(e.find(".list").each(function(e,t){var i=t.offsetHeight;i&&(t.style.maxHeight=i+30+"px")}),e.addClass("closed").removeClass("noanimate"),this.$block.on("click",".item > .data, .toggle-list",function(e){$(e.currentTarget).closest(".item").toggleClass("closed")}))}});
flexbe_cli.block.register(71,{onLoad:function(){flexbe_cli.is_admin||this.$block.on("click",".content-wrapper",function(t){$(t.target).closest(".component-button, .slider-button")[0]||$(t.target).is(".component-button, .slider-button")||$(t.currentTarget).find(".button-holder a").trigger("click")})}});


flexbe_cli.block.register(82,{onLoad:function(){var a=this.$block.find(".single-image-container");this.$block.find(".image-wrapper").on("click",".image-item",function(e){e.preventDefault(),e.stopPropagation();var i=$(e.currentTarget).data("itemId");$(e.currentTarget).addClass("active").siblings().removeClass("active"),a.find('[data-item-id="'+i+'"]').addClass("active").siblings().removeClass("active")})}});
flexbe_cli.block.register(83,{onLoad:function(){flexbe_cli.run.is_safari&&this.$block.find(".image-item").css("transform","translateZ(0)")}});
flexbe_cli.block.register(84,{onLoad:function(){var i=this;this.$block.find(".video-preview").on("click",function(e){e.preventDefault(),i.$block.find("iframe")[0].src+="&autoplay=1",setTimeout(function(){$(e.currentTarget).addClass("hide")},100)})}});
flexbe_cli.block.register(85,{onLoad:function(){var i=this;flexbe_cli.is_admin||this.$block.find(".play").on("click",function(e){e.preventDefault(),i.$block.find("iframe")[0].src+="&autoplay=1",setTimeout(function(){$(e.currentTarget).closest(".video").addClass("played")},100)})}});
flexbe_cli.block.register(86,{require:["/_s/lib/swiper/swiper.v3.js"],onLoad:function(e){var i=this,t=this,a=this.$block.find(".slider"),s=this.$block.find(".slider-button"),n=this.$block.find(".slider-pagination"),l=this.$block.find(".text-labels"),r=a.data("count");this.slideshow=Math.floor(a.data("slideshow"));var d=Math.floor(t.$block.data("slide-move"))||0;if(r<=d&&(d=r-1),d<0&&(d=0),this.swiper=new Swiper3(a[0],{wrapperClass:"slider-wrapper",slideClass:"slide",slideActiveClass:"active",noSwipingClass:"redactor-box",pagination:n[0],prevButton:s[0],nextButton:s[1],touchMoveStopPropagation:!1,preventClicksPropagation:!1,preventClicks:!1,spaceBetween:5,autoHeight:!1,paginationClickable:!0,virtualTranslate:!0,initialSlide:d,autoplay:!flexbe_cli.is_admin&&this.slideshow,onProgress:function(e,i){if(void 0===e.activeIndex)return!0;var t=1/(e.slides.length-1),a=(i-t*e.activeIndex)/t,s=Math.abs(a),n=e.slides[e.activeIndex],r=$(e.slides).closest("next"==e.swipeDirection?".swiper-slide-next":".swiper-slide-prev")[0];requestAnimationFrame(function(){.01<s&&s<.99?(e.animating=!0,e.wrapper.removeClass("allow-animate"),n&&(n.style.opacity=Math.abs(s-1),n.style.transform="scale("+(1+.05*s)+")"),r&&(r.style.opacity=s,r.style.transform="scale("+(.2*Math.abs(s-1)+1)+")",r.style.transformOrigin=(e.swipeDirection,"left"),l.children().removeClass("current prev"),l.find('[data-item-id="'+(e.activeIndex+1)+'"]').addClass("prev"))):(e.animating=!1,e.wrapper.addClass("allow-animate"),n&&(n.style.transform=null,n.style.opacity=null),r&&(r.style.transformOrigin=null,r.style.transform=null,r.style.opacity=null),l.find('[data-item-id="'+(e.activeIndex+1)+'"]').addClass("current"),e.wrapper.trigger("transitionend"))})},onInit:function(e){l.find('[data-item-id="'+(e.activeIndex+1)+'"]').addClass("current")},onSlideChangeEnd:function(e){l.children().removeClass("current prev"),l.find('[data-item-id="'+(e.previousIndex+1)+'"]').addClass("prev"),l.find('[data-item-id="'+(e.activeIndex+1)+'"]').addClass("current"),t.$block.data("slide-move",e.activeIndex)}}),e&&"items_add"===e.reason&&this.swiper.slideTo(e.reasonData.to),flexbe_cli.is_admin){var o=a[0].offsetHeight;clearInterval(this.timer),this.timer=setInterval(function(){var e=a[0].offsetHeight;e!=o&&(i.swiper.update(),o=e)},100)}}});
flexbe_cli.block.register(92,{});
flexbe_cli.modal.register(1,{onOpen:function(n){flexbe_cli.components.instances[this.id].forEach(function(e){"form"===e.is&&e.setData(n)})}});
flexbe_cli.modal.register(100,{types:{},pay_id:"",hash:"",selectors:{},onLoad:function(){var s=this;this.start(),flexbe_cli.events.on("pay",function(t,a){a&&"init"==a.action&&s.start()})},start:function(){this.loadSelectors();var t=this.getQueryParams();if(t){switch(t){case"success":this.showSuccessAlert();break;case"fail":this.showFailAlert();break;case"pay":this.getBill()}setTimeout(function(){flexbe_cli.modal.open("pay")},300)}},loadSelectors:function(){this.selectors.$container=this.$modal.find(".container"),this.selectors.$bill=this.$modal.find(".action-bill"),this.selectors.$cash=this.$modal.find(".action-cash"),this.selectors.$already=this.$modal.find(".action-already"),this.selectors.$success=this.$modal.find(".action-success"),this.selectors.$fail=this.$modal.find(".action-fail")},getQueryParams:function(){var t=!1;try{t=JSON.parse('{"'+decodeURI(location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(t){}if(!t.pay_id)return!1;if(this.pay_id=t.pay_id,this.hash=t.h,t.pay_status){try{history.pushState(null,null,window.location.pathname)}catch(t){}return t.pay_status}return"pay"},getBill:function(){var a=this;this.pay_id&&!1!==this.pay_id&&$.ajax({url:"/mod/pay/ajax",type:"GET",dataType:"json",data:{act:"payData",pay_id:this.pay_id,hash:this.hash}}).done(function(t){if(0===t.status)return!1;a.types=t.pay.support_types,2==t.pay.pay_status?a.showAlreadyPayed(t.pay):a.cashonly()?a.showCashInstruction(t.pay):a.showBillForm(t.pay)})},showBillForm:function(t){var e=this;this.selectors.$container.attr("data-type","bill");var i=this.selectors.$bill.find(".pay-methods-list").empty(),a=this.selectors.$bill.find(".pay-action");for(var s in this.types){var n=this.types[s];if(n.name){var c='<label class="item" data-type="'+s+'" title="'+n.name+'">\n                                <input type="radio" name="form[pay_method]" value="'+s+'">\n                                <div class="preview"><i></i></div>\n                                <span>'+n.name+"</span>\n                            </label>";i.append(c)}}a.find(".title > span").text(t.pay_id),a.find(".price > span").text(t.pay_sum),i.on("click",".item",function(t){return t.preventDefault(),$(t.currentTarget).find("input").prop("checked",!0),!1}),a.find(".btn-wrap a").on("click",function(t){var a=i.find("input:checked").val();if(!a)return alert("Выберите способ оплаты"),!1;if("cash"==a)return e.showCashInstruction(),!1;var s="/mod/pay/?pay_type="+a+"&pay_id="+e.pay_id+"&h="+e.hash;$(t.currentTarget).attr("href",s),flexbe_cli.run.is_mobile&&flexbe_cli.run.is_OSX||$(t.currentTarget).addClass("busy")})},showCashInstruction:function(){this.selectors.$container.attr("data-type","cash"),this.types.cash&&this.types.cash.instruction&&this.selectors.$cash.find(".text").html(this.types.cash.instruction),$.ajax({url:"/mod/pay/ajax",type:"GET",dataType:"json",data:{act:"selectCash",pay_id:this.pay_id,hash:this.hash}})},showAlreadyPayed:function(t){this.selectors.$container.attr("data-type","already");var a=this.selectors.$already.find(".pay-action"),s="";"0"!=t.pay_time_done&&(s=t.pay_time_done),this.selectors.$already.find(".text > span.num").text(t.pay_id),a.find(".title > span.num").text(t.pay_id),a.find(".sub > span").text(s),a.find(".price > span").text(t.pay_sum)},showSuccessAlert:function(){this.selectors.$container.attr("data-type","success"),flexbe_cli.stat.reach_goal("pay_done")},showFailAlert:function(){var t=this;this.selectors.$container.attr("data-type","fail"),this.selectors.$fail.find(".component-button").off("click").on("click",function(){t.getBill()})},cashonly:function(){return!(!this.types.cash||1!=Object.keys(this.types).length)}});
flexbe_cli.modal.register(2,{onOpen:function(n){flexbe_cli.components.instances[this.id].forEach(function(e){"form"===e.is&&e.setData(n)})}});
flexbe_cli.modal.register(20,{onClose:function(){this.resetVideo()},resetVideo:function(){var e=this.$modal.find("iframe")[0];if(e){var i=e.src;e.src="",e.src=i}}});
flexbe_cli.modal.register(21,{require:["/_s/lib/swiper/swiper.v4.js"],onLoad:function(i){this.isOpen&&this.initSwiper(i)},onOpen:function(){this.loaded&&this.initSwiper()},onClose:function(){this.destroySwiper(),this.resetVideo()},resetVideo:function(){var i=this.$modal.find("iframe")[0];if(i){var e=i.src;i.src="",i.src=e}},initSwiper:function(i){var t=this,e=this,s=this.$modal.find(".slider"),n=this.$modal.find(".info-wrapper > .item"),o=this.$modal.find(".slider-pagination"),a=s.data("count");if(!(a<=1)){var r={el:o[0],type:"bullets",clickable:!0},d=Math.floor(this.$modal.data("slide-move"))||0;a<=d&&(d=a-1),d<0&&(d=0),this.swiper=new Swiper(s[0],{wrapperClass:"slider-wrapper",slideClass:"slide",slideActiveClass:"active",noSwipingClass:"redactor-box",loop:!1,initialSlide:d,pagination:r,touchMoveStopPropagation:!0,preventClicksPropagation:!0,preventClicks:!1,spaceBetween:0,autoHeight:!1,paginationClickable:!0,on:{init:function(){l(this.activeIndex)},slideChange:function(){e.$modal.data("slide-move",this.activeIndex),l(this.activeIndex)}}}),i&&"items_add"===i.reason&&this.swiper.slideTo(i.reasonData.to),n.on("click",function(i){i.preventDefault();var e=$(i.currentTarget).index();return t.swiper&&t.swiper.slideTo(e),!1})}function l(i){n.removeClass("selected").eq(i).addClass("selected")}},destroySwiper:function(){this.swiper&&"function"==typeof this.swiper.destroy&&this.swiper.destroy()}});
flexbe_cli.modal.register(3,{onOpen:function(n){flexbe_cli.components.instances[this.id].forEach(function(i){"form"===i.is&&i.setData(n)})},onClose:function(){this.reinit_video()},reinit_video:function(){var i=this.$modal.find("iframe")[0];if(i){var n=i.src;i.src="",i.src=n}},onMsg:function(i){"render"==i&&this.rebind_form()}});
flexbe_cli.widget.register(1,{list:[],$list:null,$sum:null,$button:null,is_open:!1,is_expend:!1,onInit:function(){this.$container=this.$widget.find(".widget-container"),this.$list=this.$widget.find(".order-list > ul"),this.$sum=this.$widget.find(".checkout .price"),this.$button=this.$widget.find(".cart-button"),this.events(),flexbe_cli.is_admin?this.list=[{id:"7832324_1",count:1,img:"/img/1000000945_200/img.jpg",title:"Тестовый товар 1",price:750},{id:"7832464_2",count:2,img:"/img/1000000948_200/img.jpg",title:"Тестовый товар 2",price:2550}]:this.loadFromStorage(),this.renderList()},onLoad:function(){this.formInit()},onUpdate:function(){this.onInit(),this.is_open&&(this.$container.addClass("fade-in noanimate"),this.open(),this.expend&&(this.$container.addClass("state-1 state-2"),this.animateForm(!1)))},formInit:function(){var i=this;flexbe_cli.components.instances[this.id].forEach(function(t){"form"===t.is&&((i.form=t).onBeforeSend(function(){t.addItems(i.list)}),t.onAfterSent(function(){flexbe_cli.stat.ecommerce.purchase(i.list),i.list=[],i.renderList(),i.close()}))})},events:function(){var s=this;flexbe_cli.events.off("cart_command.w1").on("cart_command.w1",function(t,i){if(i)switch(i.command){case"toggle":s.is_open?s.close():s.open();break;case"open":s.open(i);break;case"close":s.close(i);break;case"add":s.add(i.item);break;case"remove":s.remove(i.id)}}),this.$widget.off("click.cart-button").on("click.cart-button",".cart-button",function(){s.$container.hasClass("show")?s.close():s.open()}),this.$list.off("click").on("click","[data-action]",function(t){var i=$(t.currentTarget).closest("li"),e=$(t.currentTarget).data("action"),n=i.data("id");n&&("remove"==e?s.remove(n):s.updateCount(n,e))}),this.$list.off("input").on("input",".count",function(t){var i=$(t.currentTarget).closest("li").attr("data-id"),e=+t.target.value;e||(e=1,$(t.currentTarget).val(1)),s.updateCount(i,e)}),this.$container.find(".cart-container .button").off("click").on("click","a",function(){s.animateForm()}),this.$container.off("click.times-close").on("click.times-close","a.close, > .overlay, .container",function(t){($(t.target).is(".container")||$(t.currentTarget).is("a.close, .overlay"))&&s.close()}),$(document).off("keyup.cart_esc_close").on("keyup.cart_esc_close",function(t){27==t.which&&s.close()})},open:function(){var t=this;if(this.is_open=!0,this._onScreen({state:!0}),this._onView({state:!0}),flexbe_cli.is_admin?(this.$container.addClass("is-editor"),$(".container-list").addClass("editor_stop")):this.loadFromStorage(),this.renderList(),$("body").addClass("overflow"),this.$container.addClass("show"),setTimeout(function(){t.$container.addClass("fade-in"),t.$list[0].offsetHeight>flexbe_cli.resize.height&&t.$container.find(".container").css("height","auto")},50),setTimeout(function(){t.$container.removeClass("noanimate")},300),flexbe_cli.run.is_OSX&&flexbe_cli.run.is_mobile){this.lastScroll=flexbe_cli.scroll.latest;var i=this.$container.find(".container").height();$(".container-list, .modal-list, .mobile-menu, header, footer").css({display:"none"}),this.$button.css("display","none"),this.$container.css({position:"relative",height:Math.max(i,flexbe_cli.resize.height)+"px","min-height":"100vh"}),$("body, html").scrollTop(0)}},close:function(){var t=this;$(window).off("keyup.cart_esc_close"),this.is_open&&(this.is_open=!1,this.expend=!1,this.$container.hasClass("state-2")?this.$container.addClass("fade-out"):this.$container.removeClass("fade-in"),setTimeout(function(){t.$container.removeClass("show fade-in fade-out noanimate state-1 state-2"),t.$widget.find(".container, .form-container, .cart-container, .form-holder, .button").removeAttr("style"),$("body").removeClass("overflow"),$(".container-list").removeClass("editor_stop")},300),flexbe_cli.run.is_OSX&&flexbe_cli.run.is_mobile&&(this.$container.css({position:""}),$(".container-list, .modal-list, .mobile-menu, header, footer").css({display:""}),this.$button.css("display",""),$("body, html").scrollTop(this.lastScroll)))},animateForm:function(t){var i=this;void 0===t&&(t=!0);var e=this.$container.find(".container"),n=e.find(".form-container"),s=e.find(".cart-container");if(this.expend=!0,flexbe_cli.run.is_screen_tablet_s||flexbe_cli.run.is_screen_mobile)this.$container.addClass("state-1"),e.height(Math.max(n.outerHeight(),s.outerHeight())),setTimeout(function(){i.$container.addClass("state-2"),i.$container.scrollTop(0)},t?50:0);else{e.addClass("recalculate");var o=e[0].offsetHeight;e.removeClass("recalculate"),o<500&&500<flexbe_cli.resize.height&&(o=500),setTimeout(function(){i.$container.addClass("state-1")},t?50:0),setTimeout(function(){e.css({height:o+"px",minHeight:o+"px"}),i.$container.addClass("state-2"),i.$container.scrollTop(0)},t?150:0)}},add:function(i,t){var e=this;if(void 0===t&&(t=!1),(!this.is_open||t)&&i){i.count=parseInt(i.count,10)||1,i.price=parseFloat(i.price)||0;var n=!1;this.list&&this.list.length&&(this.list=this.list.map(function(t){return t.id==i.id&&(t.count+=i.count,n=!0),t})),n||this.list.push(i),flexbe_cli.stat.ecommerce.add(i.id,i.title,i.count,i.price),flexbe_cli.stat.reach_goal("add_to_cart",i),this.renderList(),1===this.list.length&&1===this.list[0].count&&setTimeout(function(){e.open()},200),this.$button.removeClass("blink"),setTimeout(function(){e.$button.addClass("blink")},50)}},remove:function(i){if(void 0===i&&(i=!1),!1!==i){var t=this.list.filter(function(t){return t.id==i})[0];flexbe_cli.stat.ecommerce.remove(t.id,t.title),this.list=this.list.filter(function(t){return t.id!=i}),this.renderList()}},updateCount:function(e,n){var s=this;void 0===e&&(e=!1),void 0===n&&(n="+"),!1!==e&&(this.list&&this.list.length&&(this.list=this.list.map(function(t){if(t.id==e){"+"==n?t.count+=1:"-"==n&&1<t.count?t.count-=1:(n=parseInt(n,10),t.count=n||1),t.count=parseInt(t.count,10)||1;var i=s.$list.find('[data-id="'+e+'"]');i.find(".price").text(s.formatPrice(t.count*t.price)),"-"!==n&&"+"!==n||i.find(".count").val(t.count),flexbe_cli.stat.ecommerce.add(t.id,t.title,t.count,t.price)}return t})),this.saveToStorage(),this.renderCount())},renderList:function(){var e=this;this.saveToStorage(),this.renderCount();var n="";this.list.length&&this.list.forEach(function(t){var i;n+='<li data-id="'+(i=t).id+'">\n                <div class="img-holder">\n                    <div class="img" '+(i.img&&'style="background-image: url('+i.img+')"')+'></div>\n                </div>\n\n                <div class="item-title">'+i.title+'</div>\n\n                <div class="item-count">\n                    <a data-action="+">\n                        <svg viewBox="0 0 10 7"><path d="M1.4 6.244L5 2.732l3.6 3.512L10 4.878 5 0 0 4.878z" fill-rule="evenodd"/></svg>\n                    </a>\n                    <input type="number" class="count" min="1" value="'+i.count+'"/>\n                    <a data-action="-">\n                        <svg viewBox="0 0 10 7"><path d="M1.4.756L5 4.268 8.6.756 10 2.122 5 7 0 2.122z" fill-rule="evenodd"/></svg>\n                    </a>\n                </div>\n\n                <div class="item-price">\n                    <span class="price">'+e.formatPrice(i.price*i.count)+'</span>\n                    <span class="curr">'+flexbe_cli.lang.currency+'</span>\n                </div>\n\n                <a data-action="remove"><svg viewBox="0 0 11 12"><path d="M2.5 12h6c.825 0 1.5-.58 1.5-1.286V3H1v7.714C1 11.42 1.675 12 2.5 12zm.667-1h4.666C8.475 11 9 10.55 9 10V3H2v7c0 .55.525 1 1.167 1zM8 1L7 0H4L3 1h5zM3 3h1v7H3V3zm2 0h1v7H5V3zm2 0h1v7H7V3zM0 1.5c0-.276.23-.5.5-.5h10c.276 0 .5.232.5.5V2H0v-.5z" fill-rule="evenodd"/></svg></a>\n            </li>'}),this.$list.html(n),this.$container.find(".cart-container").toggleClass("empty",0===this.list.length),this.form&&this.form.addItems(this.list)},renderCount:function(){var i=0,e=0;this.list.length&&this.list.forEach(function(t){t.count&&(i+=parseInt(t.count,10),t.price&&(e+=parseInt(t.count,10)*parseFloat(t.price)))}),this.$sum.text(this.formatPrice(e)),this.$button.attr("data-count",i),this.$container.find(".product-count .count").text(i)},formatPrice:function(t){return(t=(t=String(t).replace(",",".").replace(/[^0-9.]/g,"")).split("."))[0]=chunkSplit(t[0]),t[1]&&(t[1]=t[1].length<2?t[1]+="0":t[1].substr(0,2)),2<t.length&&(t=t.splice(0,2)),t.join(".")},loadFromStorage:function(){if(!flexbe_cli.is_admin&&localStorage)try{var t=JSON.parse(localStorage.getItem("f_cart"));t&&t instanceof Array&&(this.list=t)}catch(t){}},saveToStorage:function(){if(!flexbe_cli.is_admin&&localStorage)if(this.list&&this.list instanceof Array)try{localStorage.setItem("f_cart",JSON.stringify(this.list))}catch(t){}else this.list=[]}});
function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}flexbe_cli.widget.register(2,{require:["/_s/lib/anime/anime.min.js"],$list:null,onLoad:function(){var e=this;this.$list=this.$widget.find(".anchors-list"),this.list="object"==_typeof(this.$list.data("anchors"))&&this.$list.data("anchors").list||[],this.style=this.$list.data("anchors").style||1,this.show_title=this.$list.data("anchors").show_title,this.$list.removeAttr("data-anchors"),flexbe_cli.run.is_mobile||(this.drawList(),this.setActive(),flexbe_cli.is_admin&&flexbe_cli.events.off("editor_change.anchors").on("editor_change.anchors",function(t,i){i&&"update_list"==i.reason&&/^block_.*/.test(i.name)&&e.drawList()}))},check:function(){var i=$(".b_block").not('[data-b-type*="overflow"]');this.list=this.list.filter(function(t){if(t.enabled&&i.closest('[data-id="'+t.id+'"]')[0])return!0})},drawList:function(){var i=this;this.check();var e="";flexbe_cli.is_admin&&this.list.length<=1?e='<svg style="color: #adadad" width="18" height="98" viewBox="0 0 18 98" xmlns="http://www.w3.org/2000/svg">\n                <g fill="none" fill-rule="evenodd">\n                    <circle opacity=".05" cx="9" cy="5" r="5"/>\n                    <circle opacity=".2" cx="9" cy="25" r="5"/>\n                    <circle opacity=".2" cx="9" cy="73" r="5"/>\n                    <circle opacity=".05" cx="9" cy="93" r="5"/>\n                    <path d="M9 40a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm5.126 9.626h-4.5v4.5H8.34v-4.5h-4.5V48.34h4.5v-4.5h1.286v4.5h4.5v1.286z" opacity=".45"/>\n                </g>\n            </svg>':1<this.list.length&&(this.list.forEach(function(t){e+="<li"+(i.show_title&&t.title?' data-title="'+t.title+'"':"")+'><a href="#'+t.id+'"></a></li>'}),e+='<li class="helper"><a></a></li>'),this.$list.find("ul").html(e),this.$helper=this.$list.find(".helper"),this.animateList()},animateList:function(){var t=this;if(!(this.list.length<=1)){if(flexbe_cli.is_admin)this.$helper.css({opacity:1,transform:"translateY("+24*this.index+"px)"});else{var i=anime({targets:this.$list.find("li").not(this.$helper).get(),duration:200,opacity:[0,1],scale:[.4,1],easing:"easeOutBack",autoplay:!1,delay:function(t,i){return 200*i},complete:function(){anime({targets:t.$helper.get(),duration:400,translateY:24*t.index,scale:[2.5,1],opacity:[0,1],easing:"easeInExpo"})}});this.$list.addClass("hide"),setTimeout(function(){t.$list.removeClass("hide"),i.play()},1500)}this.$list.find("li").removeClass("active").eq(this.index).addClass("active")}},index:0,setActive:function(){var n=this;if(!(this.list.length<=1)){var s=function(e){n.$list.css("color",e.tween.color);var s=n.index;n.list.some(function(t,i){if(t.id==e.id)return s=i,!0}),(s=Math.max(0,Math.min(n.list.length-1,s)))!=n.index&&(!function(t){if(n.$list.find("li").removeClass("active"),n.$list.find("li").eq(t).addClass("active"),1==n.style){var i=24*t,e=0<t-n.index?12:-12;anime.remove(n.$helper[0]),anime({targets:n.$helper[0],translateY:i-e,scaleY:2.5,scaleX:.6,duration:100,easing:"easeInQuad",complete:function(){anime({targets:n.$helper[0],translateY:i,scaleY:1,scaleX:1,duration:100,easing:"easeOutQuad"})}})}}(s),n.index=s)};flexbe_cli.block.$list.find(".b_block").each(function(t,i){var e=i._core;e&&e.isFocused&&s(e)}),flexbe_cli.events.off("entity_event.anchors").on("entity_event.anchors",function(t,i){i&&i.type&&"focus"==i.type&&i.state&&i.core&&"block"===i.core.is&&s(i.core)}),this.$list.on("click","li",function(t){if(!$(t.target).is("a"))return $(t.currentTarget).find("[href]").trigger("click"),t.preventDefault(),!1})}}});