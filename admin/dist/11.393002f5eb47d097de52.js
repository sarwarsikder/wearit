(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{y0IW:function(e,n,t){"use strict";t.r(n),t.d(n,"BannerModule",(function(){return k}));var c=t("tyNb"),i=t("ofXK"),r=t("3Pt+"),a=t("1kSV"),o=(t("EUDy"),t("LvDl")),s=t("fXoL"),l=t("sXYb"),h=function(){function e(e){this.restangular=e,this.allowFields=["title","content","mediaId","link"]}return e.prototype.create=function(e){return this.restangular.all("banners").post(o.pick(e,this.allowFields)).toPromise()},e.prototype.search=function(e){return this.restangular.one("banners").get(e).toPromise()},e.prototype.findOne=function(e){return this.restangular.one("banners",e).get().toPromise()},e.prototype.update=function(e,n){return this.restangular.one("banners",e).customPUT(o.pick(n,this.allowFields)).toPromise()},e.prototype.remove=function(e){return this.restangular.one("banners",e).customDELETE().toPromise()},e.\u0275fac=function(n){return new(n||e)(s.qc(l.a))},e.\u0275prov=s.Yb({token:e,factory:e.\u0275fac}),e}(),d=t("0OCT"),u=t("ms+I"),b=function(e){return["/banners/update",e]};function p(e,n){if(1&e){var t=s.jc();s.ic(0,"tr"),s.ic(1,"td"),s.dc(2,"img",11),s.hc(),s.ic(3,"td"),s.Xc(4),s.hc(),s.ic(5,"td"),s.Xc(6),s.hc(),s.ic(7,"td"),s.Xc(8),s.hc(),s.ic(9,"td"),s.Xc(10),s.hc(),s.ic(11,"td"),s.ic(12,"span"),s.Xc(13),s.wc(14,"date"),s.hc(),s.hc(),s.ic(15,"td"),s.ic(16,"a",12),s.dc(17,"i",13),s.hc(),s.Xc(18,"\xa0 "),s.ic(19,"a",14),s.tc("click",(function(){s.Oc(t);var e=n.$implicit,c=n.index;return s.vc().remove(e,c)})),s.dc(20,"i",15),s.hc(),s.hc(),s.hc()}if(2&e){var c=n.$implicit;s.Pb(2),s.Cc("src",null==c.media?null:c.media.thumbUrl,s.Qc),s.Pb(2),s.Yc(null==c?null:c.title),s.Pb(2),s.Yc(null==c?null:c.content),s.Pb(2),s.Yc(null==c?null:c.position),s.Pb(2),s.Yc(null==c?null:c.link),s.Pb(3),s.Yc(s.xc(14,7,c.createdAt)),s.Pb(3),s.Cc("routerLink",s.Gc(9,b,c._id))}}function f(e,n){if(1&e&&(s.ic(0,"div"),s.dc(1,"img",17),s.hc()),2&e){var t=s.vc(2);s.Pb(1),s.Cc("src",t.media.thumbUrl,s.Qc)}}function m(e,n){if(1&e){var t=s.jc();s.ic(0,"div",2),s.ic(1,"form",3,4),s.tc("submit",(function(){s.Oc(t);var e=s.Lc(2);return s.vc().submit(e)})),s.ic(3,"div",5),s.ic(4,"div",6),s.ic(5,"div",7),s.ic(6,"label"),s.Xc(7,"Title (*)"),s.hc(),s.ic(8,"input",8),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.title=e})),s.hc(),s.hc(),s.hc(),s.ic(9,"div",6),s.ic(10,"div",7),s.ic(11,"label"),s.Xc(12,"Content"),s.hc(),s.ic(13,"textarea",9),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.content=e})),s.hc(),s.hc(),s.hc(),s.ic(14,"div",6),s.ic(15,"div",7),s.ic(16,"label"),s.Xc(17,"Image (*) "),s.ic(18,"media-select",10),s.tc("onSelect",(function(e){return s.Oc(t),s.vc().selectMedia(e)})),s.hc(),s.hc(),s.Vc(19,f,2,1,"div",11),s.hc(),s.hc(),s.ic(20,"div",6),s.ic(21,"div",7),s.ic(22,"label"),s.Xc(23,"Link"),s.hc(),s.ic(24,"input",12),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.link=e})),s.hc(),s.hc(),s.hc(),s.ic(25,"div",6),s.ic(26,"div",7),s.ic(27,"label"),s.Xc(28,"Position"),s.hc(),s.ic(29,"select",13),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.position=e})),s.ic(30,"option",14),s.Xc(31,"Default"),s.hc(),s.hc(),s.hc(),s.hc(),s.ic(32,"div",15),s.ic(33,"div",7),s.ic(34,"button",16),s.Xc(35,"Submit"),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc()}if(2&e){var c=s.vc();s.Pb(8),s.Cc("ngModel",c.banner.title),s.Pb(5),s.Cc("ngModel",c.banner.content),s.Pb(6),s.Cc("ngIf",c.media),s.Pb(5),s.Cc("ngModel",c.banner.link),s.Pb(5),s.Cc("ngModel",c.banner.position)}}function g(e,n){if(1&e&&(s.ic(0,"div"),s.dc(1,"img",17),s.hc()),2&e){var t=s.vc(2);s.Pb(1),s.Cc("src",t.media.thumbUrl,s.Qc)}}function v(e,n){if(1&e){var t=s.jc();s.ic(0,"div",2),s.ic(1,"form",3,4),s.tc("submit",(function(){s.Oc(t);var e=s.Lc(2);return s.vc().submit(e)})),s.ic(3,"div",5),s.ic(4,"div",6),s.ic(5,"div",7),s.ic(6,"label"),s.Xc(7,"Title (*)"),s.hc(),s.ic(8,"input",8),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.title=e})),s.hc(),s.hc(),s.hc(),s.ic(9,"div",6),s.ic(10,"div",7),s.ic(11,"label"),s.Xc(12,"Content"),s.hc(),s.ic(13,"textarea",9),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.content=e})),s.hc(),s.hc(),s.hc(),s.ic(14,"div",6),s.ic(15,"div",7),s.ic(16,"label"),s.Xc(17,"Image (*) "),s.ic(18,"media-select",10),s.tc("onSelect",(function(e){return s.Oc(t),s.vc().selectMedia(e)})),s.hc(),s.hc(),s.Vc(19,g,2,1,"div",11),s.hc(),s.hc(),s.ic(20,"div",6),s.ic(21,"div",7),s.ic(22,"label"),s.Xc(23,"Link"),s.hc(),s.ic(24,"input",12),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.link=e})),s.hc(),s.hc(),s.hc(),s.ic(25,"div",6),s.ic(26,"div",7),s.ic(27,"label"),s.Xc(28,"Position"),s.hc(),s.ic(29,"select",13),s.tc("ngModelChange",(function(e){return s.Oc(t),s.vc().banner.position=e})),s.ic(30,"option",14),s.Xc(31,"Default"),s.hc(),s.hc(),s.hc(),s.hc(),s.ic(32,"div",15),s.ic(33,"div",7),s.ic(34,"button",16),s.Xc(35,"Submit"),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc()}if(2&e){var c=s.vc();s.Pb(8),s.Cc("ngModel",c.banner.title),s.Pb(5),s.Cc("ngModel",c.banner.content),s.Pb(6),s.Cc("ngIf",c.media),s.Pb(5),s.Cc("ngModel",c.banner.link),s.Pb(5),s.Cc("ngModel",c.banner.position)}}var y=function(){function e(e,n,t){this.router=e,this.bannerService=n,this.toasty=t,this.items=[],this.page=1,this.total=0,this.title=""}return e.prototype.ngOnInit=function(){this.query()},e.prototype.query=function(){var e=this;this.bannerService.search({page:this.page,title:this.title}).then((function(n){e.items=n.data.items,e.total=n.data.count})).catch((function(){return alert("Something went wrong, please try again!")}))},e.prototype.keyPress=function(e){13===e.charCode&&this.query()},e.prototype.remove=function(e,n){var t=this;window.confirm("Are you sure want to delete this banner?")&&this.bannerService.remove(e._id).then((function(){t.toasty.success("Item has been deleted!"),t.items.splice(n,1)})).catch((function(e){return t.toasty.error(e.data.message||"Something went wrong, please try again!")}))},e.\u0275fac=function(n){return new(n||e)(s.cc(c.f),s.cc(h),s.cc(d.c))},e.\u0275cmp=s.Wb({type:e,selectors:[["ng-component"]],decls:37,vars:5,consts:[[1,"card"],[1,"card-block","table-responsive"],[1,"table"],[1,"input-group"],["placeholder","search...",1,"form-control",3,"ngModel","ngModelChange","keypress"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary","fa","fa-search",3,"click"],["colspan","5"],[4,"ngFor","ngForOf"],["colspan","4"],[3,"collectionSize","page","maxSize","pageChange"],["width","45px",3,"src"],[3,"routerLink"],[1,"fa","fa-pencil"],[3,"click"],[1,"fa","fa-trash"]],template:function(e,n){1&e&&(s.ic(0,"div",0),s.ic(1,"div",1),s.ic(2,"table",2),s.ic(3,"thead"),s.ic(4,"tr"),s.dc(5,"th"),s.ic(6,"th"),s.ic(7,"a"),s.Xc(8,"Title"),s.hc(),s.hc(),s.ic(9,"th"),s.ic(10,"a"),s.Xc(11,"Content"),s.hc(),s.hc(),s.ic(12,"th"),s.ic(13,"a"),s.Xc(14,"Position"),s.hc(),s.hc(),s.ic(15,"th"),s.ic(16,"a"),s.Xc(17,"Link"),s.hc(),s.hc(),s.ic(18,"th"),s.ic(19,"a"),s.Xc(20,"Created at"),s.hc(),s.hc(),s.ic(21,"th"),s.Xc(22," Actions "),s.hc(),s.hc(),s.ic(23,"tr"),s.dc(24,"th"),s.ic(25,"th"),s.ic(26,"div",3),s.ic(27,"input",4),s.tc("ngModelChange",(function(e){return n.title=e}))("keypress",(function(e){return n.keyPress(e)})),s.hc(),s.ic(28,"div",5),s.ic(29,"button",6),s.tc("click",(function(){return n.query()})),s.hc(),s.hc(),s.hc(),s.hc(),s.dc(30,"th",7),s.hc(),s.hc(),s.ic(31,"tbody"),s.Vc(32,p,21,11,"tr",8),s.hc(),s.ic(33,"tfoot"),s.ic(34,"tr"),s.ic(35,"td",9),s.ic(36,"ngb-pagination",10),s.tc("pageChange",(function(e){return n.page=e}))("pageChange",(function(){return n.query()})),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc()),2&e&&(s.Pb(27),s.Cc("ngModel",n.title),s.Pb(5),s.Cc("ngForOf",n.items),s.Pb(4),s.Cc("collectionSize",n.total)("page",n.page)("maxSize",5))},directives:[r.b,r.h,r.k,i.m,a.g,c.i],pipes:[i.e],encapsulation:2}),e}(),C=function(){function e(e,n,t){this.router=e,this.bannerService=n,this.toasty=t,this.banner={name:"",alias:"",description:"",settings:{},position:"default"}}return e.prototype.ngOnInit=function(){},e.prototype.selectMedia=function(e){this.media=e},e.prototype.submit=function(e){var n=this;return this.banner.title?this.media?(this.banner.mediaId=this.media._id,void this.bannerService.create(this.banner).then((function(){n.toasty.success("Brand has been created"),n.router.navigate(["/banners"])}),(function(e){return n.toasty.error(e.data.message||"Something went wrong!")}))):this.toasty.error("Please browse banner image"):this.toasty.error("Please enter banner name")},e.\u0275fac=function(n){return new(n||e)(s.cc(c.f),s.cc(h),s.cc(d.c))},e.\u0275cmp=s.Wb({type:e,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"card"],["class","card-body",4,"ngIf"],[1,"card-body"],[3,"submit"],["frm",""],[1,"row"],[1,"col","col-md-6"],[1,"form-group"],["type","text","name","bannerName","placeholder","Enter title","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","bannerdesc","placeholder","Enter some text",1,"form-control",3,"ngModel","ngModelChange"],[3,"onSelect"],[4,"ngIf"],["type","text","name","link","placeholder","Enter url of the banner","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","Position",1,"form-control",3,"ngModel","ngModelChange"],["value","default"],[1,"col","col-md-12"],["type","submit",1,"btn","btn-primary"],[1,"img-thumbnail",3,"src"]],template:function(e,n){1&e&&(s.ic(0,"div",0),s.Vc(1,m,36,5,"div",1),s.hc()),2&e&&(s.Pb(1),s.Cc("ngIf",n.banner))},directives:[i.n,r.s,r.i,r.j,r.b,r.p,r.h,r.k,u.a,r.q,r.l,r.r],encapsulation:2}),e}(),M=function(){function e(e,n,t,c){this.router=e,this.route=n,this.bannerService=t,this.toasty=c}return e.prototype.ngOnInit=function(){var e=this,n=this.route.snapshot.paramMap.get("id");this.bannerService.findOne(n).then((function(n){e.banner=n.data,n.data.media&&(e.media=n.data.media,e.banner.mediaId=n.data.media._id)}))},e.prototype.selectMedia=function(e){this.media=e},e.prototype.submit=function(e){var n=this;return this.banner.title?this.media?(this.banner.mediaId=this.media._id,void this.bannerService.update(this.banner._id,this.banner).then((function(){n.toasty.success("banner has been updated"),n.router.navigate(["/banners"])}),(function(e){return n.toasty.error(e.data.message||"Something went wrong!")}))):this.toasty.error("Please browse banner image"):this.toasty.error("Please enter banner name")},e.\u0275fac=function(n){return new(n||e)(s.cc(c.f),s.cc(c.a),s.cc(h),s.cc(d.c))},e.\u0275cmp=s.Wb({type:e,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"card"],["class","card-body",4,"ngIf"],[1,"card-body"],[3,"submit"],["frm",""],[1,"row"],[1,"col","col-md-6"],[1,"form-group"],["type","text","name","bannerName","placeholder","Enter title","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","bannerdesc","placeholder","Enter some text",1,"form-control",3,"ngModel","ngModelChange"],[3,"onSelect"],[4,"ngIf"],["type","text","name","link","placeholder","Enter url of the banner","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","Position",1,"form-control",3,"ngModel","ngModelChange"],["value","default"],[1,"col","col-md-12"],["type","submit",1,"btn","btn-primary"],[1,"img-thumbnail",3,"src"]],template:function(e,n){1&e&&(s.ic(0,"div",0),s.Vc(1,v,36,5,"div",1),s.hc()),2&e&&(s.Pb(1),s.Cc("ngIf",n.banner))},directives:[i.n,r.s,r.i,r.j,r.b,r.p,r.h,r.k,u.a,r.q,r.l,r.r],encapsulation:2}),e}(),P=t("vbE1"),w=[{path:"",component:y,data:{title:"Manage banners",urls:[{title:"Banners",url:"/banners"},{title:"Listing"}]}},{path:"create",component:C,data:{title:"Manage banners",urls:[{title:"Banners",url:"/banners"},{title:"Create new banner"}]}},{path:"update/:id",component:M,data:{title:"Manage banners",urls:[{title:"Banners",url:"/banners"},{title:"Update banner"}]}}],k=function(){function e(){}return e.\u0275mod=s.ac({type:e}),e.\u0275inj=s.Zb({factory:function(n){return new(n||e)},providers:[h],imports:[[i.b,r.c,a.f,P.a,c.j.forChild(w)]]}),e}()}}]);