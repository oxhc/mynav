(function(){var t={6093:function(t,e,n){"use strict";var a=n(9242),r=n(3396);const o=(0,r.Uk)("刷新"),s={class:"container"},i={class:"dialog-footer"},l=(0,r.Uk)(" Confirm ");function u(t,e,n,a,u,c){const p=(0,r.up)("el-button"),d=(0,r.up)("Dir_web"),f=(0,r.up)("Nav_web"),v=(0,r.up)("el-input"),m=(0,r.up)("el-form-item"),g=(0,r.up)("el-form"),h=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[(0,r.Wm)(p,{onClick:c.fresh,type:"primary"},{default:(0,r.w5)((()=>[o])),_:1},8,["onClick"])]),(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.nav_data.filter((t=>"dir"===t.type)),((t,e)=>((0,r.wg)(),(0,r.j4)(d,{class:"item",key:e,dir:t},null,8,["dir"])))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.nav_data.filter((t=>"a"===t.type)),((t,e)=>((0,r.wg)(),(0,r.j4)(f,{class:"item",key:e,nav:t},null,8,["nav"])))),128)),(0,r.Wm)(h,{fullscreen:"","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,modelValue:u.showInputPassDialog,"onUpdate:modelValue":e[1]||(e[1]=t=>u.showInputPassDialog=t),title:"请输入密码"},{footer:(0,r.w5)((()=>[(0,r._)("span",i,[(0,r.Wm)(p,{type:"primary",onClick:c.comfirm_pass},{default:(0,r.w5)((()=>[l])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{label:"密码"},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{type:"password",modelValue:u.pass,"onUpdate:modelValue":e[0]||(e[0]=t=>u.pass=t)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])}var c=n(8082),p=n.n(c),d={decrypt(t,e,n){const a=p().enc.Utf8.parse(e),r=p().enc.Utf8.parse(n),o=p().AES.decrypt(t,a,{iv:r,mode:p().mode.CBC,padding:p().pad.Pkcs7}).toString(p().enc.Utf8);return o},encrypt(t,e,n){const a=p().enc.Utf8.parse(e),r=p().enc.Utf8.parse(n),o=p().AES.encrypt(t,a,{iv:r,mode:p().mode.CBC,padding:p().pad.Pkcs7});return o.toString()}},f=n(9702),v=n.n(f),m=n(7139);const g={class:"dir"};function h(t,e,n,a,o,s){return(0,r.wg)(),(0,r.iD)("div",g," dir: "+(0,m.zw)(n.dir.title),1)}var _={name:"Dir_web",props:["dir"]},w=n(89);const y=(0,w.Z)(_,[["render",h],["__scopeId","data-v-4341cfa9"]]);var b=y;function k(t,e,n,a,o,s){return(0,r.wg)(),(0,r.iD)("div",{class:"nav",onClick:e[0]||(e[0]=(...t)=>s.open_nav&&s.open_nav(...t))}," nav: "+(0,m.zw)(n.nav.title),1)}var D={name:"Nav_web",props:["nav"],methods:{open_nav(){window.open(this.nav.url,"_blank")}}};const O=(0,w.Z)(D,[["render",k],["__scopeId","data-v-7224d5de"]]);var C=O,I={name:"App",components:{Nav_web:C,Dir_web:b},data(){return{nav_data:[],pass:"",showInputPassDialog:!1}},methods:{fresh(){localStorage.removeItem("nav_data"),this.startup()},get_navData(t,e){let n=localStorage.getItem("nav_data");null!=n?(this.$message.success("已从localstorage中获取数据"),t(JSON.parse(n))):e()},get_pass(t,e){let n=localStorage.getItem("pass");null!=n?(this.$message.success("已从localstorage中获取密码"),t(n)):e()},get_data(t){fetch("./data.json.pub").then((t=>t.text())).then((e=>{let n="";try{n=d.decrypt(e,v()(t),v()(v()(t)))}catch(r){return console.log(t),void this.$message.error("密码错误, 请重试")}this.showInputPassDialog=!1;let a=JSON.parse(n);this.nav_data=a.itemList[0].itemList,localStorage.setItem("nav_data",JSON.stringify(this.nav_data)),localStorage.setItem("pass",t),this.$message.success("获取远程数据成功")}))},input_pass(){this.showInputPassDialog=!0},comfirm_pass(){this.get_data(this.pass)},startup(){this.get_navData((t=>{this.nav_data=t}),(()=>{this.get_pass((t=>{this.get_data(t)}),(()=>{this.input_pass()}))}))}},created(){this.startup()}};const S=(0,w.Z)(I,[["render",u]]);var j=S,P=n(837);n(4415);const U=(0,a.ri)(j);U.use(P.Z),U.mount("#app")},2480:function(){}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,r,o){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,s=a[0],i=a[1],l=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var c=l(n)}for(e&&e(a);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkmynav"]=self["webpackChunkmynav"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6093)}));a=n.O(a)})();
//# sourceMappingURL=app.03d9f11d.js.map