(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{EO9G:function(t,n,i){"use strict";i.r(n),i.d(n,"Grid1PageModule",(function(){return m}));var o=i("ofXK"),e=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("mrSG"),b=i("4Byd"),d=i("fXoL");const a=["slides"];function l(t,n){if(1&t&&(d.Wb(0,"ion-badge",10),d.Mc(1),d.Vb()),2&t){const t=d.ic().$implicit;d.Cb(1),d.Oc("",t.discount,"%")}}function g(t,n){if(1&t&&(d.Wb(0,"ion-col",11),d.Wb(1,"ion-text",12),d.Wb(2,"span",13),d.Wb(3,"span",14),d.Mc(4),d.Vb(),d.Wb(5,"strong"),d.Mc(6),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){const t=d.ic().$implicit,n=d.ic();d.Cb(4),d.Pc("",t.currency,"",t.cost_price,""),d.Cb(2),d.Pc("",t.currency,"",n.gridServ.calculate(t.cost_price,t.discount),"")}}function f(t,n){if(1&t&&(d.Wb(0,"ion-col",11),d.Wb(1,"ion-text",12),d.Wb(2,"span",13),d.Wb(3,"strong"),d.Mc(4),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){const t=d.ic().$implicit;d.Cb(4),d.Pc("",t.currency,"",t.cost_price,"")}}function u(t,n){if(1&t&&(d.Wb(0,"ion-col",3),d.Wb(1,"ion-card",4),d.Kc(2,l,2,1,"ion-badge",5),d.Rb(3,"img",6),d.Wb(4,"ion-card-content"),d.Wb(5,"ion-card-title"),d.Wb(6,"ion-row"),d.Kc(7,g,7,4,"ion-col",7),d.Kc(8,f,5,2,"ion-col",7),d.Vb(),d.Wb(9,"ion-row"),d.Wb(10,"ion-col",8),d.Wb(11,"h6",9),d.Mc(12),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){const t=n.$implicit;d.Cb(2),d.oc("ngIf",t.offer),d.Cb(1),d.oc("src",t.image[0],d.Ec)("alt",t.name),d.Cb(4),d.oc("ngIf",t.offer),d.Cb(1),d.oc("ngIf",!t.offer),d.Cb(4),d.Oc("",t.bought,"+ bought this")}}const p=[{path:"",component:(()=>{class t{constructor(t){this.gridServ=t,this.segment="",this.index=0,this.data=[],this.products=this.gridServ.products_1,this.data=this.gridServ.tabs}ngOnInit(){}segmentChange(t){console.log("event",t),this.segment=t.detail.value}updateSlide(t){console.log("index",t,typeof t),this.slides.slideTo(t,300)}change(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.slides.getActiveIndex().then(t=>this.index=t),this.segment=this.data[this.index].title,this.drag()}))}drag(){let t=0;for(const n in this.data)parseInt(n)<this.index&&(t=t+document.getElementById("seg_"+n).offsetWidth+24);document.getElementById("dag").scrollLeft=t}}return t.\u0275fac=function(n){return new(n||t)(d.Qb(b.a))},t.\u0275cmp=d.Kb({type:t,selectors:[["app-grid1"]],viewQuery:function(t,n){var i;1&t&&d.Hc(a,!0),2&t&&d.yc(i=d.fc())&&(n.slides=i.first)},decls:10,vars:1,consts:[["slot","start"],["defaultHref","/grids"],["size","6",4,"ngFor","ngForOf"],["size","6"],["no-margin","",1,"card"],["class","badge",4,"ngIf"],[3,"src","alt"],["no-padding","",4,"ngIf"],["text-left","","no-padding",""],["text-left","",1,"subtitle"],[1,"badge"],["no-padding",""],["text-left",""],[1,"price"],[1,"inline"]],template:function(t,n){1&t&&(d.Wb(0,"ion-header"),d.Wb(1,"ion-toolbar"),d.Wb(2,"ion-buttons",0),d.Rb(3,"ion-back-button",1),d.Vb(),d.Wb(4,"ion-title"),d.Mc(5,"Shop Grid"),d.Vb(),d.Vb(),d.Vb(),d.Wb(6,"ion-content"),d.Wb(7,"ion-grid"),d.Wb(8,"ion-row"),d.Kc(9,u,13,6,"ion-col",2),d.Vb(),d.Vb(),d.Vb()),2&t&&(d.Cb(9),d.oc("ngForOf",n.products))},directives:[c.z,c.mb,c.l,c.h,c.i,c.kb,c.u,c.y,c.V,o.n,c.t,c.m,o.o,c.n,c.q,c.j,c.hb],styles:["ion-content[_ngcontent-%COMP%]{--background:#f4f5f8}.card[_ngcontent-%COMP%]{box-shadow:unset;border-radius:9px;background-color:#fff!important}.price[_ngcontent-%COMP%]{font-size:18px;float:left;margin:3px}.inline[_ngcontent-%COMP%]{font-size:15px;-webkit-margin-end:5px;margin-inline-end:5px;text-decoration:line-through}.subtitle[_ngcontent-%COMP%]{font-size:12px;color:#787878}.badge[_ngcontent-%COMP%]{position:absolute;top:10%;left:0;background-color:rgba(12,12,12,.75);border-radius:0}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(p)],r.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(n){return new(n||t)},imports:[[o.c,e.g,c.nb,h]]}),t})()}}]);