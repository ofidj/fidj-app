"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3754],{3754:(r,c,n)=>{n.r(c),n.d(c,{MyPageModule:()=>a});var i=n(4556),f=n(6895),g=n(433),d=n(1407),m=n(7582),o=n(8256),u=n(9251);class s{constructor(l,h){this.router=l,this.fidjConnectionService=h}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){yield this.fidjConnectionService.refresh(),this.fidjConnectionService.checkLogin().then(l=>{})})}}s.\u0275fac=function(l){return new(l||s)(o.Y36(d.F0),o.Y36(u.G))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-my"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","profile"],["name","leaf-outline"],["tab","gdpr"],["name","pulse-outline"],["tab","apps"],["name","layers-outline"]],template:function(l,h){1&l&&(o.TgZ(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),o._UZ(3,"ion-icon",2),o.TgZ(4,"ion-label"),o._uU(5,"Profile"),o.qZA()(),o.TgZ(6,"ion-tab-button",3),o._UZ(7,"ion-icon",4),o.TgZ(8,"ion-label"),o._uU(9,"GDPR"),o.qZA()(),o.TgZ(10,"ion-tab-button",5),o._UZ(11,"ion-icon",6),o.TgZ(12,"ion-label"),o._uU(13,"Apps"),o.qZA()()()())},dependencies:[i.gu,i.Q$,i.yq,i.ZU,i.UN]});const p=[{path:"",component:s,children:[{path:"profile",loadChildren:()=>Promise.all([n.e(8592),n.e(8465)]).then(n.bind(n,8465)).then(t=>t.ProfilePageModule)},{path:"gdpr",loadChildren:()=>Promise.all([n.e(8592),n.e(9463)]).then(n.bind(n,9463)).then(t=>t.GdprPageModule)},{path:"apps",loadChildren:()=>Promise.all([n.e(8592),n.e(8170)]).then(n.bind(n,8170)).then(t=>t.AppsPageModule)},{path:"",redirectTo:"/my/profile",pathMatch:"full"}]},{path:"",redirectTo:"/my/profile",pathMatch:"full"}];class e{}e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[d.Bz.forChild(p),d.Bz]});class a{}a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[i.Pc,f.ez,g.u5,e]})}}]);