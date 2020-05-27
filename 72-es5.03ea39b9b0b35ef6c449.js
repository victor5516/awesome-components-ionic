function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"+C0f":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogsPageModule",(function(){return W}));var i,o=n("ofXK"),c=n("3Pt+"),a=n("tyNb"),r=n("TEn/"),l=n("mrSG"),s=n("lJxs"),g=n("fXoL"),b=n("tk/3"),u=((i=function(){function t(e){_classCallCheck(this,t),this.http=e,this.url="https://hackaday.com/wp-json",this.apiKey=""}return _createClass(t,[{key:"getBlogs",value:function(){return this.http.get("".concat(this.url,"/wp/v2/posts")).pipe(Object(s.a)((function(t){return t})))}},{key:"getBlogDetail",value:function(t){return this.http.get("".concat(this.url,"/wp/v2/posts/").concat(t))}},{key:"getMedia",value:function(){return this.http.get("".concat(this.url,"/wp/v2/media"))}},{key:"getImage",value:function(t){return console.log("id",t),this.http.get("".concat(this.url,"/wp/v2/media/").concat(t))}},{key:"getTags",value:function(){return this.http.get("".concat(this.url,"/wp/v2/tags"))}},{key:"getUser",value:function(t){return this.http.get("".concat(this.url,"/wp/v2/users/").concat(t))}}]),t}()).\u0275fac=function(t){return new(t||i)(g.ac(b.a))},i.\u0275prov=g.Mb({token:i,factory:i.\u0275fac,providedIn:"root"}),i);function d(t,e){if(1&t&&g.Rb(0,"ion-img",12),2&t){var n=g.ic();g.oc("src",n.image_url)}}function f(t,e){if(1&t&&(g.Wb(0,"ion-grid"),g.Wb(1,"ion-row"),g.Wb(2,"ion-col",13),g.Mc(3),g.Vb(),g.Vb(),g.Vb()),2&t){var n=g.ic();g.Cb(3),g.Oc(" ",n.blogDetail.title.rendered," ")}}function p(t,e){if(1&t&&(g.Wb(0,"ion-row",14),g.Wb(1,"ion-col",15),g.Wb(2,"ion-text"),g.Wb(3,"h1",16),g.Mc(4),g.Vb(),g.Wb(5,"p",17),g.Mc(6),g.jc(7,"date"),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&t){var n=g.ic();g.Cb(4),g.Nc(n.blogDetail.authorData.name),g.Cb(2),g.Nc(g.lc(7,2,n.blogDetail.date,"dd/MM/yyyy"))}}function h(t,e){if(1&t&&(g.Wb(0,"ion-chip",0),g.Mc(1),g.Vb()),2&t){var n=e.$implicit;g.Cb(1),g.Nc(n.name)}}function v(t,e){if(1&t&&(g.Wb(0,"ion-grid"),g.Wb(1,"ion-row"),g.Rb(2,"ion-col",18),g.Vb(),g.Vb()),2&t){var n=g.ic();g.Cb(2),g.oc("innerHtml",n.blogDetail.content.rendered,g.Dc)}}var m,C=((m=function(){function t(e,n,i){_classCallCheck(this,t),this.activatedRoute=e,this.wp_service=n,this.modaCtrl=i,this.blogDetail=null,this.image_url=null}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.wp_service.getBlogDetail(this.id).subscribe((function(e){t.blogDetail=e,t.getImage(t.blogDetail),t.getTags(),t.getAuthor()}))}},{key:"getImage",value:function(t){var e=this;this.wp_service.getImage(t.featured_media).subscribe((function(t){e.blogDetail.imageData=t,e.image_url=e.blogDetail.imageData.source_url}))}},{key:"getTags",value:function(){var t=this;this.wp_service.getTags().subscribe((function(e){t.blogDetail.tagsData=e.filter((function(e){return t.blogDetail.tags.includes(e.id)})),console.log(t.blogDetail)}))}},{key:"getAuthor",value:function(){var t=this;this.wp_service.getUser(this.blogDetail.author).subscribe((function(e){console.log(e),t.blogDetail.authorData=e}))}},{key:"dismiss",value:function(){this.modaCtrl.dismiss()}}]),t}()).\u0275fac=function(t){return new(t||m)(g.Qb(a.a),g.Qb(u),g.Qb(r.rb))},m.\u0275cmp=g.Kb({type:m,selectors:[["app-blogpage"]],inputs:{id:"id"},decls:18,vars:5,consts:[["color","primary"],["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only"],["color","primary",1,"ion-text-center"],[1,"image-wrapper"],[3,"src",4,"ngIf"],[4,"ngIf"],["class","author",4,"ngIf"],[1,"tags"],[1,"tags-inner"],["color","primary",4,"ngFor","ngForOf"],[3,"src"],[1,"title"],[1,"author"],[1,"ion-text-center"],[1,"ion-no-margin"],[1,"blog-date","ion-no-margin"],[1,"content",3,"innerHtml"]],template:function(t,e){1&t&&(g.Wb(0,"ion-header"),g.Wb(1,"ion-toolbar",0),g.Wb(2,"ion-title"),g.Mc(3,"Wordpress Blog Details"),g.Vb(),g.Wb(4,"ion-buttons",1),g.Wb(5,"ion-button",2),g.ec("click",(function(){return e.dismiss()})),g.Rb(6,"ion-icon",3),g.Vb(),g.Vb(),g.Vb(),g.Wb(7,"ion-toolbar",4),g.Mc(8," Single WP post details fetched "),g.Vb(),g.Vb(),g.Wb(9,"ion-content"),g.Wb(10,"div",5),g.Kc(11,d,1,1,"ion-img",6),g.Vb(),g.Kc(12,f,4,1,"ion-grid",7),g.Kc(13,p,8,5,"ion-row",8),g.Wb(14,"div",9),g.Wb(15,"div",10),g.Kc(16,h,2,1,"ion-chip",11),g.Vb(),g.Vb(),g.Kc(17,v,3,1,"ion-grid",7),g.Vb()),2&t&&(g.Cb(11),g.oc("ngIf",e.image_url),g.Cb(1),g.oc("ngIf",e.blogDetail&&e.blogDetail.title),g.Cb(1),g.oc("ngIf",e.blogDetail&&e.blogDetail.authorData),g.Cb(3),g.oc("ngForOf",e.blogDetail&&e.blogDetail.tagsData),g.Cb(1),g.oc("ngIf",e.blogDetail&&e.blogDetail.content))},directives:[r.z,r.mb,r.kb,r.l,r.k,r.A,r.u,o.o,o.n,r.B,r.y,r.V,r.t,r.hb,r.s],pipes:[o.f],styles:[".title[_ngcontent-%COMP%]{font-size:32px;line-height:32px;text-align:center}.content[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-family:Muli}.content[_ngcontent-%COMP%]{padding:10px;text-align:justify}.image-wrapper[_ngcontent-%COMP%]{min-height:100px}.tags-inner[_ngcontent-%COMP%]{display:flex;justify-content:center}.blog-date[_ngcontent-%COMP%]{font-size:14px;color:grey}"]}),m),y=function(t){return{"background-image":t}};function _(t,e){if(1&t){var n=g.Xb();g.Wb(0,"div",5),g.ec("click",(function(){g.Cc(n);var t=e.$implicit;return g.ic().openBlog(t.id)})),g.Rb(1,"div",6),g.Wb(2,"div",7),g.Wb(3,"div",8),g.Wb(4,"div",9),g.Mc(5),g.Vb(),g.Wb(6,"div",10),g.Wb(7,"div",11),g.Mc(8),g.jc(9,"date"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb()}if(2&t){var i=e.$implicit;g.Cb(1),g.oc("ngStyle",g.tc(6,y,"url("+i.jetpack_featured_media_url+")")),g.Cb(4),g.Nc(i.title.rendered),g.Cb(3),g.Nc(g.lc(9,3,i.date,"dd/MM/yyyy"))}}var M,k,x,w=((k=function(){function t(e,n){_classCallCheck(this,t),this.wp_service=e,this.modalCtrl=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.getBlogData()}},{key:"getBlogData",value:function(){var t=this;this.wp_service.getBlogs().subscribe((function(e){t.blogPosts=e,t.getImages()}))}},{key:"getImages",value:function(){var t=this;this.wp_service.getMedia().subscribe((function(e){t.blogPosts.forEach((function(t){var n=e.filter((function(e){return e.id===t.featured_media}));t.imageData=n[0]})),console.log(t.blogPosts)}))}},{key:"openBlog",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:C,componentProps:{id:t}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}}]),t}()).\u0275fac=function(t){return new(t||k)(g.Qb(u),g.Qb(r.rb))},k.\u0275cmp=g.Kb({type:k,selectors:[["app-blogs"]],decls:10,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","/samples"],["color","primary",1,"ion-text-center"],["class","video-list ion-no-padding","mode","md",3,"click",4,"ngFor","ngForOf"],["mode","md",1,"video-list","ion-no-padding",3,"click"],[1,"imagediv",3,"ngStyle"],[1,"details"],[1,"title-block"],[1,"title"],[1,"extra"],[1,"views"]],template:function(t,e){1&t&&(g.Wb(0,"ion-header"),g.Wb(1,"ion-toolbar",0),g.Wb(2,"ion-buttons",1),g.Rb(3,"ion-back-button",2),g.Vb(),g.Wb(4,"ion-title"),g.Mc(5,"Wordpress Blogs"),g.Vb(),g.Vb(),g.Wb(6,"ion-toolbar",3),g.Mc(7," Wordpress posts fetched as blogs "),g.Vb(),g.Vb(),g.Wb(8,"ion-content"),g.Kc(9,_,10,8,"div",4),g.Vb()),2&t&&(g.Cb(9),g.oc("ngForOf",e.blogPosts))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,o.n,o.p],pipes:[o.f],styles:[".video-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:10px 10px 0}.video-list[_ngcontent-%COMP%]   .imagediv[_ngcontent-%COMP%]{position:relative;height:100px;background-repeat:no-repeat;width:100%;display:flex;flex:5;background-position:50%;background-size:cover;border:1px solid #ccc}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-bottom:10px;flex:6;justify-content:flex-start;margin-left:10px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;padding:10px;width:75px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-family:sans-serif}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;margin-bottom:5px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:14px;color:grey;align-items:flex-start}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:3px;width:3px;background:grey;margin:0 6px}"]}),k),O=((M=function t(){_classCallCheck(this,t)}).\u0275mod=g.Ob({type:M}),M.\u0275inj=g.Nb({factory:function(t){return new(t||M)},imports:[[o.c,c.g,r.nb]]}),M),P=[{path:"",component:w}],W=((x=function t(){_classCallCheck(this,t)}).\u0275mod=g.Ob({type:x}),x.\u0275inj=g.Nb({factory:function(t){return new(t||x)},imports:[[o.c,c.g,r.nb,a.j.forChild(P),O]]}),x)}}]);