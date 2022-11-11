"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7348],{5318:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(7378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},218:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(5773),n=(t(7378),t(5318));const o={id:"Arrow",title:"Class: Arrow",sidebar_label:"Arrow",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"api/classes/Arrow",id:"api/classes/Arrow",title:"Class: Arrow",description:"A helper for visualizing a direction. This is useful for debugging.",source:"@site/docs/api/classes/Arrow.md",sourceDirName:"api/classes",slug:"/api/classes/Arrow",permalink:"/docs/api/classes/Arrow",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Arrow",title:"Class: Arrow",sidebar_label:"Arrow",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/docs/api/modules"},next:{title:"BlockBreakParticles",permalink:"/docs/api/classes/BlockBreakParticles"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"params",id:"params",level:3}],c={toc:p};function u(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A helper for visualizing a direction. This is useful for debugging."),(0,n.kt)("p",null,"This arrow is essentially a Voxelize version of the ",(0,n.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/helpers/ArrowHelper"},(0,n.kt)("inlineCode",{parentName:"a"},"ArrowHelper"))," from Three.js."),(0,n.kt)("h1",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const arrow = new VOXELIZE.Arrow();\n\narrow.position.set(10, 0, 10);\narrow.setDirection(new THREE.Vector3(1, 0, 0));\n\nworld.add(arrow);\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arrow",src:t(3371).Z,width:"2560",height:"1440"})),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ArrowHelper")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Arrow"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new Arrow"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,n.kt)("p",null,"Create a new arrow."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/docs/api/modules#arrowparams"},(0,n.kt)("inlineCode",{parentName:"a"},"ArrowParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parameters to create the arrow.")))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"ArrowHelper.constructor"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"params"},"params"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"params"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules#arrowparams"},(0,n.kt)("inlineCode",{parentName:"a"},"ArrowParams"))),(0,n.kt)("p",null,"Parameters used to create the arrow."))}u.isMDXComponent=!0},3371:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/arrow-d765323cda585d050b3af766e4741620.png"}}]);