(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{te7A:function(i,t,n){"use strict";n.r(t),n.d(t,"DeleteItemsPageModule",(function(){return m}));var e=n("ofXK"),o=n("3Pt+"),c=n("tyNb"),l=n("TEn/"),s=n("fXoL");function b(i,t){if(1&i){const i=s.Xb();s.Wb(0,"ion-item-sliding"),s.Wb(1,"ion-item"),s.Wb(2,"ion-label"),s.Mc(3),s.Vb(),s.Vb(),s.Wb(4,"ion-item-options",6),s.ec("ionSwipe",(function(){s.Cc(i);const n=t.index,e=s.ic();return e.deleteItem(e.items,n)})),s.Wb(5,"ion-item-option",7),s.ec("click",(function(){s.Cc(i);const n=t.index,e=s.ic();return e.deleteItem(e.items,n)})),s.Rb(6,"ion-icon",8),s.Vb(),s.Vb(),s.Vb()}if(2&i){const i=t.$implicit;s.Cb(3),s.Oc(" ",i.title," ")}}function r(i,t){if(1&i){const i=s.Xb();s.Wb(0,"ion-item-sliding",null,9),s.Wb(2,"ion-item",2,10),s.Wb(4,"ion-button",11),s.ec("click",(function(t){s.Cc(i);const n=s.zc(1),e=s.zc(3);return s.ic().openOption(n,e,t)})),s.Rb(5,"ion-icon",12),s.Vb(),s.Wb(6,"ion-label"),s.Mc(7),s.Vb(),s.Vb(),s.Wb(8,"ion-item-options",13),s.ec("ionSwipe",(function(){s.Cc(i);const n=t.index,e=s.ic();return e.deleteItem(e.things,n)})),s.Wb(9,"ion-item-option",14),s.ec("click",(function(){s.Cc(i);const n=t.index,e=s.ic();return e.deleteItem(e.things,n)})),s.Rb(10,"ion-icon",8),s.Vb(),s.Vb(),s.Vb()}if(2&i){const i=t.$implicit;s.Cb(7),s.Oc(" ",i.title," ")}}const d=[{path:"",component:(()=>{class i{constructor(){this.activeItemSliding=null,this.items=[{title:"Item 1"},{title:"Item 2"},{title:"Item 3"}],this.things=[{title:"Thing 1"},{title:"Thing 2"},{title:"Thing 3"}]}ngOnInit(){}addThing(){console.log("add thing"),this.things.push({title:"Thing "+(this.things.length+1)})}addItem(){console.log("add item"),this.items.push({title:"Item "+(this.items.length+1)})}deleteItem(i,t){i.splice(t,1)}openOption(i,t,n){console.log("opening item slide.."),n.stopPropagation(),this.activeItemSliding&&this.closeOption(),this.activeItemSliding=i,i.open("end")}closeOption(){console.log("closing item slide.."),this.activeItemSliding&&(this.activeItemSliding.close(),this.activeItemSliding=null)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Kb({type:i,selectors:[["app-delete-items"]],decls:22,vars:2,consts:[["slot","start"],["defaultHref","/"],["lines","none"],["color","primary","slot","end","fill","clear",3,"click"],["name","add-circle","slot","icon-only"],[4,"ngFor","ngForOf"],[3,"ionSwipe"],["color","danger",3,"click"],["name","trash"],["slidingItem",""],["item",""],["color","danger","slot","start","fill","clear",3,"click"],["name","remove-circle","slot","icon-only"],["slot","start",3,"ionSwipe"],["color","danger","expandable","",3,"click"]],template:function(i,t){1&i&&(s.Wb(0,"ion-header"),s.Wb(1,"ion-toolbar"),s.Wb(2,"ion-buttons",0),s.Rb(3,"ion-back-button",1),s.Vb(),s.Wb(4,"ion-title"),s.Mc(5,"Delete Items"),s.Vb(),s.Vb(),s.Vb(),s.Wb(6,"ion-content"),s.Wb(7,"ion-list"),s.Wb(8,"ion-list-header"),s.Wb(9,"ion-label"),s.Mc(10,"Swipe left to delete"),s.Vb(),s.Wb(11,"ion-item",2),s.Wb(12,"ion-button",3),s.ec("click",(function(){return t.addItem()})),s.Rb(13,"ion-icon",4),s.Vb(),s.Vb(),s.Vb(),s.Kc(14,b,7,1,"ion-item-sliding",5),s.Wb(15,"ion-list-header"),s.Wb(16,"ion-label"),s.Mc(17,"Tap or swipe to delete"),s.Vb(),s.Wb(18,"ion-item",2),s.Wb(19,"ion-button",3),s.ec("click",(function(){return t.addThing()})),s.Rb(20,"ion-icon",4),s.Vb(),s.Vb(),s.Vb(),s.Kc(21,r,11,1,"ion-item-sliding",5),s.Vb(),s.Vb()),2&i&&(s.Cb(14),s.oc("ngForOf",t.items),s.Cb(7),s.oc("ngForOf",t.things))},directives:[l.z,l.mb,l.l,l.h,l.i,l.kb,l.u,l.K,l.L,l.J,l.D,l.k,l.A,e.n,l.I,l.H,l.G],styles:[""]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=s.Ob({type:i}),i.\u0275inj=s.Nb({factory:function(t){return new(t||i)},imports:[[e.c,o.g,l.nb,c.j.forChild(d)]]}),i})()}}]);