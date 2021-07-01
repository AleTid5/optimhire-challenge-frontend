(this["webpackJsonpoptimhire-challenge-frontend"]=this["webpackJsonpoptimhire-challenge-frontend"]||[]).push([[0],{71:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(36),s=r.n(c),l=r(17),o=r(3),i=r(2),u=r(0);function d(e){var t=e.children,r=e.className,a=e.backgroundColor,n=void 0===a?"bg-gray-700":a;return Object(u.jsx)("div",{className:"relative w-full h-auto max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl p-8 rounded-lg shadow-2xl ".concat(n," ").concat(null!==r&&void 0!==r?r:""),children:t})}function j(e){var t=e.className,r=e.type,a=void 0===r?"text":r,n=e.title,c=e.value,s=e.onChange;return Object(u.jsxs)("div",{className:null!==t&&void 0!==t?t:"",children:[n&&Object(u.jsx)("div",{className:"text-gray-400 uppercase text-xs font-bold ml-3 mb-1",children:n}),Object(u.jsx)("input",{value:c,type:a,className:"bg-gray-400 rounded-xl p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent",onChange:function(e){var t=e.target.value;return s(t)},autoComplete:"off"})]})}function b(e){var t=e.className,r=e.title,a=e.onClick,n=e.type,c=void 0===n?"button":n,s=e.size,l=void 0===s?"w-full":s;return Object(u.jsx)("button",{className:"bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 py-3 rounded-lg text-gray-600 font-bold uppercase mt-8 ".concat(t," ").concat(l),onClick:a,type:c,children:r})}function m(e){var t=e.title,r=void 0===t?"Error!":t,a=e.errors,n=void 0===a?[]:a;return 0===n.length?null:Object(u.jsxs)("div",{className:"absolute top-0 right-0 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-8",role:"alert",children:[Object(u.jsx)("p",{className:"font-bold",children:r}),Object(u.jsx)("ul",{className:"list-disc ml-4",children:n.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})]})}var p=Object(a.createContext)({user:null,isUserLogged:function(){return!1},authenticate:function(e){},logout:function(){}}),f=p.Provider,x=function(e){var t=e.children,r=Object(a.useState)(null),n=Object(i.a)(r,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("user");null!==e&&s(JSON.parse(e))}),[]),Object(u.jsx)(f,{value:{user:c,isUserLogged:function(){return null!==localStorage.getItem("user")},authenticate:function(e){s(e),localStorage.setItem("user",JSON.stringify(e))},logout:function(){s(null),localStorage.removeItem("user")}},children:t})},h=function(){var e=Object(a.useContext)(p);if(!e)throw new Error("useAppContext must be used within a AppProvider");return e};function v(){var e=Object(o.f)(),t=h(),r=t.authenticate,n=t.logout,c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],p=s[1],f=Object(a.useState)(""),x=Object(i.a)(f,2),v=x[0],O=x[1],g=Object(a.useState)(""),y=Object(i.a)(g,2),w=y[0],N=y[1],C=Object(a.useState)(""),S=Object(i.a)(C,2),Y=S[0],D=S[1],k=Object(a.useState)([]),H=Object(i.a)(k,2),M=H[0],E=H[1];Object(a.useEffect)((function(){n()}),[n]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"flex items-center justify-center h-screen px-4",children:Object(u.jsxs)(d,{children:[Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)("div",{className:"absolute bg-gray-500 w-16 h-16 rounded-full -top-8"})}),Object(u.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4 mt-4",children:[Object(u.jsx)(j,{title:"Name",value:l,onChange:p}),Object(u.jsx)(j,{title:"Lastname",value:v,onChange:O}),Object(u.jsx)(j,{type:"email",title:"Email",className:"sm:col-span-2",value:w,onChange:N}),Object(u.jsx)(j,{title:"Phone Number",type:"number",className:"sm:col-span-2",value:Y,onChange:D})]}),Object(u.jsx)("div",{className:"flex justify-center",children:Object(u.jsx)(b,{className:"mt-8",size:"w-96",title:"Submit",onClick:function(){var t=[];l.length<3&&t.push("Name should have at least 3 characters"),v.length<3&&t.push("Lastname should have at least 3 characters"),function(e){return/\S+@\S+\.\S+/.test(e)}(w)||t.push("E-Mail format is invalid"),(Y.length<6||isNaN(Number(Y)))&&t.push("Phone number is invalid"),E(t),0===t.length&&(r({name:l,lastname:v,email:w,phoneNumber:Number(Y)}),e.push("/cryptocurrencies"))}})})]})}),Object(u.jsx)(m,{errors:M})]})}function O(e){var t=e.visible,r=e.title,a=e.subtitle,n=e.primaryButton,c=e.secondaryButton,s=e.icon;return t?Object(u.jsxs)("div",{className:"min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover px-4 sm:px-0",id:"modal-id",children:[Object(u.jsx)("div",{className:"absolute bg-black opacity-80 inset-0 z-0"}),Object(u.jsx)("div",{className:"w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ",children:Object(u.jsxs)("div",{className:"",children:[Object(u.jsxs)("div",{className:"text-center p-5 flex-auto justify-center",children:[s&&Object(u.jsx)("div",{className:"flex justify-center",children:s}),Object(u.jsx)("h2",{className:"text-xl font-bold py-4 ",children:r}),a&&Object(u.jsx)("p",{className:"text-sm text-gray-500 px-8",children:a})]}),Object(u.jsxs)("div",{className:"p-3  mt-2 text-center space-x-4 md:block",children:[Object(u.jsx)("button",{className:"mb-2 md:mb-0 bg-white px-5 py-2 text-xs shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 uppercase",onClick:c.action,children:c.title}),Object(u.jsx)("button",{className:"mb-2 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-xs shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-500 uppercase",onClick:n.action,children:n.title})]})]})})]}):null}function g(e){var t=e.size,r=void 0===t?24:t;return Object(u.jsx)("svg",{className:"MuiSvgIcon-root jss117 MuiSvgIcon-fontSizeLarge",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",height:r,width:r,children:Object(u.jsx)("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})})}function y(){var e=h().logout,t=Object(a.useState)(!1),r=Object(i.a)(t,2),n=r[0],c=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"grid grid-cols-3 gap-1 w-20",children:[Object(u.jsx)("div",{className:"bg-red-400 w-6 h-6 rounded-full cursor-pointer",onClick:function(){return c(!0)}}),Object(u.jsx)("div",{className:"bg-yellow-300 w-6 h-6 rounded-full cursor-pointer opacity-50",title:"Disabled feature"}),Object(u.jsx)("div",{className:"bg-green-300 w-6 h-6 rounded-full cursor-pointer opacity-50",title:"Disabled feature"})]}),Object(u.jsx)(O,{visible:n,title:"Are you sure you want to leave?",subtitle:"Do you really want to logout from your account?",primaryButton:{title:"Logout",action:e},secondaryButton:{title:"Cancel",action:function(){return c(!1)}},icon:Object(u.jsx)(g,{size:50})})]})}var w=r(11),N=function(e){return function(t){var r=Object(o.f)(),n=h(),c=n.user,s=n.isUserLogged;return Object(a.useEffect)((function(){s()||r.push("/login")}),[r,s,c]),Object(u.jsx)(e,Object(w.a)({},t))}};function C(e){var t=e.children,r=e.className,n=e.tabs,c=Object(a.useState)(0),s=Object(i.a)(c,2),l=s[0],o=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"border-b-2 border-yellow-300 ".concat(r),children:Object(u.jsx)("ul",{className:"flex cursor-pointer",children:n.map((function(e,t){return Object(u.jsx)("li",{className:"py-1.5 px-6 bg-white rounded-t-xl ml-2 font-bold ".concat(l===t?"bg-yellow-300 text-gray-600":"bg-gray-100 text-gray-500 hover:bg-yellow-100"),onClick:function(){return o(t)},children:e},t)}))})}),t[l]]})}var S,Y=r(24),D=Object(a.createContext)({results:[],lastCryptoValues:[],updateLastCryptoValues:function(){}}),k=D.Provider,H=function(e){var t=e.children,r=e.results,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],l=c[1],o=Object(a.useState)([]),d=Object(i.a)(o,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){var e=r.map((function(e,t){var r;return[].concat(Object(Y.a)(e),Object(Y.a)(null!==(r=s[t])&&void 0!==r?r:[]))}));l(e)}),[r]),Object(u.jsx)(k,{value:{results:s,lastCryptoValues:j,updateLastCryptoValues:function(e){b(e)}},children:t})},M=function(){var e=Object(a.useContext)(D);if(!e)throw new Error("useCryptoCurrencyContext must be used within a CryptoCurrencyProvider");return e};function E(e){var t=e.cryptoCurrencyName,r=M(),n=r.results,c=r.updateLastCryptoValues,s=Object(a.useMemo)((function(){return n.map((function(e){return e.filter((function(e){return e.name===t}))}))}),[t,n]),l=function(e){return e.toLocaleString("es-MX")};return Object(a.useEffect)((function(){c(s.map((function(e){var t=Object(i.a)(e,1)[0];return{provider:t.provider,value:t.value,name:t.name,lastUpdated:t.lastUpdated}})))}),[s]),Object(u.jsx)("div",{className:"py-4 select-none",children:Object(u.jsx)("div",{className:"grid sm:grid-cols-3 gap-4",children:s.map((function(e,t){var r=Object(i.a)(e,1)[0],a=r.provider,n=r.value;return Object(u.jsxs)(d,{backgroundColor:"bg-dark-500",className:"px-4 py-4",children:[Object(u.jsx)("div",{className:"text-yellow-300 font-bold text-2xl text-center",children:l(n)}),Object(u.jsx)("div",{className:"text-yellow-200 text-xs text-center uppercase",children:a}),Object(u.jsx)("div",{className:"w-full border border-yellow-400 my-4"}),Object(u.jsx)("div",{className:"h-32 overflow-y-auto",children:e.map((function(e,t){return Object(u.jsxs)("div",{className:"flex justify-between text-yellow-200 text-xs hover:text-yellow-400 cursor-pointer",children:[Object(u.jsx)("div",{children:e.lastUpdated}),Object(u.jsx)("div",{children:l(e.value)})]},t)}))})]},t)}))})})}!function(e){e.BTC="BTC",e.ETH="ETH",e.XRP="XRP"}(S||(S={}));var U=r(8),T=r.n(U),B=r(12),P=r(14),L=r.n(P),_=r(9),R=r.n(_);function X(){return z.apply(this,arguments)}function z(){return(z=Object(B.a)(T.a.mark((function e(){var t,r,a,n,c,s,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"usd",ids:"bitcoin,ethereum,ripple"}});case 2:return t=e.sent,r=t.data,a=r,n=Object(i.a)(a,3),c=n[0],s=n[1],l=n[2],e.abrupt("return",[{name:S.BTC,value:c.current_price,lastUpdated:R()(c.last_updated).format("YYYY/MM/DD HH:mm:ss")},{name:S.ETH,value:s.current_price,lastUpdated:R()(s.last_updated).format("YYYY/MM/DD HH:mm:ss")},{name:S.XRP,value:l.current_price,lastUpdated:R()(l.last_updated).format("YYYY/MM/DD HH:mm:ss")}].map((function(e){return Object(w.a)(Object(w.a)({},e),{},{provider:"coingecko"})})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return V.apply(this,arguments)}function V(){return(V=Object(B.a)(T.a.mark((function e(){var t,r,a,n,c,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://public-api.stormgain.com/api/v1/ticker");case 2:return t=e.sent,r=t.data,n=(a=r).BTC_USDT,c=a.ETH_USDT,s=a.XRP_USDT,e.abrupt("return",[{name:S.BTC,value:parseFloat(n.last_price),lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")},{name:S.ETH,value:parseFloat(c.last_price),lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")},{name:S.XRP,value:parseFloat(s.last_price),lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")}].map((function(e){return Object(w.a)(Object(w.a)({},e),{},{provider:"storm-gain"})})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return A.apply(this,arguments)}function A(){return(A=Object(B.a)(T.a.mark((function e(){var t,r,a,n,c,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://min-api.cryptocompare.com/data/pricemulti",{params:{tsyms:"USD",fsyms:"BTC,ETH,XRP"}});case 2:return t=e.sent,r=t.data,n=(a=r).BTC,c=a.ETH,s=a.XRP,e.abrupt("return",[{name:S.BTC,value:n.USD,lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")},{name:S.ETH,value:c.USD,lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")},{name:S.XRP,value:s.USD,lastUpdated:R()(new Date).format("YYYY/MM/DD HH:mm:ss")}].map((function(e){return Object(w.a)(Object(w.a)({},e),{},{provider:"crypto-compare"})})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!0),s=Object(i.a)(c,2),l=s[0],o=s[1],u=Object(a.useState)([]),d=Object(i.a)(u,2),j=d[0],b=d[1];return function(e){var t=e.callback,r=e.delay,n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=t}),[t]),Object(a.useEffect)((function(){function e(){n.current()}if(e(),null!==r){var t=setInterval(e,r);return function(){return clearInterval(t)}}}),[r])}({callback:function(){var e=Object(B.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(null),e.next=4,Promise.all([X(),F(),I()]);case 4:t=e.sent,b(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:return e.prev=11,l&&o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),delay:15e3}),[j,l,r]}var W=r(23),q=r.n(W);function G(){return Object(u.jsx)(W.SkeletonTheme,{color:"#6B7280",highlightColor:"#818896",children:Object(u.jsx)("div",{className:"grid sm:grid-cols-3 gap-4 py-3",children:Array(3).fill(null).map((function(e,t){return Object(u.jsx)(q.a,{count:1,className:"h-60"},t)}))})})}function K(e){var t=e.className;return Object(u.jsxs)(d,{backgroundColor:"bg-danger-300",className:"text-red-600 ".concat(t),children:[Object(u.jsx)("div",{className:"font-bold text-xl",children:"We apologize \ud83d\ude1e"}),Object(u.jsx)("div",{className:"font-light",children:"An error has occurred, please try again in a few minutes"})]})}function Q(){var e=M().lastCryptoValues,t=Object(a.useState)(void 0),r=Object(i.a)(t,2),n=r[0],c=r[1];return Object(u.jsxs)(d,{className:"mt-4",backgroundColor:"bg-gray-600",children:[Object(u.jsx)("div",{className:"text-gray-400 uppercase text-lg font-bold mb-2",children:"Currency Converter"}),Object(u.jsxs)("div",{className:"grid sm:grid-cols-4 gap-4",children:[Object(u.jsx)(j,{value:n,onChange:c,title:"MXN",type:"number"}),n&&n>0&&e.map((function(e,t){return Object(u.jsxs)("div",{className:"w-full break-all sm:text-center",children:[Object(u.jsx)("div",{className:"text-gray-400 uppercase text-xs font-bold mb-1",title:"CURRENT VALUE: ".concat(e.value.toString()),children:e.provider}),Object(u.jsx)("div",{className:"text-yellow-200 font-bold mt-3",children:(e.value*n).toFixed(2)})]},t)}))]})]})}var Z=[{path:"/login",component:v},{path:"/cryptocurrencies",component:N((function(){var e=J(),t=Object(i.a)(e,3),r=t[0],a=t[1],n=t[2],c=[S.BTC,S.ETH,S.XRP];return Object(u.jsx)(H,{results:r,children:Object(u.jsx)("div",{className:"flex items-center justify-center min-h-screen p-4",children:Object(u.jsxs)(d,{children:[Object(u.jsx)(y,{}),n?Object(u.jsx)(K,{className:"mt-6"}):Object(u.jsx)(C,{className:"mt-6",tabs:c,children:c.map((function(e,t){return a?Object(u.jsx)(G,{},t):Object(u.jsx)(E,{cryptoCurrencyName:e},t)}))}),Object(u.jsx)(Q,{})]})})})}))}];function $(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Z.map((function(e){var t=e.path,r=e.component;return Object(u.jsx)(o.a,{path:t,exact:!0,component:r},t)})),Object(u.jsx)(o.a,{path:"/",component:v})]})})}r(71);function ee(e){var t=e.children;return Object(u.jsx)("div",{className:"bg-yellow-100 w-full min-h-screen",children:t})}s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{children:Object(u.jsx)(ee,{children:Object(u.jsx)($,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.021c6cbc.chunk.js.map