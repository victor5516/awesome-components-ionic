function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,i,t){return i&&_defineProperties(n.prototype,i),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"8VuJ":function(n,i,t){"use strict";t.r(i),t.d(i,"SlideCustomPaginationPageModule",(function(){return w}));var e=t("ofXK"),o=t("3Pt+"),s=t("tyNb"),r=t("TEn/"),a=t("fXoL"),c=["sliderOne"],l=["sliderTwo"],b=["sliderThree"],g=function(n){return{background:n}};function p(n,i){if(1&n&&(a.Wb(0,"ion-slide",8),a.Wb(1,"h2"),a.Mc(2),a.Vb(),a.Vb()),2&n){var t=i.$implicit;a.oc("ngStyle",a.tc(2,g,"url("+t.imageUrl+")")),a.Cb(2),a.Nc(t.title)}}function f(n,i){if(1&n&&(a.Wb(0,"ion-slide",8),a.Wb(1,"h2"),a.Mc(2),a.Vb(),a.Vb()),2&n){var t=i.$implicit;a.oc("ngStyle",a.tc(2,g,"url("+t.imageUrl+")")),a.Cb(2),a.Nc(t.title)}}function u(n,i){if(1&n&&(a.Wb(0,"ion-slide",8),a.Wb(1,"h2"),a.Mc(2),a.Vb(),a.Vb()),2&n){var t=i.$implicit;a.oc("ngStyle",a.tc(2,g,"url("+t.imageUrl+")")),a.Cb(2),a.Nc(t.title)}}var d,h,m=[{path:"",component:(d=function(){function n(){_classCallCheck(this,n),this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0}]}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=a.Kb({type:d,selectors:[["app-slide-custom-pagination"]],viewQuery:function(n,i){var t;1&n&&(a.Hc(c,!0),a.Hc(l,!0),a.Hc(b,!0)),2&n&&(a.yc(t=a.fc())&&(i.sliderOne=t.first),a.yc(t=a.fc())&&(i.sliderTwo=t.first),a.yc(t=a.fc())&&(i.sliderThree=t.first))},decls:22,vars:3,consts:[["slot","start"],["defaultHref","/"],[1,"ion-text-center"],["pager",""],["sliderOne",""],[3,"ngStyle",4,"ngFor","ngForOf"],["sliderTwo",""],["sliderThree",""],[3,"ngStyle"]],template:function(n,i){1&n&&(a.Wb(0,"ion-header"),a.Wb(1,"ion-toolbar"),a.Wb(2,"ion-buttons",0),a.Rb(3,"ion-back-button",1),a.Vb(),a.Wb(4,"ion-title"),a.Mc(5,"Custom Pagination"),a.Vb(),a.Vb(),a.Vb(),a.Wb(6,"ion-content",2),a.Wb(7,"h3"),a.Mc(8,"Pagination numbers"),a.Vb(),a.Wb(9,"ion-slides",3,4),a.Kc(11,p,3,4,"ion-slide",5),a.Vb(),a.Wb(12,"h3"),a.Mc(13,"Pagination numbers 2"),a.Vb(),a.Wb(14,"ion-slides",3,6),a.Kc(16,f,3,4,"ion-slide",5),a.Vb(),a.Wb(17,"h3"),a.Mc(18,"Pagination icons"),a.Vb(),a.Wb(19,"ion-slides",3,7),a.Kc(21,u,3,4,"ion-slide",5),a.Vb(),a.Vb()),2&n&&(a.Cb(11),a.oc("ngForOf",i.slides),a.Cb(5),a.oc("ngForOf",i.slides),a.Cb(5),a.oc("ngForOf",i.slides))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,r.cb,e.n,r.bb,e.p],styles:["h2[_ngcontent-%COMP%]{color:#fff}.swiper-container[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{height:40vh;width:auto}.swiper-slide[_ngcontent-%COMP%]{background-size:cover!important;background-position:50%!important}.swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff}.custom-pagination.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;text-align:center;line-height:20px;font-size:12px;color:#000;opacity:1;background:rgba(0,0,0,.2)}.custom-pagination.swiper-pagination-bullet-active[_ngcontent-%COMP%]{color:#fff;background:#f52c2c;transition:transform .3s;transform:scale(1.5)}.custom-pagination-2.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;text-align:center;font-size:12px;opacity:1;line-height:18px;color:#fff;background:rgba(0,0,0,.2);border:1px solid #fff}.custom-pagination-2.swiper-pagination-bullet-active[_ngcontent-%COMP%]{color:#fff;border-color:#a0f;background:transparent}.custom-pagination-3.swiper-pagination-bullet[_ngcontent-%COMP%]{width:20px;height:20px;opacity:1;border-radius:0;background-size:cover;background-position:50%}.custom-pagination-3.swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:25px;height:25px;transition:transform .3s;transform:scale(1.5)}"]}),d)}],w=((h=function n(){_classCallCheck(this,n)}).\u0275mod=a.Ob({type:h}),h.\u0275inj=a.Nb({factory:function(n){return new(n||h)},imports:[[e.c,o.g,r.nb,s.j.forChild(m)]]}),h)}}]);