"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1774],{5318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(a),k=r,g=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(5773),r=(a(7378),a(5318));const l={id:"Debug",title:"Class: Debug",sidebar_label:"Debug",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"client/classes/Debug",id:"client/classes/Debug",title:"Class: Debug",description:"A class for general debugging purposes in Voxelize, including FPS, value tracking, and real-time value testing.",source:"@site/docs/api/client/classes/Debug.md",sourceDirName:"client/classes",slug:"/client/classes/Debug",permalink:"/api/client/classes/Debug",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Debug",title:"Class: Debug",sidebar_label:"Debug",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DOMUtils",permalink:"/api/client/classes/DOMUtils"},next:{title:"Entities",permalink:"/api/client/classes/Entities"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"dataWrapper",id:"datawrapper",level:3},{value:"domElement",id:"domelement",level:3},{value:"entryWrapper",id:"entrywrapper",level:3},{value:"params",id:"params",level:3},{value:"stats",id:"stats",level:3},{value:"Methods",id:"methods",level:2},{value:"displayNewline",id:"displaynewline",level:3},{value:"Returns",id:"returns",level:4},{value:"displayTitle",id:"displaytitle",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"registerDisplay",id:"registerdisplay",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"removeDisplay",id:"removedisplay",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"toggle",id:"toggle",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-5",level:4}],s={toc:o};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class for general debugging purposes in Voxelize, including FPS, value tracking, and real-time value testing."),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const debug = new VOXELIZE.Debug();\n\n// Track the voxel property of `controls`.\ndebug.registerDisplay("Position", controls, "voxel");\n\n// Add a function to track sunlight dynamically.\ndebug.registerDisplay("Sunlight", () => {\n  return world.getSunlightByVoxel(...controls.voxel);\n});\n\n// In the game loop, trigger debug updates.\ndebug.update();\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Debug",src:a(7327).Z,width:"2560",height:"1440"})),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Group")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Debug"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Debug"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"domElement?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Debug"},"Debug")," instance."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"domElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"document.body")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The DOM element to append the debug panel to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/client/modules#debugparams"},(0,r.kt)("inlineCode",{parentName:"a"},"DebugParams")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parameters to create a ",(0,r.kt)("a",{parentName:"td",href:"/api/client/classes/Debug"},"Debug")," instance.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Group.constructor"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"datawrapper"},"dataWrapper"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"dataWrapper"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,r.kt)("p",null,"The HTML element that wraps all the debug entries and stats.js instance, located\non the top-left by default."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"domelement"},"domElement"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"domElement"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("p",null,"The DOM element to append the debug panel to. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entrywrapper"},"entryWrapper"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"entryWrapper"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLDivElement")),(0,r.kt)("p",null,"A HTML element wrapping all registered debug entries."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/client/modules#debugparams"},(0,r.kt)("inlineCode",{parentName:"a"},"DebugParams"))),(0,r.kt)("p",null,"Parameters to create a ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Debug"},"Debug")," instance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stats"},"stats"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"stats"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Stats")),(0,r.kt)("p",null,"The stats.js instance, situated in the top-left corner after the data entries."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"displaynewline"},"displayNewline"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"displayNewline"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"Add an empty line to the debug entries for spacing."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"The debug instance for chaining."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"displaytitle"},"displayTitle"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"displayTitle"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"Add a static title to the debug entries for grouping."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A title to display.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"The debug instance for chaining."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"registerdisplay"},"registerDisplay"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"registerDisplay"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"object?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"formatter?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"Register a new object attribute to track. Needs to call ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Debug#update"},"update")," in the game loop\nto update the value."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of the debug entry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The object to track.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attribute?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The attribute of the object to track.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"formatter")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"str"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function to format the value of the attribute.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this")),(0,r.kt)("p",null,"The debug instance for chaining."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removedisplay"},"removeDisplay"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeDisplay"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Remove a registered object attribute from tracking."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The title of the debug entry.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toggle"},"toggle"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toggle"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"force?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Toggle the debug instance on/off."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"force")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether or not to force the debug panel to be shown/hidden.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Update the debug entries with the latest values. This should be called in the game loop."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0},7327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/debug-674b144d391529bc12997481a6673dbf.png"}}]);