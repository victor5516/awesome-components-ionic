(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{sVEf:function(t,e,n){"use strict";n.r(e),n.d(e,"DrawerPageModule",(function(){return f}));var o=n("TEn/"),i=n("ofXK"),r=n("mrSG"),s=n("fXoL");const a=["*"];let l=(()=>{class t{constructor(t,e,n){this.gestureCtrl=t,this.element=e,this.renderer=n,this.state="bottom",this.title="Hello World",this.handleHeight=138}ngOnInit(){}ngAfterViewInit(){return Object(r.a)(this,void 0,void 0,(function*(){const t=window.innerHeight,e=t-this.handleHeight;this.renderer.setStyle(this.element.nativeElement,"top",t-this.handleHeight+"px");const n={el:document.querySelector("#header"),direction:"y",gestureName:"slide-drawer-swipe",onStart:t=>{this.renderer.setStyle(this.element.nativeElement,"transition","none")},onMove:t=>{t.deltaY<0&&"bottom"===this.state?this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(${t.deltaY}px)`):"top"===this.state&&this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(calc(${t.deltaY}px - ${e}px))`)},onEnd:n=>{this.renderer.setStyle(this.element.nativeElement,"transition","0.3s ease-out"),n.deltaY<-t/20&&"bottom"===this.state||n.deltaY<t/20&&"top"===this.state?(this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(-${e}px)`),this.state="top"):(this.renderer.setStyle(this.element.nativeElement,"transform","translateY(0px)"),this.state="bottom")}};(yield this.gestureCtrl.create(n)).enable()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(o.e),s.Qb(s.l),s.Qb(s.F))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-slide-drawer"]],inputs:{title:"title",handleHeight:"handleHeight"},ngContentSelectors:a,decls:7,vars:1,consts:[["mode","ios","id","header"],["mode","md"],["src","assets/icon/arrow.svg"]],template:function(t,e){1&t&&(s.nc(),s.Wb(0,"ion-header",0),s.Wb(1,"ion-toolbar",1),s.Rb(2,"ion-icon",2),s.Wb(3,"ion-title"),s.Mc(4),s.Vb(),s.Vb(),s.Vb(),s.Wb(5,"ion-content"),s.mc(6),s.Vb()),2&t&&(s.Cb(4),s.Nc(e.title))},directives:[o.z,o.mb,o.A,o.kb,o.u],styles:["[_nghost-%COMP%]{width:100%;height:100%;position:absolute;top:calc(100vh - 144px);z-index:9999}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{height:88px;border-top-right-radius:8px;border-top-left-radius:8px}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:60px;height:20px;display:flex;margin:0 auto}"]}),t})(),c=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[o.nb,i.c]]}),t})();var b=n("3Pt+"),d=n("tyNb");function h(t,e){1&t&&(s.Wb(0,"ion-item"),s.Rb(1,"ion-icon",4),s.Wb(2,"ion-label"),s.Mc(3,"Item"),s.Vb(),s.Vb())}const m=function(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Kb({type:t,selectors:[["app-drawer"]],decls:13,vars:2,consts:[["slot","start"],["defaultHref","/gestures"],["lines","none"],[4,"ngFor","ngForOf"],["slot","start","color","medium","name","book"]],template:function(t,e){1&t&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button",1),s.Vb(),s.Wb(4,"ion-title"),s.Mc(5,"Slide Drawer"),s.Vb(),s.Vb(),s.Vb(),s.Rb(6,"ion-content"),s.Wb(7,"app-slide-drawer"),s.Wb(8,"ion-list",2),s.Wb(9,"ion-list-header"),s.Wb(10,"ion-label"),s.Mc(11,"Resources"),s.Vb(),s.Vb(),s.Kc(12,h,4,0,"ion-item",3),s.Vb(),s.Vb()),2&t&&(s.Cb(12),s.oc("ngForOf",s.sc(1,m)))},directives:[o.z,o.mb,o.l,o.h,o.i,o.kb,o.u,l,o.K,o.L,o.J,i.n,o.D,o.A],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[d.j.forChild(u)],d.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[i.c,b.g,o.nb,p,c]]}),t})()}}]);