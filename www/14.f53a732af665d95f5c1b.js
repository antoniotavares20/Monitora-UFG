(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{JLuJ:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){return function(){}}(),e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("Ip0R"),c=u("mrSG"),b=u("Wgwc"),s=u("Ns97"),h=u("zDHo"),d=function(){function l(l,n){this.modalController=l,this.service=n,this.notificacoesPendentes=[]}return l.prototype.ngOnInit=function(){var l=this;this.usuario=this.service.usuarioLogado,this.notificacoesPendentes=this.service.getNotificacoesEmAguardoDoUsuario(),this.service.emitterNotificacoesAbertas.subscribe(function(n){l.notificacoesPendentes=n,console.log("Values",n)})},l.prototype.calculaTempoEmAberto=function(l){var n=this.notificacoesPendentes[l],u=b().diff(b(n.dataCriacao),"minute");return u>=60||u<=-60?(u/60).toFixed(0)+" horas atr\xe1s":u+" minutos atr\xe1s"},l.prototype.presentModal=function(){return c.b(this,void 0,void 0,function(){return c.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:s.a})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},l}(),f=o.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.text-hours[_ngcontent-%COMP%]{color:#737373}"]],data:{}});function p(l){return o.Cb(0,[(l()(),o.ob(0,0,null,null,6,"ion-item",[],null,null,null,i.S,i.r)),o.nb(1,49152,null,0,r.F,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,4,"ion-label",[],null,null,null,i.T,i.s)),o.nb(3,49152,null,0,r.L,[o.h,o.k],null,null),(l()(),o.Bb(4,0,[" "," - Sala "," "])),(l()(),o.ob(5,0,null,0,1,"p",[["class","text-hours"]],null,null,null,null,null)),(l()(),o.Bb(6,null,[" "," "]))],null,function(l,n){var u=n.component;l(n,4,0,n.context.$implicit.centroAula.descricao,n.context.$implicit.sala),l(n,6,0,u.calculaTempoEmAberto(n.context.index))})}function m(l){return o.Cb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.O,i.n)),o.nb(1,49152,null,0,r.z,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,i.bb,i.A)),o.nb(3,49152,null,0,r.zb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.ob(4,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,i.ab,i.z)),o.nb(5,49152,null,0,r.xb,[o.h,o.k],null,null),(l()(),o.Bb(-1,0,[" Monitora UFG "])),(l()(),o.ob(7,0,null,null,34,"ion-content",[],null,null,null,i.L,i.k)),o.nb(8,49152,null,0,r.s,[o.h,o.k],null,null),(l()(),o.ob(9,0,null,0,13,"ion-card",[["class","welcome-card"]],null,null,null,i.I,i.d)),o.nb(10,49152,null,0,r.k,[o.h,o.k],null,null),(l()(),o.ob(11,0,null,0,1,"ion-img",[["src","/assets/fundo.jpg"]],null,null,null,i.Q,i.p)),o.nb(12,49152,null,0,r.B,[o.h,o.k],{src:[0,"src"]},null),(l()(),o.ob(13,0,null,0,9,"ion-card-header",[],null,null,null,i.F,i.f)),o.nb(14,49152,null,0,r.m,[o.h,o.k],null,null),(l()(),o.ob(15,0,null,0,4,"ion-card-title",[],null,null,null,i.H,i.h)),o.nb(16,49152,null,0,r.o,[o.h,o.k],null,null),(l()(),o.Bb(-1,0,["Eu j\xe1 acumulei "])),(l()(),o.ob(18,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),o.Bb(19,null,[""," pontos"])),(l()(),o.ob(20,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.g)),o.nb(21,49152,null,0,r.n,[o.h,o.k],null,null),(l()(),o.Bb(-1,0,[" Eu ajudei a UFG economizar R$ 100 em gastos \ud83d\ude00\ud83d\udc4f "])),(l()(),o.ob(23,0,null,0,12,"ion-card",[],null,null,null,i.I,i.d)),o.nb(24,49152,null,0,r.k,[o.h,o.k],null,null),(l()(),o.ob(25,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.f)),o.nb(26,49152,null,0,r.m,[o.h,o.k],null,null),(l()(),o.ob(27,0,null,0,2,"ion-card-title",[],null,null,null,i.H,i.h)),o.nb(28,49152,null,0,r.o,[o.h,o.k],null,null),(l()(),o.Bb(-1,0,["Minhas Solicita\xe7\xf5es Abertas"])),(l()(),o.ob(30,0,null,0,5,"ion-card-content",[],null,null,null,i.E,i.e)),o.nb(31,49152,null,0,r.l,[o.h,o.k],null,null),(l()(),o.ob(32,0,null,0,3,"ion-list",[],null,null,null,i.U,i.t)),o.nb(33,49152,null,0,r.M,[o.h,o.k],null,null),(l()(),o.fb(16777216,null,0,1,null,p)),o.nb(35,278528,null,0,a.h,[o.N,o.K,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.ob(36,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.N,i.l)),o.nb(37,49152,null,0,r.u,[o.h,o.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.ob(38,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.presentModal()&&o),o},i.M,i.m)),o.nb(39,49152,null,0,r.v,[o.h,o.k],null,null),(l()(),o.ob(40,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.P,i.o)),o.nb(41,49152,null,0,r.A,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,"/assets/fundo.jpg"),l(n,35,0,u.notificacoesPendentes),l(n,37,0,"end","bottom"),l(n,41,0,"add")},function(l,n){l(n,19,0,n.component.usuario.qtdPontos)})}function v(l){return o.Cb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab1",[],null,null,null,m,f)),o.nb(1,114688,null,0,d,[r.Db,h.a],null,null)],function(l,n){l(n,1,0)},null)}var k=o.kb("app-tab1",d,v,{},{},[]),g=u("gIcY"),x=u("ZYCi");u.d(n,"Tab1PageModuleNgFactory",function(){return w});var w=o.lb(t,[],function(l){return o.ub([o.vb(512,o.j,o.ab,[[8,[e.a,k]],[3,o.j],o.x]),o.vb(4608,a.k,a.j,[o.u,[2,a.q]]),o.vb(4608,r.b,r.b,[o.z,o.g]),o.vb(4608,r.Db,r.Db,[r.b,o.j,o.q]),o.vb(4608,r.Hb,r.Hb,[r.b,o.j,o.q]),o.vb(4608,g.p,g.p,[]),o.vb(1073742336,a.b,a.b,[]),o.vb(1073742336,r.Bb,r.Bb,[]),o.vb(1073742336,g.n,g.n,[]),o.vb(1073742336,g.e,g.e,[]),o.vb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),o.vb(1073742336,t,t,[]),o.vb(1024,x.k,function(){return[[{path:"",component:d}]]},[])])})}}]);