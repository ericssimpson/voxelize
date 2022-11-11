"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9404],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(5773),n=(r(7378),r(5318));const l={id:"BlockBreakParticles",title:"Class: BlockBreakParticles",sidebar_label:"BlockBreakParticles",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/BlockBreakParticles",id:"api/classes/BlockBreakParticles",title:"Class: BlockBreakParticles",description:"A particle system that emits particles when a block is broken. This system implements NetIntercept and",source:"@site/docs/api/classes/BlockBreakParticles.md",sourceDirName:"api/classes",slug:"/api/classes/BlockBreakParticles",permalink:"/docs/api/classes/BlockBreakParticles",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockBreakParticles",title:"Class: BlockBreakParticles",sidebar_label:"BlockBreakParticles",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Arrow",permalink:"/docs/api/classes/Arrow"},next:{title:"BlockOverlayEffect",permalink:"/docs/api/classes/BlockOverlayEffect"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Indexable",id:"indexable",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"onMessage",id:"onmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Properties",id:"properties",level:2},{value:"world",id:"world",level:3}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A particle system that emits particles when a block is broken. This system implements ",(0,n.kt)("inlineCode",{parentName:"p"},"NetIntercept")," and\nlistens to any ",(0,n.kt)("inlineCode",{parentName:"p"},"UPDATE")," type message which indicates a block break. Remember to call ",(0,n.kt)("inlineCode",{parentName:"p"},"network.register")," to\nregister this system to listen to incoming network packets."),(0,n.kt)("p",null,"This module depends on the ",(0,n.kt)("a",{parentName:"p",href:"https://three-nebula.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"three-nebula"))," package."),(0,n.kt)("h1",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { MeshRenderer } from "three-nebula";\n\nconst particleRenderer = new MeshRenderer(world, THREE);\nconst particles = new VOXELIZE.BlockBreakParticles(world, { ... });\nparticles.addRenderer(particleRenderer);\n\n// Listen to incoming network packets.\nnetwork.register(particles);\n\n// In the animate loop.\nparticles.update();\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Block break particles",src:r(4871).Z,width:"2560",height:"1440"})),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},'"three-nebula"')),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BlockBreakParticles"))))),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api/interfaces/NetIntercept"},(0,n.kt)("inlineCode",{parentName:"a"},"NetIntercept")))),(0,n.kt)("h2",{id:"indexable"},"Indexable"),(0,n.kt)("p",null,"\u25aa ","[key: ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new BlockBreakParticles"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,n.kt)("p",null,"Create a new block break particle system."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"world")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/api/classes/World"},(0,n.kt)("inlineCode",{parentName:"a"},"World"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The world that the particle system is in.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/docs/api/modules#blockbreakparticlesparams"},(0,n.kt)("inlineCode",{parentName:"a"},"BlockBreakParticlesParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parameters to create a block break particle system.")))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"System.constructor"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"onmessage"},"onMessage"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"onMessage"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"A listener to be implemented to handle incoming packets."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"MessageProtocol"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The message received from the server.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"NetIntercept.onMessage"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"world"},"world"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"world"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/classes/World"},(0,n.kt)("inlineCode",{parentName:"a"},"World"))),(0,n.kt)("p",null,"The world that the particle system is in."))}d.isMDXComponent=!0},4871:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/block-break-particles-6820b2438a5b7e9bd9352f268434f84f.png"}}]);