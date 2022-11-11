"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4545],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(5773),r=(a(7378),a(5318));const l={id:"CanvasBox",title:"Class: CanvasBox",sidebar_label:"CanvasBox",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/CanvasBox",id:"api/classes/CanvasBox",title:"Class: CanvasBox",description:"A canvas box is a group of BoxLayers that are rendered as a single mesh.",source:"@site/docs/api/classes/CanvasBox.md",sourceDirName:"api/classes",slug:"/api/classes/CanvasBox",permalink:"/docs/api/classes/CanvasBox",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CanvasBox",title:"Class: CanvasBox",sidebar_label:"CanvasBox",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BoxLayer",permalink:"/docs/api/classes/BoxLayer"},next:{title:"Character",permalink:"/docs/api/classes/Character"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"boxLayers",id:"boxlayers",level:3},{value:"depth",id:"depth",level:3},{value:"height",id:"height",level:3},{value:"params",id:"params",level:3},{value:"width",id:"width",level:3},{value:"Accessors",id:"accessors",level:2},{value:"boxMaterials",id:"boxmaterials",level:3},{value:"Returns",id:"returns",level:4},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"paint",id:"paint",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A canvas box is a group of ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxLayer"),"s that are rendered as a single mesh.\nEach box layer is a group of six canvases that are also rendered as a single mesh.\nYou can then paint on each canvas individually by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"box.paint()"),"."),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const box = new VOXELIZE.CanvasBox();\n\nbox.paint("all", (ctx, canvas) => {\n  ctx.fillStyle = "red";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n});\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bobby from King of the Hill",src:a(8040).Z,width:"2560",height:"1440"})),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Group")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CanvasBox"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Sky"},(0,r.kt)("inlineCode",{parentName:"a"},"Sky"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"boxlayers"},"boxLayers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"boxLayers"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/BoxLayer"},(0,r.kt)("inlineCode",{parentName:"a"},"BoxLayer")),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("p",null,"The inner layers of the canvas box."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"depth"},"depth"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"depth"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The depth of the canvas box."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The height of the canvas box."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#canvasboxparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanvasBoxParams"))),(0,r.kt)("p",null,"Parameters for creating a canvas box."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The width of the canvas box."),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"boxmaterials"},"boxMaterials"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"boxMaterials"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">"),(0,r.kt)("p",null,"The first layer of the canvas box."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MeshBasicMaterial"),">"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new CanvasBox"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,r.kt)("p",null,"Create a new canvas box."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#canvasboxparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanvasBoxParams")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters for creating a canvas box.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Group.constructor"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"paint"},"paint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"paint"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"side"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"art"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"layer?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Add art to the canvas(s) of this box layer."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"side")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#boxsides"},(0,r.kt)("inlineCode",{parentName:"a"},"BoxSides"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#boxsides"},(0,r.kt)("inlineCode",{parentName:"a"},"BoxSides")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The side(s) of the box layer to draw on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"art")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Texture")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#artfunction"},(0,r.kt)("inlineCode",{parentName:"a"},"ArtFunction"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Color")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The art or art function to draw on the box layer's side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"layer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The layer to draw on.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bobby-canvas-box-60780b9818642b3de07cf5314d0f3b7b.png"}}]);