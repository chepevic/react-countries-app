(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(10),s=n.n(r),a=(n(15),n(3)),i=n(6),j=n(2),o=n(5),l=n.n(o),u=n(7),b=Object(c.createContext)(),d=n(0),h=function(){var e=Object(c.useContext)(b),t=Object(a.a)(e,4),n=t[2],r=t[3];return document.body.style.backgroundColor="".concat(n?"#fafafa":"#202C37"),Object(d.jsx)("header",{className:n?"header":"headerDark",children:Object(d.jsxs)("div",{className:"container content",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("h2",{children:"What is the wolrd?"})}),Object(d.jsxs)("div",{className:"darkMode",onClick:function(){return r(!n)},children:[Object(d.jsx)("i",{className:n?"far fa-moon":"fas fa-sun"})," ",n?Object(d.jsx)("span",{children:"Dark mode"}):Object(d.jsx)("span",{children:"Clear mode"})]})]})})},O=function(){var e=Object(c.useContext)(b),t=Object(a.a)(e,4)[2],n=Object(j.g)().name,r=Object(c.useState)([]),s=Object(a.a)(r,2),o=s[0],O=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://restcountries.com/v3.1/name/".concat(n),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,O(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:t?"bgLight":"bgDark",children:Object(d.jsxs)("div",{id:"country",children:[Object(d.jsx)("div",{className:t?"back":"backDark",children:Object(d.jsxs)(i.b,{to:"/",children:[" ",Object(d.jsx)("i",{className:"fas fa-arrow-left"})," Back"]})}),o.map((function(e){var n;return Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("div",{className:"flag",children:Object(d.jsx)("img",{src:e.flags.svg,alt:e.name.common})}),Object(d.jsxs)("div",{className:t?"info":"infoDark",children:[Object(d.jsx)("h2",{children:e.name.common}),Object(d.jsxs)("div",{className:"info_details",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Native Name: "}),e.name.common]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Population: "}),e.population]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Region: "}),e.region]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Sub Region: "}),e.subregion]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Capital: "}),e.capital]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Top Level Domain: "}),e.tld]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Currencies: "}),JSON.stringify(null===e||void 0===e?void 0:e.currencies)]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Languages: "}),JSON.stringify(null===e||void 0===e?void 0:e.languages)]})]})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Borders countries: "}),null===(n=e.borders)||void 0===n?void 0:n.map((function(e){return Object(d.jsx)("span",{className:t?"border":"borderDark",children:e},e)}))]})]})]},e.flags.png)}))]})})]})},x=function(){var e=Object(c.useContext)(b),t=Object(a.a)(e,3),n=t[1],r=t[2],s=Object(c.useState)(""),i=Object(a.a)(s,2),j=i[0],o=i[1],h=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,r,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==parseInt(t.target.value)){e.next=5;break}alert("Select a Region"),e.next=15;break;case 5:return c=t.target.value,r=c,"https://restcountries.com/v3.1/region/",e.next=10,fetch("https://restcountries.com/v3.1/region/"+r);case 10:return s=e.sent,e.next=13,s.json();case 13:a=e.sent,n(a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://restcountries.com/v3.1/name/".concat(j),e.next=4,fetch(c);case 4:return r=e.sent,e.next=7,r.json();case 7:(s=e.sent).length>0?n(s):(alert("there is not result with your search"),o(""));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:r?"bgLight":"bgDark",children:Object(d.jsxs)("div",{className:"container",id:"search",children:[Object(d.jsx)("div",{className:r?"country":"countryDark",children:Object(d.jsxs)("form",{onSubmit:O,children:[Object(d.jsx)("i",{className:"fas fa-search"}),Object(d.jsx)("input",{type:"text",placeholder:"Search for a country...",name:"country",onChange:function(e){o(e.target.value)},value:j})]})}),Object(d.jsx)("div",{className:r?"region":"regionDark",children:Object(d.jsxs)("select",{name:"region",onChange:h,children:[Object(d.jsx)("option",{value:"0",children:"Select Region"}),Object(d.jsx)("option",{value:"Africa",children:"Africa"}),Object(d.jsx)("option",{value:"Americas",children:"Americas"}),Object(d.jsx)("option",{value:"Asia",children:"Asia"}),Object(d.jsx)("option",{value:"Europe",children:"Europe"}),Object(d.jsx)("option",{value:"Oceania",children:"Oceania"})]})})]})})})},p=function(){var e=Object(c.useContext)(b),t=Object(a.a)(e,5),n=t[0],r=t[2],s=t[4];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:r?"bgLight":"bgDark",children:[s&&Object(d.jsx)("h2",{className:"container",style:{textAlign:"center",marginTop:40},children:"Loading Countries..."}),Object(d.jsx)("div",{id:"countries",className:"container",children:n.map((function(e){return Object(d.jsx)(i.b,{to:"/country/".concat(e.name.common),children:Object(d.jsxs)("div",{className:r?"country":"countryDark",children:[Object(d.jsx)("img",{src:e.flags.svg,alt:e.name.common}),Object(d.jsx)("h2",{children:null===e||void 0===e?void 0:e.name.common}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Population: "}),parseFloat(e.population)]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Region: "}),e.region]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Capital: "}),e.capital]})]})},e.flags.png)}))})]})})},m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(x,{}),Object(d.jsx)(p,{})]})},f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://restcountries.com/v3.1/all",e.next=4,fetch("https://restcountries.com/v3.1/all");case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),o=Object(a.a)(s,2),l=o[0],u=o[1],h=Object(c.useState)(!1),x=Object(a.a)(h,2),p=x[0],v=x[1];return Object(c.useEffect)((function(){v(!0),f().then((function(e){r(e),v(!1)}))}),[]),Object(d.jsx)(b.Provider,{value:[n,r,l,u,p],children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(m,{})}),Object(d.jsx)(j.a,{path:"/home",element:Object(d.jsx)(m,{})}),Object(d.jsx)(j.a,{path:"country/:name",element:Object(d.jsx)(O,{})})]})})})};var g=function(){return Object(d.jsx)(v,{})};s.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2b4484b0.chunk.js.map