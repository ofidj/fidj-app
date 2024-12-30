"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2561],{2561:(x,f,d)=>{d.r(f),d.d(f,{AppPageModule:()=>v});var c=d(4556),l=d(1407),s=d(6895),a=d(433),o=d(7582),u=d(9092),e=d(8256),h=d(5420),g=d(9251),b=d(529);function Z(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h2"),e._uU(3,"Title"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&n){const t=e.oxw();e.xp6(5),e.Oqu(t.appDetail.title)}}function C(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h3"),e._uU(3,"Description"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&n){const t=e.oxw();e.xp6(5),e.Oqu(t.appDetail.description)}}function D(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label",10)(2,"h3"),e._uU(3,"Badge"),e.qZA()(),e._UZ(4,"img",11),e.qZA()),2&n){const t=e.oxw();e.xp6(4),e.s9C("src",t.appDetail.badge,e.LSH)}}function O(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-col",8)(1,"ion-button",18),e.NdJ("click",function(){const _=e.CHM(t).$implicit,m=e.oxw(2);return e.KtG(m.removeRolesAvailable(_))}),e._uU(2),e._UZ(3,"ion-icon",19),e.qZA(),e.TgZ(4,"ion-button",20),e._uU(5),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(1),e.Q6J("hidden","Owner"===t.type),e.xp6(1),e.hij(" ",t.type," "),e.xp6(2),e.Q6J("hidden","Owner"!==t.type),e.xp6(1),e.hij(" ",t.type," ")}}function P(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label",10)(2,"h3"),e._uU(3,"Available Roles"),e.qZA()(),e.TgZ(4,"div",12)(5,"ion-grid")(6,"ion-row")(7,"ion-col",13)(8,"ion-button",14),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.addRolesAvailable())}),e.TgZ(9,"ion-input",15),e.NdJ("ngModelChange",function(r){e.CHM(t);const _=e.oxw();return e.KtG(_.roleToAdd1=r)}),e.qZA(),e._UZ(10,"ion-icon",16),e.qZA()(),e.YNc(11,O,6,4,"ion-col",17),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.roleToAdd1),e.xp6(2),e.Q6J("ngForOf",t.appDetails.rolesAvailable)}}function J(n,i){if(1&n&&(e.TgZ(0,"ion-select-option",23),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.s9C("value",t.type),e.xp6(1),e.hij("",t.type," ")}}function w(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-col",8)(1,"ion-button",24),e.NdJ("click",function(){const _=e.CHM(t).$implicit,m=e.oxw(2);return e.KtG(m.removeRolesByDefault(_))}),e._uU(2),e._UZ(3,"ion-icon",19),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(2),e.hij(" ",t.type," ")}}function j(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label",10)(2,"h3"),e._uU(3,"Default Roles"),e.qZA()(),e.TgZ(4,"div",12)(5,"ion-grid")(6,"ion-row")(7,"ion-col",13)(8,"ion-button")(9,"ion-select",21),e.NdJ("ionChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.addRolesByDefault())})("ngModelChange",function(r){e.CHM(t);const _=e.oxw();return e.KtG(_.roleToAdd2=r)}),e.YNc(10,J,2,2,"ion-select-option",22),e.qZA()()(),e.YNc(11,w,4,1,"ion-col",17),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.roleToAdd2),e.xp6(1),e.Q6J("ngForOf",t.appDetails.rolesAvailable),e.xp6(1),e.Q6J("ngForOf",t.appDetails.rolesByDefault)}}function U(n,i){1&n&&(e.TgZ(0,"ion-item-divider")(1,"ion-label"),e._uU(2," Roles I Have in"),e.qZA()())}function M(n,i){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.type)}}function N(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ul",25),e.YNc(2,M,2,1,"li",26),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.rolesYouHave)}}function S(n,i){if(1&n&&(e.TgZ(0,"ion-item-divider")(1,"ion-label"),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("Endpoints (",t.appDetails.endpoints.length,")")}}function k(n,i){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.AsE("key: ",t.key," url: ",t.url," ")}}function q(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ul"),e.YNc(2,k,2,2,"li",26),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.appDetails.endpoints)}}function Y(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"ion-label",10)(3,"h3"),e._uU(4,"Secret"),e.qZA()(),e.TgZ(5,"pre"),e._uU(6),e.qZA()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.appDetails.salt)}}function Q(n,i){1&n&&(e.TgZ(0,"ion-item-divider")(1,"ion-label"),e._uU(2," Configuration"),e.qZA()())}function I(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2,"accessTokenTTL"),e.qZA(),e.TgZ(3,"ion-range",27),e.NdJ("ionKnobMoveEnd",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.saveApp(!0))})("ngModelChange",function(r){e.CHM(t);const _=e.oxw();return e.KtG(_.accessTokenTTL=r)}),e.qZA(),e.TgZ(4,"ion-label",28),e._uU(5),e.ALo(6,"number"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.accessTokenTTL)("max",1)("min",.01)("step",.05),e.xp6(2),e.hij("",e.xi3(6,5,t.accessTokenTTL,"1.2-2")," hours")}}function R(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2,"refreshTokenTTL"),e.qZA(),e.TgZ(3,"ion-range",29),e.NdJ("ionKnobMoveEnd",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.saveApp(!1))})("ngModelChange",function(r){e.CHM(t);const _=e.oxw();return e.KtG(_.refreshTokenTTL=r)}),e.qZA(),e.TgZ(4,"ion-label",28),e._uU(5),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.refreshTokenTTL)("max",1e3)("min",1),e.xp6(2),e.hij("",t.refreshTokenTTL," hours")}}function E(n,i){if(1&n&&(e.TgZ(0,"ion-select-option",23),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.s9C("value",t.type),e.xp6(1),e.hij("",t.type," ")}}function F(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"ion-button",32),e.NdJ("click",function(){const _=e.CHM(t).$implicit,m=e.oxw().$implicit,y=e.oxw(2);return e.KtG(y.removeRole(m,_))}),e._uU(2),e._UZ(3,"ion-icon",19),e.qZA(),e.TgZ(4,"ion-button",33),e._uU(5),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(1),e.Q6J("hidden","Owner"===t.type),e.xp6(1),e.hij(" ",t.type," "),e.xp6(2),e.Q6J("hidden","Owner"!==t.type),e.xp6(1),e.hij(" ",t.type," ")}}function G(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item"),e._uU(1),e.TgZ(2,"ion-button",31)(3,"ion-select",21),e.NdJ("ionChange",function(){const r=e.CHM(t),_=r.$implicit,m=r.index,y=e.oxw(2);return e.KtG(y.addRole(_,m.toString()))})("ngModelChange",function(r){const m=e.CHM(t).index,y=e.oxw(2);return e.KtG(y.rolesToAdd[m.toString()]=r)}),e.YNc(4,E,2,2,"ion-select-option",22),e.qZA()(),e.YNc(5,F,6,4,"div",26),e.qZA()}if(2&n){const t=i.$implicit,p=i.index,r=e.oxw(2);e.xp6(1),e.hij(" ",t.owner.poc.email," "),e.xp6(2),e.Q6J("ngModel",r.rolesToAdd[p.toString()]),e.xp6(1),e.Q6J("ngForOf",r.appDetails.rolesAvailable),e.xp6(1),e.Q6J("ngForOf",t.roles)}}function B(n,i){if(1&n&&(e.TgZ(0,"ion-col",30)(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,G,6,4,"ion-item",26),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij("",t.appUsers.length," users"),e.xp6(1),e.Q6J("ngForOf",t.appUsers)}}class T{constructor(i,t,p,r,_){this.router=i,this.route=t,this.fidjService=p,this.fidjConnectionService=r,this.http=_}ngOnInit(){this.refresh().then(i=>{})}refresh(i){return(0,o.mG)(this,void 0,void 0,function*(){this.appId=this.route.snapshot.params.appId,this.rolesToAdd={},this.appDetails=void 0,this.appUsers=[],this.accessTokenTTL=0,this.refreshTokenTTL=void 0;try{this.http.get(this.fidjConnectionService.getUrl()+`/apps/${this.appId}`).subscribe(t=>{console.log("data:",t),this.appDetail=t.app,this.appDetail.badge=this.fidjConnectionService.getUrl()+`/apps/${this.appId}/badge`})}catch{this.appDetails=null}this.isOwner=!1;try{yield this.fidjConnectionService.refresh();const t=(yield this.fidjService.sendOnEndpoint({verb:"GET",key:"apps",relativePath:`${this.appId}/details`,defaultKeyUrl:this.fidjConnectionService.getUrl("apps")})).data;this.appDetails=t.app,this.refreshTokenTTL=this.appDetails.tti_hours;const p=new u.Configuration([],[],this.appDetails.configurationAsJSON);this.accessTokenTTL=p.getConf().accessTokenTTL,this.isOwner=!0}catch{this.appDetails=null}if(this.isOwner)try{yield this.fidjConnectionService.refresh();const t=(yield this.fidjService.sendOnEndpoint({verb:"GET",key:"apps",relativePath:`${this.appId}/users`,defaultKeyUrl:this.fidjConnectionService.getUrl("apps")})).data;this.appUsers=t.users}catch(t){this.appUsers=[],yield this.fidjConnectionService.checkError(t)}try{this.rolesYouHave=(yield this.fidjService.sendOnEndpoint({verb:"GET",key:"apps",relativePath:`${this.appId}/me`,defaultKeyUrl:this.fidjConnectionService.getUrl("apps")})).data.roles}catch{this.rolesYouHave=[]}i&&i.target.complete()})}addRolesAvailable(){return(0,o.mG)(this,void 0,void 0,function*(){if(console.log("addRolesAvailable",this.roleToAdd1),!this.roleToAdd1)return;const i={rolesAvailable:this.appDetails.rolesAvailable,rolesByDefault:this.appDetails.rolesByDefault};return i.rolesAvailable.push({type:this.roleToAdd1.toLowerCase()}),yield this.updateAppRoles(i),this.roleToAdd1=void 0,null})}addRolesByDefault(){return(0,o.mG)(this,void 0,void 0,function*(){if(console.log("addRolesByDefault",this.roleToAdd2),!this.roleToAdd2)return;const i={rolesAvailable:this.appDetails.rolesAvailable,rolesByDefault:this.appDetails.rolesByDefault};return i.rolesByDefault.push({type:this.roleToAdd2.toLowerCase()}),yield this.updateAppRoles(i),this.roleToAdd2=void 0,this.refresh()})}addRole(i,t){return(0,o.mG)(this,void 0,void 0,function*(){if(!this.rolesToAdd[t])return;const p={name:"contract-"+i.owner.poc.email,user:i.owner.poc.email,roles:i.roles.map(r=>r.type)};return p.roles.push({type:this.rolesToAdd[t].toLowerCase()}),yield this.updateAppContract(p),this.rolesToAdd={},this.refresh()})}removeRolesAvailable(i){return(0,o.mG)(this,void 0,void 0,function*(){console.log("removeRolesAvailable",i);const t={rolesAvailable:this.appDetails.rolesAvailable,rolesByDefault:this.appDetails.rolesByDefault},p=t.rolesAvailable.map(r=>r.type).indexOf(i.type);return t.rolesAvailable.splice(p,1),yield this.updateAppRoles(t),this.refresh()})}removeRolesByDefault(i){return(0,o.mG)(this,void 0,void 0,function*(){console.log("removeRolesByDefault",i);const t={rolesAvailable:this.appDetails.rolesAvailable,rolesByDefault:this.appDetails.rolesByDefault},p=t.rolesByDefault.map(r=>r.type).indexOf(i.type);return t.rolesByDefault.splice(p,1),yield this.updateAppRoles(t),this.refresh()})}removeRole(i,t){return(0,o.mG)(this,void 0,void 0,function*(){console.log("removeRole");const p={name:"contract-"+i.owner.poc.email,user:i.owner.poc.email,roles:i.roles.map(_=>_.type)},r=p.roles.map(_=>_.type).indexOf(t.type);return p.roles.splice(r,1),yield this.updateAppContract(p),this.refresh()})}updateAppRoles(i){return(0,o.mG)(this,void 0,void 0,function*(){try{const t=(yield this.fidjService.sendOnEndpoint({verb:"POST",key:"apps",relativePath:`${this.appId}`,defaultKeyUrl:this.fidjConnectionService.getUrl("apps"),data:i})).data;this.appDetails=t.app}catch(t){yield this.fidjConnectionService.checkError(t)}})}updateAppContract(i){return(0,o.mG)(this,void 0,void 0,function*(){try{const t=(yield this.fidjService.sendOnEndpoint({verb:"POST",key:"apps",relativePath:`${this.appId}/contracts`,defaultKeyUrl:this.fidjConnectionService.getUrl("apps"),data:i})).data;this.appDetails=t.app}catch(t){yield this.fidjConnectionService.checkError(t)}})}saveApp(i){return(0,o.mG)(this,void 0,void 0,function*(){try{this.accessTokenTTL=Math.round(100*this.accessTokenTTL)/100;const t={tti_hours:this.refreshTokenTTL};if(i){const p=new u.Configuration([],[],this.appDetails.configurationAsJSON);p.set("accessTokenTTL",this.accessTokenTTL),t.configurationAsJSON=p.getJSON()}yield this.fidjService.sendOnEndpoint({verb:"PUT",key:"apps",relativePath:`${this.appId}`,data:t,defaultKeyUrl:this.fidjConnectionService.getUrl("apps")})}catch(t){yield this.fidjConnectionService.checkError(t)}})}}T.\u0275fac=function(i){return new(i||T)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(h.FidjService),e.Y36(g.G),e.Y36(b.eN))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-app"]],decls:30,vars:18,consts:[[3,"translucent"],["height","15em","src","assets/fidj-logo.png"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],["offset-lg","2","size-lg","4","size-xs","12"],[4,"ngIf"],["size-lg","4","size-xs","12"],["offset-lg","2","size-lg","8","size-xs","12",4,"ngIf"],[2,"min-width","100px"],["alt","",3,"src"],[2,"width","100%"],["size-lg","8","size-xs","12"],["color","success",3,"click"],["placeholder","new role","type","text",3,"ngModel","ngModelChange"],["name","add-outline"],["size-lg","4","size-xs","12",4,"ngFor","ngForOf"],["color","success",3,"hidden","click"],["name","close-outline"],["color","success",3,"hidden"],["interface","popover","placeholder","...",2,"min-width","100px",3,"ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"click"],[1,"ion-align-items-start"],[4,"ngFor","ngForOf"],[3,"ngModel","max","min","step","ionKnobMoveEnd","ngModelChange"],["slot","end"],[3,"ngModel","max","min","ionKnobMoveEnd","ngModelChange"],["offset-lg","2","size-lg","8","size-xs","12"],[1,"button-in-list"],[1,"button-in-list",3,"hidden","click"],[1,"button-in-list",3,"hidden"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._UZ(3,"img",1),e._uU(4),e.qZA()()(),e.TgZ(5,"ion-content",2)(6,"ion-refresher",3),e.NdJ("ionRefresh",function(r){return t.refresh(r)}),e._UZ(7,"ion-refresher-content"),e.qZA(),e.TgZ(8,"ion-header",4)(9,"ion-toolbar")(10,"ion-title",5),e._uU(11),e.qZA()()(),e.TgZ(12,"ion-grid")(13,"ion-row")(14,"ion-col",6),e.YNc(15,Z,6,1,"ion-item",7),e.YNc(16,C,6,1,"ion-item",7),e.YNc(17,D,5,1,"ion-item",7),e.qZA(),e.TgZ(18,"ion-col",8),e.YNc(19,P,12,2,"ion-item",7),e.YNc(20,j,12,3,"ion-item",7),e.YNc(21,U,3,0,"ion-item-divider",7),e.YNc(22,N,3,1,"ion-item",7),e.YNc(23,S,3,1,"ion-item-divider",7),e.YNc(24,q,3,1,"ion-item",7),e.YNc(25,Y,7,1,"ion-item",7),e.YNc(26,Q,3,0,"ion-item-divider",7),e.YNc(27,I,7,8,"ion-item",7),e.YNc(28,R,6,4,"ion-item",7),e.qZA(),e.YNc(29,B,4,2,"ion-col",9),e.qZA()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(4),e.hij(" ",t.appId," "),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(6),e.Oqu(t.appId),e.xp6(4),e.Q6J("ngIf",t.appDetail),e.xp6(1),e.Q6J("ngIf",t.appDetail),e.xp6(1),e.Q6J("ngIf",t.appDetail),e.xp6(2),e.Q6J("ngIf",t.appDetails),e.xp6(1),e.Q6J("ngIf",t.appDetails),e.xp6(1),e.Q6J("ngIf",null==t.rolesYouHave?null:t.rolesYouHave.length),e.xp6(1),e.Q6J("ngIf",null==t.rolesYouHave?null:t.rolesYouHave.length),e.xp6(1),e.Q6J("ngIf",null==t.appDetails||null==t.appDetails.endpoints?null:t.appDetails.endpoints.length),e.xp6(1),e.Q6J("ngIf",null==t.appDetails||null==t.appDetails.endpoints?null:t.appDetails.endpoints.length),e.xp6(1),e.Q6J("ngIf",t.appDetails),e.xp6(1),e.Q6J("ngIf",t.appDetails&&t.isOwner),e.xp6(1),e.Q6J("ngIf",t.appDetails&&t.isOwner&&t.accessTokenTTL),e.xp6(1),e.Q6J("ngIf",t.appDetails&&t.isOwner),e.xp6(1),e.Q6J("ngIf",t.appUsers.length))},dependencies:[c.YG,c.wI,c.W2,c.jY,c.Gu,c.gu,c.pK,c.Ie,c.rH,c.Q$,c.I_,c.nJ,c.Wo,c.Nd,c.t9,c.n0,c.wd,c.sr,c.QI,c.j9,s.sg,s.O5,a.JJ,a.On,s.JJ]});const K=[{path:"",component:T}];class A{}A.\u0275fac=function(i){return new(i||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[l.Bz.forChild(K),l.Bz]});class v{}v.\u0275fac=function(i){return new(i||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[c.Pc,s.ez,a.u5,l.Bz.forChild([{path:"",component:T}]),A]})},4309:(x,f)=>{Object.defineProperty(f,"__esModule",{value:!0}),f.Configuration=void 0;class d{constructor(l,s,a){this.defaultValues=l,this.allDomains=s,this.build(a)}static Walk(l,s,a,o){for(const u of a){let e=[];if("object"==typeof s[u]&&!Array.isArray(s[u])&&(e=Object.keys(s[u])),e.length){const h="object",g=o.concat([{name:u,type:h}]);d.Walk(l,s[u],e,g)}else{let h=l;for(const g of o)h.hasOwnProperty(g.name)||("object"===g.type?h[g.name]={}:h[g.name]=[]),h=h[g.name];h[u]=s[u]}}}getConf(l){let s=this.allValues;if(!l)return s;const a=this.allDomains.filter(o=>o.domain===l);if(1!==a.length)return s;s={};for(const o of a[0].keys)s[o]=this.allValues[o];return s}getSubConf(l){return this.allValues[l]}getJSON(l){return JSON.stringify(this.getConf(l))}getSubJSON(l){return JSON.stringify(this.getSubConf(l))}contains(l){let s=l;try{"string"==typeof l&&(s=JSON.parse(l))}catch{}const a=this.getConf();for(const o in a)if(a.hasOwnProperty(o)===s.hasOwnProperty(o)&&JSON.stringify(a[o])!==JSON.stringify(s[o]))return!1;return!0}merge(l){if(!l)return;let s=l;try{"string"==typeof l&&(s=JSON.parse(l))}catch{}if(0===Object.keys(s).length)return this.allValues={},this.defaultValues=[],void this.build();const a=this.getConf();for(const o in s)s.hasOwnProperty(o)&&(a[o]?this.add(o,s[o]):this.set(o,s[o]))}set(l,s){const a=this.getConf();a[l]=s,this.build(a)}add(l,s){const a=this.getConf();try{const o=JSON.parse(JSON.stringify(a[l]));d.Walk(o,s,Object.keys(s),[]),a[l]=o,this.build(a)}catch(o){console.error(o)}}update(l){const s=Object.keys(this.allValues);l.defaultValues=[];for(const a of s){const o=JSON.parse(JSON.stringify(this.allValues[a]));l.defaultValues.push({key:a,value:o})}l.allDomains=JSON.parse(JSON.stringify(this.allDomains))}build(l){this.allValues={};try{"string"==typeof l&&(l=JSON.parse(l))}catch{}for(const s of this.defaultValues)this.allValues[s.key]=s.value;if(l)for(const s of Object.keys(l))l.hasOwnProperty(s)&&(this.allValues[s]=l[s])}}f.Configuration=d},6508:(x,f,d)=>{Object.defineProperty(f,"__esModule",{value:!0}),f.configurationFactory=f.ConfigurationFactory=void 0;const c=d(4309);class l{constructor(a,o){this.defaultValues=a,this.allDomains=o,this.setUp(a,o)}setUp(a,o){this.defaultValues=a,this.allDomains=o}getConfiguration(a){return new c.Configuration(this.defaultValues,this.allDomains,a)}}f.ConfigurationFactory=l,f.configurationFactory=new l([],[])},9205:function(x,f,d){var c=this&&this.__createBinding||(Object.create?function(s,a,o,u){void 0===u&&(u=o);var e=Object.getOwnPropertyDescriptor(a,o);(!e||("get"in e?!a.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(s,u,e)}:function(s,a,o,u){void 0===u&&(u=o),s[u]=a[o]}),l=this&&this.__exportStar||function(s,a){for(var o in s)"default"!==o&&!Object.prototype.hasOwnProperty.call(a,o)&&c(a,s,o)};Object.defineProperty(f,"__esModule",{value:!0}),l(d(4309),f),l(d(6508),f)},9092:function(x,f,d){var c=this&&this.__createBinding||(Object.create?function(s,a,o,u){void 0===u&&(u=o);var e=Object.getOwnPropertyDescriptor(a,o);(!e||("get"in e?!a.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(s,u,e)}:function(s,a,o,u){void 0===u&&(u=o),s[u]=a[o]}),l=this&&this.__exportStar||function(s,a){for(var o in s)"default"!==o&&!Object.prototype.hasOwnProperty.call(a,o)&&c(a,s,o)};Object.defineProperty(f,"__esModule",{value:!0}),l(d(9205),f)}}]);