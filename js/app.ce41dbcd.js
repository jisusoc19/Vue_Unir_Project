(function(){"use strict";var n={3698:function(n,e,t){var a=t(3751),r=t(641);function o(n,e,t,a,o,i){const l=(0,r.g2)("hellomain"),u=(0,r.g2)("grafica");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l,{msg:"Jesus David Ocampo Callejas"}),(0,r.bF)(u,{msg:"Hola"})],64)}var i=t(33),l=t.p+"img/jesus.f86b7d75.jpg";const u=n=>((0,r.Qi)("data-v-fc45e106"),n=n(),(0,r.jt)(),n),s={class:"main"},c=u((()=>(0,r.Lk)("img",{class:"imgj",src:l,alt:"Jesus DAVID "},null,-1))),p=u((()=>(0,r.Lk)("h2",null,"Podras registrar cualquier pago que tengas",-1))),d=u((()=>(0,r.Lk)("ul",{class:"intro"},[(0,r.Lk)("li",null,"Para ingresar monto que debas, ingresa el numero en positivo"),(0,r.Lk)("li",{class:"ejemplito"},'Ejemplo de ingreso "Descripción" :"Pago de luz" "Monto" : "40000"'),(0,r.Lk)("li",null,"Para ingresar monto que ya pagaste, ingresa el numero en negativo"),(0,r.Lk)("li",{class:"ejemplito"},'Ejemplo de ingreso "Descripción" :"Pago de luz realizado" "Monto" : "-40000"')],-1))),m={class:"regispago"},f=u((()=>(0,r.Lk)("h2",null,"Registrar Pago",-1))),g=u((()=>(0,r.Lk)("button",{type:"submit"},"Añadir",-1))),v=u((()=>(0,r.Lk)("h2",null,"Lista de Pagos",-1))),y={class:"totalP"},h=u((()=>(0,r.Lk)("h2",null,"Total Pagos:",-1)));function b(n,e,t,o,l,u){return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("h1",null,(0,i.v_)(t.msg),1),c,(0,r.Lk)("section",null,[p,d,(0,r.Lk)("section",m,[f,(0,r.Lk)("form",{onSubmit:e[2]||(e[2]=(0,a.D$)(((...n)=>u.addPayment&&u.addPayment(...n)),["prevent"]))},[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>l.payment.description=n),placeholder:"Descripción",required:""},null,512),[[a.Jo,l.payment.description]]),(0,r.bo)((0,r.Lk)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=n=>l.payment.amount=n),placeholder:"Monto",required:""},null,512),[[a.Jo,l.payment.amount]]),g],32)])]),(0,r.Lk)("section",null,[v,(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.payments,(n=>((0,r.uX)(),(0,r.CE)("li",{key:n.id},(0,i.v_)(n.description)+" - "+(0,i.v_)(u.formatCurrency(n.amount)),1)))),128))])]),(0,r.Lk)("section",y,[h,(0,r.Lk)("span",null,(0,i.v_)(u.formatCurrency(u.totalPayments)),1)])])}t(4114);var k={name:"HelloWorld",props:{msg:String},data(){return{payment:{description:"",amount:0},payments:[]}},computed:{totalPayments(){return this.payments.reduce(((n,e)=>n+parseFloat(e.amount)),0)}},methods:{addPayment(){this.payments.push({description:this.payment.description,amount:parseFloat(this.payment.amount)}),this.payment.description="",this.payment.amount=0},formatCurrency(n){return"$"+parseFloat(n).toFixed(2)}}},L=t(6262);const j=(0,L.A)(k,[["render",b],["__scopeId","data-v-fc45e106"]]);var P=j;const C=n=>((0,r.Qi)("data-v-311f3b62"),n=n(),(0,r.jt)(),n),O=C((()=>(0,r.Lk)("h1",null,"Hola, aquí va la gráfica",-1))),w={ref:"myChart"};function _(n,e,t,a,o,i){return(0,r.uX)(),(0,r.CE)("div",null,[O,(0,r.Lk)("div",null,[(0,r.Lk)("canvas",w,null,512)])])}var E=t(953),F=t(8293),x={name:"grafico",setup(){const n=(0,E.KR)(null);return(0,r.sV)((()=>{const e=n.value.getContext("2d");new F.Ay(e,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})})),{canvasRef:n}}};const A=(0,L.A)(x,[["render",_],["__scopeId","data-v-311f3b62"]]);var q=A,D={name:"App",components:{hellomain:P,grafica:q}};const V=(0,L.A)(D,[["render",o]]);var X=V;(0,a.Ef)(X).mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return n[a].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<n.length;c++){a=n[c][0],r=n[c][1],o=n[c][2];for(var l=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](a[u])}))?a.splice(u--,1):(l=!1,o<i&&(i=o));if(l){n.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[a,r,o]}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/Vue_Unir_Project/"}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var r,o,i=a[0],l=a[1],u=a[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var c=u(t)}for(e&&e(a);s<i.length;s++)o=i[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(c)},a=self["webpackChunktrabjounir"]=self["webpackChunktrabjounir"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(3698)}));a=t.O(a)})();
//# sourceMappingURL=app.ce41dbcd.js.map