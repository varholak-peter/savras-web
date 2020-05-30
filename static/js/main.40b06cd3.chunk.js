(this["webpackJsonpsavras-web"]=this["webpackJsonpsavras-web"]||[]).push([[0],{16:function(n,e,t){n.exports=t(25)},25:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=t(1),u=t(2);function l(){var n=Object(u.a)([""]);return l=function(){return n},n}var f=i.c.div(l()),s=t(3),m=t.n(s),b=t(5),h=t(8),p=function(){var n=Object(b.a)(m.a.mark((function n(){var e,t,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e="https://savras-api.herokuapp.com/"){n.next=3;break}throw new Error("REACT_APP_ENDPOINT must be present");case 3:return n.next=5,fetch(e);case 5:return t=n.sent,n.next=8,t.json();case 8:return r=n.sent,n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function d(){var n=Object(u.a)(["\n  background-color: white;\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem;\n  position: relative;\n"]);return d=function(){return n},n}function v(){var n=Object(u.a)(["\n  color: black;\n  display: -webkit-box;\n  font-size: 0.9rem;\n  line-height: 1.2;\n  margin-bottom: 0.4rem;\n  max-width: calc(100% - 2rem);\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]);return v=function(){return n},n}function g(){var n=Object(u.a)(["\n  color: #666666;\n  font-size: 0.6rem;\n  font-weight: 400;\n"]);return g=function(){return n},n}function w(){var n=Object(u.a)(["\n  color: #666666;\n  font-size: 0.6rem;\n  font-weight: 400;\n  margin-left: 0.2rem;\n\n  &:before {\n    content: '\u2022';\n    margin-right: 0.2rem;\n  }\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return E=function(){return n},n}function j(){var n=Object(u.a)(["\n  color: #333333;\n  display: -webkit-box;\n  font-size: 0.7rem;\n  font-weight: 400;\n  margin: 0;\n  max-height: 3.9rem;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: row;\n"]);return O=function(){return n},n}function k(){var n=Object(u.a)(["\n  text-decoration: none;\n"]);return k=function(){return n},n}function x(){var n=Object(u.a)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 0.5rem 0.4rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);return x=function(){return n},n}function y(){var n=Object(u.a)(["\n  color: #666666;\n  font-size: 0.6rem;\n  font-weight: 400;\n  margin-left: auto;\n"]);return y=function(){return n},n}var z=i.c.span(y()),F=i.c.button(x()),C=i.c.a(k()),S=i.c.div(O()),N=i.c.p(j()),P=i.c.footer(E()),T=i.c.span(w()),_=i.c.time(g()),A=i.c.strong(v()),D=i.c.div(d()),I=function(n){var e=n.author,t=n.description,r=n.onClose,o=n.source,c=n.time,i=n.title,u=n.url;return a.a.createElement(D,null,a.a.createElement(S,null,a.a.createElement(C,{href:u,target:"_blank"},a.a.createElement(A,null,i),a.a.createElement(N,null,t)),a.a.createElement(F,{onClick:r,type:"button"},"X")),a.a.createElement("hr",null),a.a.createElement(P,null,a.a.createElement(_,null,c),a.a.createElement(T,null,o),a.a.createElement(z,null,e)))},J=t(7),L=t.n(J),B=t(15),R=t.n(B);L.a.extend(R.a);var X=function(n){return n.map((function(n){var e=n.author,t=n.date,r=n.description,a=n.id,o=n.source,c=n.title,i=n.url;return{author:e,description:r,id:a,source:o,time:L()(t).fromNow(!0),title:c,url:i}}))};function q(){var n=Object(u.a)(["\n  padding: 0 0.5rem;\n"]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n  font-size: 1.6rem;\n  font-weight: 300;\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  color: white;\n  margin: 0.25rem 0.75rem;\n"]);return K=function(){return n},n}var M=i.c.h1(K()),Q=i.c.span(H()),U=i.c.span(G()),V=i.c.div(q()),W=function(){var n=Object(r.useState)("Loading..."),e=Object(h.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),i=Object(h.a)(c,2),u=i[0],l=i[1];return Object(r.useEffect)((function(){(function(){var n=Object(b.a)(m.a.mark((function n(){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:e=n.sent,l(X(e)),o("");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()().catch((function(n){o(String(n))}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement(M,null,a.a.createElement(Q,null,"S"),a.a.createElement(U,null,"avras"))),a.a.createElement(V,null,t||u.map((function(n){return a.a.createElement(I,Object.assign({key:n.id},n,{onClose:function(){return function(n){var e="https://savras-api.herokuapp.com/";fetch("".concat(e,"/").concat(n),{method:"DELETE"}).catch((function(n){throw new Error(n)}))}(n.id)}}))}))))};t(24);function Y(){var n=Object(u.a)(["\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n    font-family: sans-serif;\n    font-size: 125%;\n    height: 100%;\n  }\n\n  body {\n    background-color: #42aaf4;\n    font-size: 0.8rem;\n    height: 100%;\n  }\n\n  #root {\n    height: 100%;\n    width: 100%;\n  }\n"]);return Y=function(){return n},n}var Z=Object(i.b)(Y()),$=function(){return a.a.createElement(f,null,a.a.createElement(Z,null),a.a.createElement(W,null))},nn={color:{white:"#FFFFFF",black:"#000000"}};c.a.render(a.a.createElement(i.a,{theme:nn},a.a.createElement($,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.40b06cd3.chunk.js.map