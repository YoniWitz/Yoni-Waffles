(function(e){function t(t){for(var n,s,l=t[0],o=t[1],d=t[2],u=0,c=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&c.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(c.length)c.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,l=1;l<i.length;l++){var o=i[l];0!==r[o]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=o;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0a02":function(e,t,i){"use strict";var n=i("8cad"),r=i.n(n);r.a},4272:function(e,t,i){"use strict";var n=i("6d33"),r=i.n(n);r.a},4358:function(e,t,i){"use strict";var n=i("6f23"),r=i.n(n);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("NavBar")],1),i("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navbar"},[i("nav",{staticClass:"nav-extended indogo darken-2"},[i("div",{staticClass:"nav-content"},[i("router-link",{attrs:{to:{name:"index"}}},[i("span",{staticClass:"nav-title"},[e._v("Yoni Waffles")])]),i("a",{staticClass:"btn-floating btn-larger halfway-fab pink",attrs:{href:""}},[i("router-link",{attrs:{to:{name:"addWaffle"}}},[i("i",{staticClass:"material-icons"},[e._v("add")])])],1)],1)])])},l=[],o={name:"navbar"},d=o,f=(i("4358"),i("2877")),u=Object(f["a"])(d,s,l,!1,null,"fc00d662",null),c=u.exports,p={components:{NavBar:c}},g=p,m=Object(f["a"])(g,r,a,!1,null,null,null),v=m.exports,h=i("8c4f"),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index container"},e._l(e.waffles,(function(t){return i("div",{key:t.id,staticClass:"card"},[i("div",{staticClass:"card-content"},[i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteWaffle(t.id)}}},[e._v("delete")]),i("i",{staticClass:"material-icons edit",on:{click:function(i){return e.editWaffle(t.slug)}}},[e._v("edit")]),i("h2",{staticClass:"indigo-text"},[e._v(e._s(t.title))]),i("ul",{staticClass:"ingredients"},e._l(t.ingredients,(function(t,n){return i("li",{key:n},[i("span",{staticClass:"chip"},[e._v(e._s(t))])])})),0)])])})),0)},_=[],w=(i("4de4"),i("4160"),i("159b"),i("8aa5")),y=i.n(w),x=(i("e71f"),{apiKey:"AIzaSyBtCTuZH25isuRsMN0HxpBWErscsFfALao",authDomain:"yonis-waffles.firebaseapp.com",databaseURL:"https://yonis-waffles.firebaseio.com",projectId:"yonis-waffles",storageBucket:"yonis-waffles.appspot.com",messagingSenderId:"495772541801",appId:"1:495772541801:web:5653bc7e748da9995213f8"}),k=y.a.initializeApp(x),C=k.firestore(),W={name:"index",data:function(){return{msg:"Welcome to Your Vue.js App",waffles:[]}},methods:{deleteWaffle:function(e){var t=this;C.collection("waffles").doc(e).delete().then((function(){t.waffles=t.waffles.filter((function(t){return t.id!=e}))}))},editWaffle:function(e){this.$router.push({name:"editWaffle",params:{waffle_slug:e}})}},created:function(){var e=this;C.collection("waffles").get().then((function(t){t.forEach((function(t){var i=t.data();i.id=t.id,e.waffles.push(i)}))})).catch((function(e){console.log(e)}))}},I=W,$=(i("e2ee"),Object(f["a"])(I,b,_,!1,null,"49f3df31",null)),O=$.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add-waffle"},[i("form",{on:{reset:e.resetFields,submit:function(t){return t.preventDefault(),e.addWaffle(t)}}},[i("h2",[e._v("Add Waffle Recipe")]),i("div",{staticClass:"form-row"},[i("div",{staticClass:"form-field title"},[i("label",{attrs:{for:"title"}},[e._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text",id:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"form-field add-ingredient"},[i("label",{attrs:{for:"ingredient"}},[e._v("Add Ingredient (press tab to add)")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.ingredient,expression:"ingredient",modifiers:{trim:!0}}],attrs:{type:"text",id:"ingredients"},domProps:{value:e.ingredient},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIngredient(t))},input:function(t){t.target.composing||(e.ingredient=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._l(e.ingredients,(function(t,n){return i("div",{key:n,staticClass:"form-field"},[i("label",{attrs:{for:"ingredient"}},[e._v("Ingredient "+e._s(e._f("indexPlus")(n)))]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.ingredients[n],expression:"ingredients[index]",modifiers:{trim:!0}}],attrs:{type:"text",id:"ingredient"},domProps:{value:e.ingredients[n]},on:{input:function(t){t.target.composing||e.$set(e.ingredients,n,t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteIngredient(t)}}},[e._v("delete")])])}))],2),e.feedback?i("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),i("div",{staticClass:"form-field action-buttons"},[i("button",{staticClass:"reset",attrs:{type:"reset"}},[e._v("Reset")]),i("button",{attrs:{type:"submit",disabled:!e.formIsValid}},[e._v("Add Waffle")])])])])},j=[],A=i("3666"),E=i.n(A),N={name:"addWaffle",data:function(){return{title:"",ingredient:"",ingredients:[],feedback:"",slug:""}},methods:{resetFields:function(){this.title="",this.ingredients=[],this.ingredient="",this.feedback=""},addWaffle:function(){this.slug=E()(this.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),C.collection("waffles").add({title:this.title,ingredients:this.ingredients,slug:this.slug}).then(this.$router.push({name:"index"})).catch((function(e){console.log(e)})),this.resetFields()},addIngredient:function(){this.ingredient?(this.ingredients.push(this.ingredient),this.ingredient="",this.feedback=""):this.feedback="must enter ingredient value"},deleteIngredient:function(e){this.ingredients=this.ingredients.filter((function(t){return t!==e}))}},computed:{formIsValid:function(){return this.title&&this.ingredients.length>0}},filters:{indexPlus:function(e){return e+1}}},S=N,T=(i("0a02"),Object(f["a"])(S,P,j,!1,null,"1eec78ba",null)),F=T.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"edit-waffle container"},[i("form",{on:{reset:e.resetFields,submit:function(t){return t.preventDefault(),e.saveWaffle(t)}}},[i("h2",[e._v("Edit A Waffle")]),i("div",{staticClass:"form-row"},[i("div",{staticClass:"form-field title"},[i("label",{attrs:{for:"title"}},[e._v("Waffle Title")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text",id:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"form-field add-ingredient"},[i("label",{attrs:{for:"ingredient"}},[e._v("Add Ingredient (press tab to add)")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.ingredient,expression:"ingredient",modifiers:{trim:!0}}],attrs:{type:"text",id:"ingredients"},domProps:{value:e.ingredient},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.addIngredient(t))},input:function(t){t.target.composing||(e.ingredient=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._l(e.ingredients,(function(t,n){return i("div",{key:n,staticClass:"form-field"},[i("label",{attrs:{for:"ingredient"}},[e._v("Ingredient "+e._s(e._f("indexPlus")(n)))]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.ingredients[n],expression:"ingredients[index]",modifiers:{trim:!0}}],attrs:{type:"text",id:"ingredient"},domProps:{value:e.ingredients[n]},on:{input:function(t){t.target.composing||e.$set(e.ingredients,n,t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),i("i",{staticClass:"material-icons delete",on:{click:function(i){return e.deleteIngredient(t)}}},[e._v("delete")])])}))],2),e.feedback?i("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),i("div",{staticClass:"form-field action-buttons"},[i("button",{staticClass:"reset",attrs:{type:"reset"}},[e._v("Reset")]),i("button",{attrs:{type:"submit",disabled:!e.formIsValid}},[e._v("Save Waffle")])])])])},B=[],D={name:"editWaffle",data:function(){return{slug:this.$route.params.waffle_slug,ingredient:"",feedback:"",title:"",ingredients:[]}},created:function(){var e=this;C.collection("waffles").where("slug","==",this.slug).get().then((function(t){t.forEach((function(t){e.title=t.data().title,e.ingredients=t.data().ingredients,e.id=t.id}))})).catch((function(e){console.log(e)}))},methods:{saveWaffle:function(){this.slug=E()(this.title,{replacement:"-",remove:/[$*_+~.()'"!\-:@]/g,lower:!0}),C.collection("waffles").doc(this.id).update({title:this.title,ingredients:this.ingredients,slug:this.slug}).then(this.$router.push({name:"index"})).catch((function(e){console.log(e)})),this.resetFields()},resetFields:function(){this.title="",this.ingredients=[],this.ingredient="",this.feedback=""},addIngredient:function(){this.ingredient?(this.ingredients.push(this.ingredient),this.ingredient="",this.feedback=""):this.feedback="must enter ingredient value"},deleteIngredient:function(e){this.ingredients=this.ingredients.filter((function(t){return t!==e}))}},computed:{formIsValid:function(){return this.title&&this.ingredients.length>0}},filters:{indexPlus:function(e){return e+1}}},M=D,R=(i("4272"),Object(f["a"])(M,U,B,!1,null,"36fe85ac",null)),V=R.exports;n["a"].use(h["a"]);var z=[{path:"/",name:"index",component:O},{path:"/add-waffle",name:"addWaffle",component:F},{path:"/edit-waffle/:waffle_slug",name:"editWaffle",component:V}],H=new h["a"]({mode:"history",base:"/",routes:z}),J=H;n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(e){return e(v)}}).$mount("#app")},"6d33":function(e,t,i){},"6f23":function(e,t,i){},7016:function(e,t,i){},"8cad":function(e,t,i){},e2ee:function(e,t,i){"use strict";var n=i("7016"),r=i.n(n);r.a}});
//# sourceMappingURL=app.6d0a8faa.js.map