(function(t){function e(e){for(var c,a,s=e[0],l=e[1],r=e[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(c=!1)}c&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},o={app:0},i=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var r=0;r<s.length;r++)e(s[r]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d76":function(t,e,n){"use strict";n("96cd")},"0f41":function(t,e,n){"use strict";n("5def")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(t,e,n,o,i,a){var s=Object(c["h"])("main_content");return Object(c["e"])(),Object(c["b"])(s,{onTouchmove:a.backdrop,status:i.status},null,8,["onTouchmove","status"])}var i={class:"container"},a={class:"content"},s=Object(c["d"])("header",null,[Object(c["d"])("h1",null,"Калькулятор стоимости татуировки"),Object(c["d"])("p",null,"Калькулятор расчитывает примерную стоимость таутеровки")],-1),l={class:"form"};function r(t,e,n,o,r,d){var u=Object(c["h"])("selectSize"),f=Object(c["h"])("delectPleace"),h=Object(c["h"])("width"),p=Object(c["h"])("height"),b=Object(c["h"])("result");return Object(c["e"])(),Object(c["b"])("div",i,[Object(c["d"])("div",a,[s,Object(c["d"])("div",l,[Object(c["d"])(u,{onChoice:d.mathCollor},null,8,["onChoice"]),Object(c["d"])(f,{onChoice:d.mathPleace,statData:r.statData},null,8,["onChoice","statData"]),Object(c["d"])(h,{onEnd:d.mathWidth},null,8,["onEnd"]),Object(c["d"])(p,{onEnd:d.mathHeight},null,8,["onEnd"])]),Object(c["d"])(b)])])}var d={class:"form_elemetn"},u=Object(c["d"])("p",null,"Выберите высоту татуировки",-1),f=Object(c["d"])("input",{type:"range",min:"0",max:"100",id:"line",value:"0"},null,-1),h={class:"center"};function p(t,e,n,o,i,a){return Object(c["e"])(),Object(c["b"])("div",d,[u,f,Object(c["d"])("div",h,[Object(c["d"])("input",{type:"number",value:i.heightTatoo},null,8,["value"])])])}var b={data:function(){return{heightTatoo:0,x:0}},methods:{touch:function(t){this.x=t.changedTouches[0].pageX-t.target.offsetLeft},move:function(t){t.target.style.left=t.changedTouches[0].pageX-this.x+"px",t.target.offsetLeft<0&&(t.target.style.left="0px"),t.target.offsetLeft>t.target.parentElement.offsetWidth-t.target.offsetWidth&&(t.target.style.left=t.target.parentElement.offsetWidth-t.target.offsetWidth+"px"),this.heightTatoo=Math.round(t.target.offsetLeft),this.$emit("end",this.heightTatoo)}}};n("f61a");b.render=p;var j=b,O={class:"form_elemetn"},g=Object(c["d"])("p",null,"Выберите ширину татуировки",-1),v=Object(c["d"])("input",{type:"range",min:"0",max:"100",id:"line",value:"0"},null,-1),m={class:"center"};function y(t,e,n,o,i,a){return Object(c["e"])(),Object(c["b"])("div",O,[g,v,Object(c["d"])("div",m,[Object(c["d"])("input",{type:"number",value:i.widthTattoo},null,8,["value"])])])}var C={data:function(){return{drag_status:!1,widthTattoo:0,x:0}},methods:{touch:function(t){this.drag_status=!0,this.x=t.changedTouches[0].pageX-t.target.offsetLeft,console.log("touch")},move:function(t){if(!this.drag_status)return!1;t.target.style.left=t.changedTouches[0].pageX-this.x+"px",t.target.offsetLeft<0&&(t.target.style.left="0px"),t.target.offsetLeft>t.target.parentElement.offsetWidth-t.target.offsetWidth&&(t.target.style.left=t.target.parentElement.offsetWidth-t.target.offsetWidth+"px"),this.widthTattoo=Math.round(t.target.offsetLeft),this.$emit("end",this.widthTattoo)}}};C.render=y;var T=C,w=Object(c["j"])("data-v-6d641676");Object(c["g"])("data-v-6d641676");var k={class:"form_elemetn"},x=Object(c["d"])("p",null,"Выберите цветность татуировки",-1),_={class:"selectContainer"},D=Object(c["d"])("i",{class:"fas fa-sort-down"},null,-1),P=Object(c["d"])("div",{class:"border"},null,-1),L=Object(c["d"])("div",{class:"border"},null,-1);Object(c["f"])();var W=w((function(t,e,n,o,i,a){return Object(c["e"])(),Object(c["b"])("div",k,[x,Object(c["d"])("div",_,[Object(c["d"])("div",{class:"select",onClick:e[1]||(e[1]=function(){return a.chenge&&a.chenge.apply(a,arguments)})},[Object(c["d"])("p",null,Object(c["i"])(i.please),1),D]),Object(c["d"])("div",{class:["popUp",{done:i.invisible}]},[Object(c["d"])("p",{onClick:e[2]||(e[2]=function(){return a.select&&a.select.apply(a,arguments)}),id:"1"},"Однотонная"),P,Object(c["d"])("p",{onClick:e[3]||(e[3]=function(){return a.select&&a.select.apply(a,arguments)}),id:"1.1"},"2 цвета"),L,Object(c["d"])("p",{onClick:e[4]||(e[4]=function(){return a.select&&a.select.apply(a,arguments)}),id:"1.2"},"3 и более цвета")],2)])])})),E={data:function(){return{invisible:!1,please:"Цвет"}},methods:{chenge:function(){this.invisible=!this.invisible},select:function(t){this.please=t.target.innerHTML,this.chenge(),this.$emit("choice",t.target.id)}}};n("e702");E.render=W,E.__scopeId="data-v-6d641676";var M=E,S=Object(c["j"])("data-v-60042f0e");Object(c["g"])("data-v-60042f0e");var H={class:"form_elemetn"},X=Object(c["d"])("p",null,"Выберите место нанесения",-1),$={class:"selectContainer"},z=Object(c["d"])("i",{class:"fas fa-sort-down"},null,-1),I=Object(c["d"])("div",{class:"border"},null,-1),J=Object(c["d"])("div",{class:"border"},null,-1),U=Object(c["d"])("div",{class:"border"},null,-1),A=Object(c["d"])("div",{class:"border"},null,-1),q=Object(c["d"])("div",{class:"border"},null,-1),B=Object(c["d"])("div",{class:"border"},null,-1),F=Object(c["d"])("div",{class:"border"},null,-1);Object(c["f"])();var G=S((function(t,e,n,o,i,a){return Object(c["e"])(),Object(c["b"])("div",H,[X,Object(c["d"])("div",$,[Object(c["d"])("div",{class:"select",onClick:e[1]||(e[1]=function(){return a.chenge&&a.chenge.apply(a,arguments)})},[Object(c["d"])("p",null,Object(c["i"])(i.please),1),z]),Object(c["d"])("div",{class:["popUp",{done:i.invisible,statData:i.bacground}]},[Object(c["d"])("p",{onClick:e[2]||(e[2]=function(){return a.select&&a.select.apply(a,arguments)}),id:"31"},"Шея/ за ухом"),I,Object(c["d"])("p",{onClick:e[3]||(e[3]=function(){return a.select&&a.select.apply(a,arguments)}),id:"30"},"Клюяица / грудь"),J,Object(c["d"])("p",{onClick:e[4]||(e[4]=function(){return a.select&&a.select.apply(a,arguments)}),id:"27"},"Ребра/ живот"),U,Object(c["d"])("p",{onClick:e[5]||(e[5]=function(){return a.select&&a.select.apply(a,arguments)}),id:"25"},"Спина"),A,Object(c["d"])("p",{onClick:e[6]||(e[6]=function(){return a.select&&a.select.apply(a,arguments)}),id:"25"},"Плечо / прелплечье"),q,Object(c["d"])("p",{onClick:e[7]||(e[7]=function(){return a.select&&a.select.apply(a,arguments)}),id:"31"},"кисть / пальцы"),B,Object(c["d"])("p",{onClick:e[8]||(e[8]=function(){return a.select&&a.select.apply(a,arguments)}),id:"25"},"бедро/ голень"),F,Object(c["d"])("p",{onClick:e[9]||(e[9]=function(){return a.select&&a.select.apply(a,arguments)}),id:"31"},"Ступня")],2)])])})),K={props:["statData"],data:function(){return{invisible:!1,please:"Место нанесения",bacground:!1}},methods:{chenge:function(){this.invisible=!this.invisible},select:function(t){this.please=t.target.innerHTML,this.chenge(),this.$emit("choice",t.target.id)},backdrop:function(){return console.log(this.statData),this.statData}},watch:{statData:function(){this.bacground=this.statData,console.log("this is select page")}}};n("0d76");K.render=G,K.__scopeId="data-v-60042f0e";var N=K,Q={class:"result"},R=Object(c["c"])(" Стоимость");function V(t,e){return Object(c["e"])(),Object(c["b"])("div",Q,[Object(c["d"])("p",null,[R,Object(c["d"])("span",null,"Высота"+Object(c["i"])(t.heightTattoo)+" Ширина "+Object(c["i"])(t.widthTattoo),1)])])}const Y={};Y.render=V;var Z=Y,tt={components:{height:j,width:T,selectSize:M,delectPleace:N,result:Z},data:function(){return{widthTattoo:0,heightTattoo:0,choiceCollor:0,choiceplace:0,statData:""}},methods:{mathWidth:function(t){this.widthTattoo=t},mathHeight:function(t){this.heightTattoo=t},mathCollor:function(t){this.choiceCollor=t,console.log(this.choiceCollor)},mathPleace:function(t){this.choiceplace=t,console.log(this.choiceplace)}},computed:{all:function(){}},watch:{status:function(){this.statData=this.status,console.log(this.status),console.log("this is main page")}},props:["status"]};n("0f41");tt.render=r;var et=tt,nt={data:function(){return{status:!1}},name:"App",components:{main_content:et},methods:{backdrop:function(){console.log("backdrop"),this.status=!this.status}}};n("9cd1");nt.render=o;var ct=nt;Object(c["a"])(ct).mount("#app")},"5def":function(t,e,n){},"66b9":function(t,e,n){},"96cd":function(t,e,n){},"9cd1":function(t,e,n){"use strict";n("c8ed")},c8c3:function(t,e,n){},c8ed:function(t,e,n){},e702:function(t,e,n){"use strict";n("c8c3")},f61a:function(t,e,n){"use strict";n("66b9")}});
//# sourceMappingURL=app.bd1812a3.js.map