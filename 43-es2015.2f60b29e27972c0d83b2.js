(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{YH5E:function(n,o,t){"use strict";t.r(o),t.d(o,"DialogPageModule",(function(){return d}));var e=t("ofXK"),i=t("3Pt+"),l=t("TEn/"),c=t("tyNb"),b=t("fXoL"),r=t("Kxyh");const a=["dialog"],u=[{path:"",component:(()=>{class n{constructor(){this.backdrop=!0,this.pull=!0,this.verticalAlign="top",this.horizontalAlign="left",this.shape="card",this.duration=3600,this.inDuration="220",this.outDuration="180"}ngOnInit(){}close(){}over(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b.Kb({type:n,selectors:[["app-dialog"]],viewQuery:function(n,o){var t;1&n&&b.Rc(a,!0),2&n&&b.yc(t=b.fc())&&(o.dialog=t.first)},decls:68,vars:17,consts:[["slot","start"],["defaultHref","/fivethree"],["slot","end",3,"ngModel","ngModelChange"],["value","top"],["value","center"],["value","bottom"],["value","left"],["value","middle"],["value","right"],["value","card"],["value","fill"],["type","number",3,"ngModel","ngModelChange"],["color","translucent"],["slot","end"],["shape","round","fill","outline","color","primary",3,"click"],[3,"pullEnabled","inDuration","outDuration","duration","shape","horizontalAlign","verticalAlign","backdrop","fivClose","fivDurationOver"],["dialog",""],[3,"click"],["color","primary"]],template:function(n,o){if(1&n){const n=b.Xb();b.Wb(0,"ion-header"),b.Wb(1,"ion-toolbar"),b.Wb(2,"ion-buttons",0),b.Rb(3,"ion-back-button",1),b.Vb(),b.Wb(4,"ion-title"),b.Mc(5,"Dialog"),b.Vb(),b.Vb(),b.Vb(),b.Wb(6,"ion-content"),b.Wb(7,"ion-item"),b.Wb(8,"ion-label"),b.Mc(9,"Backdrop"),b.Vb(),b.Wb(10,"ion-toggle",2),b.ec("ngModelChange",(function(n){return o.backdrop=n})),b.Vb(),b.Vb(),b.Wb(11,"ion-item"),b.Wb(12,"ion-label"),b.Mc(13,"Pull Enabled"),b.Vb(),b.Wb(14,"ion-toggle",2),b.ec("ngModelChange",(function(n){return o.pull=n})),b.Vb(),b.Vb(),b.Wb(15,"ion-item"),b.Wb(16,"ion-label"),b.Mc(17,"Vertical Alignment"),b.Vb(),b.Wb(18,"ion-select",2),b.ec("ngModelChange",(function(n){return o.verticalAlign=n})),b.Wb(19,"ion-select-option",3),b.Mc(20,"top"),b.Vb(),b.Wb(21,"ion-select-option",4),b.Mc(22,"center"),b.Vb(),b.Wb(23,"ion-select-option",5),b.Mc(24,"bottom"),b.Vb(),b.Vb(),b.Vb(),b.Wb(25,"ion-item"),b.Wb(26,"ion-label"),b.Mc(27,"Horizontal Alignment"),b.Vb(),b.Wb(28,"ion-select",2),b.ec("ngModelChange",(function(n){return o.horizontalAlign=n})),b.Wb(29,"ion-select-option",6),b.Mc(30,"left"),b.Vb(),b.Wb(31,"ion-select-option",7),b.Mc(32,"middle"),b.Vb(),b.Wb(33,"ion-select-option",8),b.Mc(34,"right"),b.Vb(),b.Vb(),b.Vb(),b.Wb(35,"ion-item"),b.Wb(36,"ion-label"),b.Mc(37,"Shape"),b.Vb(),b.Wb(38,"ion-select",2),b.ec("ngModelChange",(function(n){return o.shape=n})),b.Wb(39,"ion-select-option",9),b.Mc(40,"card"),b.Vb(),b.Wb(41,"ion-select-option",10),b.Mc(42,"fill"),b.Vb(),b.Vb(),b.Vb(),b.Wb(43,"ion-item"),b.Wb(44,"ion-label"),b.Mc(45,"Duration"),b.Vb(),b.Wb(46,"ion-input",11),b.ec("ngModelChange",(function(n){return o.duration=n})),b.Vb(),b.Vb(),b.Wb(47,"ion-toolbar",12),b.Wb(48,"ion-buttons",13),b.Wb(49,"ion-button",14),b.ec("click",(function(){return b.Cc(n),b.zc(52).open()})),b.Mc(50," Show Example Dialog "),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(51,"fiv-dialog",15,16),b.ec("fivClose",(function(){return o.close()}))("fivDurationOver",(function(){return b.Cc(n),b.zc(52).close()})),b.Wb(53,"ion-card-header"),b.Wb(54,"ion-card-subtitle"),b.Mc(55,"Awesome Subtitle"),b.Vb(),b.Wb(56,"ion-card-title"),b.Mc(57),b.jc(58,"uppercase"),b.Vb(),b.Vb(),b.Wb(59,"ion-card-content"),b.Wb(60,"p"),b.Mc(61,"The content for this dialog"),b.Vb(),b.Vb(),b.Wb(62,"ion-toolbar",12),b.Wb(63,"ion-buttons",13),b.Wb(64,"ion-button",17),b.ec("click",(function(){return b.Cc(n),b.zc(52).close()})),b.Mc(65," Cancel "),b.Vb(),b.Wb(66,"ion-button",18),b.Mc(67," Do Action "),b.Vb(),b.Vb(),b.Vb(),b.Vb()}2&n&&(b.Cb(10),b.oc("ngModel",o.backdrop),b.Cb(4),b.oc("ngModel",o.pull),b.Cb(4),b.oc("ngModel",o.verticalAlign),b.Cb(10),b.oc("ngModel",o.horizontalAlign),b.Cb(10),b.oc("ngModel",o.shape),b.Cb(8),b.oc("ngModel",o.duration),b.Cb(5),b.oc("pullEnabled",o.pull)("inDuration",o.inDuration)("outDuration",o.outDuration)("duration",o.duration)("shape",o.shape)("horizontalAlign",o.horizontalAlign)("verticalAlign",o.verticalAlign)("backdrop",o.backdrop),b.Cb(6),b.Nc(b.kc(58,15,"Awesome Title")))},directives:[l.z,l.mb,l.l,l.h,l.i,l.kb,l.u,l.D,l.J,l.lb,l.c,i.k,i.n,l.Z,l.xb,l.ab,l.C,l.tb,l.k,r.l,l.o,l.p,l.q,l.n],pipes:[e.w],styles:["ion-item[_ngcontent-%COMP%]{--background:var(--ion-item-background)}"]}),n})()}];let s=(()=>{class n{}return n.\u0275mod=b.Ob({type:n}),n.\u0275inj=b.Nb({factory:function(o){return new(o||n)},imports:[[c.j.forChild(u)],c.j]}),n})(),d=(()=>{class n{}return n.\u0275mod=b.Ob({type:n}),n.\u0275inj=b.Nb({factory:function(o){return new(o||n)},imports:[[e.c,i.g,l.nb,s,r.m]]}),n})()}}]);