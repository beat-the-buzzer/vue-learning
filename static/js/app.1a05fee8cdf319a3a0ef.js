webpackJsonp([1],{BxS2:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App"},a,!1,function(e){n("na0T")},null,null).exports,o=n("/ocq"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("\n  "+this._s(this.content)+"\n  "),t("span",{staticClass:"delete",on:{click:this.handleDelete}},[this._v("点击删除")])])},staticRenderFns:[]};var l={components:{"todo-item":n("VU/8")({name:"TodoItem",props:["content","index"],methods:{handleDelete:function(){this.$emit("delete",this.index)}}},s,!1,function(e){n("bvSW")},"data-v-3c79d7ee",null).exports},data:function(){return{inputValue:"",list:[]}},methods:{handleSubmit:function(){this.list.push(this.inputValue),this.inputValue=""},handleDelete:function(e){this.list.splice(e,1)}},computed:{remainNum:function(){return this.list.length}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.handleSubmit}},[e._v("提交")])]),e._v(" "),n("ul",e._l(e.list,function(t,i){return n("todo-item",{key:i,attrs:{content:t,index:i},on:{delete:e.handleDelete}})}),1),e._v(" "),n("p",[e._v(e._s(e.remainNum)+" item(s) unfinished")])])},staticRenderFns:[]};var c=n("VU/8")(l,r,!1,function(e){n("BxS2")},"data-v-a4343c4e",null).exports;i.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"todolist",component:c}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:u},template:"<App/>"})},bvSW:function(e,t){},na0T:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1a05fee8cdf319a3a0ef.js.map