(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)a=c[d],r[a]&&l.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var c=s[a];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},r={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-50fe2437":"7c8c8761","chunk-8a605c6a":"7702ff6f","chunk-bbc8077e":"03146ae9"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s={"chunk-50fe2437":1,"chunk-8a605c6a":1,"chunk-bbc8077e":1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise(function(t,s){for(var n="css/"+({}[e]||e)+"."+{"chunk-50fe2437":"329d569c","chunk-8a605c6a":"fee9124f","chunk-bbc8077e":"2d2c5406"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===r))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.request=n,delete a[e],f.parentNode.removeChild(f),s(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,s){n=r[e]=[t,s]});t.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var s=r[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,s[1](o)}r[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1072:function(e,t,s){"use strict";var n=s("8ce8"),a=s.n(n);a.a},"28b4":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"48fc":function(e,t,s){"use strict";var n=s("aef1"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-md fixed-top navbar-dark"},[s("a",{staticClass:"navbar-brand",on:{click:function(t){e.goto("/")}}},[e._v("Simple Forum")]),s("i",{staticClass:"mobile fas fa-shopping-cart",on:{click:function(t){e.goto("/check")}}}),s("button",{staticClass:"navbar-toggler p-0 border-0",attrs:{type:"button","data-toggle":"offcanvas"}},[s("span",{staticClass:"navbar-toggler-icon",on:{click:function(t){e.isMenuOpen=!e.isMenuOpen}}})]),s("div",{staticClass:"navbar-collapse offcanvas-collapse",class:{open:e.isMenuOpen},attrs:{id:"navbarsExampleDefault"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item dropdown",class:{show:e.isMenuListOpen}},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"dropdown01","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":e.isMenuListOpen},on:{click:function(t){e.isMenuListOpen=!e.isMenuListOpen}}},[e._v("Account")]),s("div",{staticClass:"dropdown-menu",class:{show:e.isMenuListOpen},attrs:{id:"dynamic-menu","aria-labelledby":"dropdown01"}},[e.isLogin?e._e():s("a",{staticClass:"dropdown-item",on:{click:function(t){e.goto("signin")}}},[e._v("Login")]),e.isLogin?s("span",{staticClass:"dropdown-item",attrs:{id:"logout-btn"},on:{click:e.logout}},[e._v("Logout")]):e._e(),e.isLogin?s("span",{staticClass:"dropdown-item",attrs:{id:"dashboard-btn"},on:{click:function(t){e.goto("dashboard")}}},[e._v("Dashboard")]):e._e()])])])]),s("i",{staticClass:"desktop fas fa-shopping-cart",on:{click:function(t){e.goto("/check")}}}),s("img",{attrs:{id:"info_card",src:"https://firebasestorage.googleapis.com/v0/b/kga-food-week.appspot.com/o/circle_info.png?alt=media&token=0b971f2c-9ff7-4cc4-bf07-e45f6583b56f"}})])},c=[],i={name:"home",data:function(){return{isMenuOpen:!1,isMenuListOpen:!1}},methods:{logout:function(){this.$store.commit("setIsLogin",!1),this.$router.push({path:"/signin"})},goto:function(e){this.$router.push({path:e})}},computed:{isLogin:function(){return this.$store.state.isLogin},isHost:function(){return this.$store.state.isHost}},mounted:function(){}},u=i,d=(s("1072"),s("2877")),l=Object(d["a"])(u,o,c,!1,null,"0d35502a",null);l.options.__file="Header.vue";var f=l.exports,p={components:{Header:f}},b=p,m=(s("5c0b"),Object(d["a"])(b,a,r,!1,null,null,null));m.options.__file="App.vue";var h=m.exports,j=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("main",{attrs:{role:"main"}},[s("div",{attrs:{id:"product_list"}},e._l(e.shops,function(e){return s("Slider",{key:e.name,attrs:{shop:e}})}),1)])])},v=[],k=(s("ac6a"),s("f3e2"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slider-outter"},[s("div",{staticClass:"title-section"},[s("div",{staticClass:"space-border"}),s("div",{staticClass:"title"},[e._v(e._s(e.shop.name))]),s("div",{staticClass:"space-border"})]),s("div",{staticClass:"slider-wrapper"},e._l(e.shop.product_list,function(e){return s("Card",{key:e.id,attrs:{product:e}})}),1)])}),y=[],w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rounded product-card"},[s("div",{staticClass:"cover"}),s("div",{staticClass:"uncover"},[s("div",{staticClass:"purchased",class:{active:e.num}},[e._v(e._s(e.num))]),s("img",{staticClass:"img-background rounded",attrs:{src:e.product.img}}),s("div",{staticClass:"words"},[s("p",{staticClass:"name"},[s("strong",{staticClass:"d-block text-gray-dark"},[e._v(e._s(e.product.name))])]),s("p",{staticClass:"price"},[e._v("$"+e._s(e.product.price)+" / "+e._s(e.product.unit))]),e.isPurchase?e._e():s("span",{staticClass:"purchase",on:{click:function(t){e.isPurchase=!0}}},[e._v("想買！")]),e.isPurchase?s("div",{staticClass:"number"},[s("i",{staticClass:"fas fa-caret-square-down",on:{click:function(t){e.subNum()}}}),e._v(e._s(e.num)),s("i",{staticClass:"fas fa-caret-square-up",on:{click:function(t){e.addNum()}}}),s("div",{staticClass:"check",on:{click:function(t){e.handleChange()}}},[s("i",{staticClass:"fas fa-check"})])]):e._e()])])])},_=[],C={data:function(){return{num:0,isPurchase:!1}},props:{product:{type:Object,required:!0}},methods:{goto:function(e){console.log(e)},subNum:function(){this.num=Math.max(0,this.num-1)},addNum:function(){this.num++},handleChange:function(){this.isPurchase=!1,this.$store.commit("setProducts",{id:this.product.id,num:this.num}),console.log(this.$store.state)}}},O=C,x=(s("e60d"),Object(d["a"])(O,w,_,!1,null,null,null));x.options.__file="Card.vue";var S=x.exports,E={components:{Card:S},props:{shop:{type:Object,required:!0}}},z=E,$=(s("e805"),Object(d["a"])(z,k,y,!1,null,"55a880fa",null));$.options.__file="Slider.vue";var I=$.exports,L=s("ec24"),P=s.n(L),M={name:"home",components:{Slider:I,Banner:P.a},data:function(){return{user:null,shops:[]}},methods:{getProducts:function(){var e=this;this.$db.collection("products").get().then(function(t){t.forEach(function(t){e.shops.push(t.data())}),console.log(e.shops)})},getUser:function(){}},mounted:function(){console.log(this.$store.state),this.getProducts()}},N=M,T=(s("48fc"),Object(d["a"])(N,g,v,!1,null,"be78f4ca",null));T.options.__file="Home.vue";var B=T.exports;n["default"].use(j["a"]);var F=new j["a"]({routes:[{path:"/",name:"home",component:B},{path:"/signin",name:"signin",component:function(){return s.e("chunk-bbc8077e").then(s.bind(null,"4a33"))}},{path:"/dashboard",name:"dashboard",component:function(){return s.e("chunk-8a605c6a").then(s.bind(null,"7277"))}},{path:"/check",name:"check",component:function(){return s.e("chunk-50fe2437").then(s.bind(null,"83d7"))}}]}),R=(s("8615"),s("57e7"),s("c5f6"),s("28a5"),s("7514"),s("96cf"),s("1da1")),U=(s("f751"),s("7f7f"),s("2f62"));n["default"].use(U["a"]);var A=new U["a"].Store({state:{isLogin:!1,userId:null,userEmail:null,userName:null,isHost:!1,isBought:!1,products:[],SYSTEMINFO:{hasNews:null,isHotfix:null,isRandoming:null,isPreparing:null,isNotifyToRandom:null,isNotifyRandomed:null,hasNewFeature:null}},mutations:{setProducts:function(e,t){for(var s=0;s<e.products.length;s++)if(console.log(e.products[s]),t.id===e.products[s].id)return void(e.products[s].num=t.num);e.products.push({id:t.id,num:t.num})},setAllProducts:function(e,t){e.products=t},setIsLogin:function(e,t){e.isLogin=t},setUserInfo:function(e,t){e.userName=t.name,e.userId=t.id,e.isBought=t.list.length>0,e.products=e.isBought?t.list:[]},setUserEmail:function(e,t){e.userEmail=t,e.isHost="host@gmail.com"===e.userEmail},setSystemInfo:function(e,t){Object.assign(e.SYSTEMINFO,t)}},actions:{loginUser:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(t,s){var n,a,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit;try{a=s.name,r=s.email,o=s.list,c=s.id,n("setUserInfo",{name:a,list:o,id:c}),n("setUserEmail",r),n("setIsLogin",!0)}catch(i){console.log(i)}case 2:case"end":return e.stop()}},e,this)}));function t(t,s){return e.apply(this,arguments)}return t}(),updateStoreData:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(t,s){var n,a,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,e.prev=1,a=s.userData,n("setUserInfo",a),n("setUserEmail",s.userEmail),""===a.cur_thread){e.next=11;break}return r=a.cur_thread.split("-").find(function(e){return e!=a.id}),e.next=9,s.vm.$db.collection("users").where("id","==",Number(r)).get();case 9:o=e.sent,n("setPartnerInfo",o.docs[0].data());case 11:n("setIsLogin",s.isLogin),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),console.log(e.t0);case 17:case"end":return e.stop()}},e,this,[[1,14]])}));function t(t,s){return e.apply(this,arguments)}return t}(),fetchSystemInfo:function(){var e=Object(R["a"])(regeneratorRuntime.mark(function e(t,s){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,s.$db.collection("globalVariable").doc("SYSTEMINFO").get();case 4:a=e.sent,-1!=Object.values(s.$store.state.SYSTEMINFO).indexOf(null)&&s.$db.collection("globalVariable").doc("SYSTEMINFO").onSnapshot(function(e){n("setSystemInfo",e.data()),console.log("[Info]: System info updated.")}),n("setSystemInfo",a.data()),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.error("[Error]: Fetch System Info Failed.");case 12:case"end":return e.stop()}},e,this,[[1,9]])}));function t(t,s){return e.apply(this,arguments)}return t}()}}),H=s("5c96"),q=s.n(H),D=(s("0fae"),s("59ca"));s("e71f"),s("ea7b");var Y=s("c1df"),V=s("bc3a");s("8934"),D.initializeApp({apiKey:"AIzaSyBBDvVW3Vc1P2kz7waCEe51-jZRCB0PlMs",authDomain:"kga-food-week.firebaseapp.com",databaseURL:"https://kga-food-week.firebaseio.com",projectId:"kga-food-week",storageBucket:"kga-food-week.appspot.com",messagingSenderId:"369225492625"}),n["default"].prototype.$firebase=D,n["default"].prototype.$db=D.firestore(),n["default"].prototype.$cloudFunction=D.app().functions("asia-northeast1"),n["default"].prototype.$moment=Y,n["default"].prototype.$axios=V,n["default"].use(q.a),n["default"].config.productionTip=!1,new n["default"]({router:F,store:A,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},"8ce8":function(e,t,s){},ae86:function(e,t,s){},aef1:function(e,t,s){},e60d:function(e,t,s){"use strict";var n=s("ae86"),a=s.n(n);a.a},e805:function(e,t,s){"use strict";var n=s("28b4"),a=s.n(n);a.a},ec24:function(e,t,s){e.exports=s.p+"img/banner.a4badb06.png"}});
//# sourceMappingURL=app.4f09e187.js.map