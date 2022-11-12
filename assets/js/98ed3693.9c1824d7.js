"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6698],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(5773),r=(a(7378),a(5318));const l={id:"Clouds",title:"Class: Clouds",sidebar_label:"Clouds",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"client/classes/Clouds",id:"client/classes/Clouds",title:"Class: Clouds",description:"A class that generates and manages clouds. Clouds are essentially a 2D grid of cells that contain further sub-grids of",source:"@site/docs/api/client/classes/Clouds.md",sourceDirName:"client/classes",slug:"/client/classes/Clouds",permalink:"/api/client/classes/Clouds",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Clouds",title:"Class: Clouds",sidebar_label:"Clouds",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Chunks",permalink:"/api/client/classes/Chunks"},next:{title:"ColorText",permalink:"/api/client/classes/ColorText"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"initialized",id:"initialized",level:3},{value:"locatedCell",id:"locatedcell",level:3},{value:"material",id:"material",level:3},{value:"meshes",id:"meshes",level:3},{value:"params",id:"params",level:3},{value:"xOffset",id:"xoffset",level:3},{value:"zOffset",id:"zoffset",level:3},{value:"Methods",id:"methods",level:2},{value:"reset",id:"reset",level:3},{value:"Returns",id:"returns",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class that generates and manages clouds. Clouds are essentially a 2D grid of cells that contain further sub-grids of\ncloud blocks. This 2D grid move altogether in the ",(0,r.kt)("inlineCode",{parentName:"p"},"+x")," direction, and is generated at the start asynchronously using\nweb workers using simplex noise."),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Clouds#update"},"update"),", new clouds will be generated if the center of the grid\ndoes not match the passed in position."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Clouds",src:a(5089).Z,width:"3456",height:"2155"})),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Group")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Clouds"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Clouds"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Clouds"},"Clouds")," instance, initializing it asynchronously automatically."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/client/modules#cloudsparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CloudsParams")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parameters used to create a new ",(0,r.kt)("a",{parentName:"td",href:"/api/client/classes/Clouds"},"Clouds")," instance.")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Group.constructor"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"initialized"},"initialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialized"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Whether or not are the clouds done generating."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locatedcell"},"locatedCell"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locatedCell"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,r.kt)("p",null,"The cell that this cloud is currently centered around."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"material"},"material"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"material"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ShaderMaterial")),(0,r.kt)("p",null,"The shard shader material used to render the clouds."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"meshes"},"meshes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"meshes"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">","[][]"," = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("p",null,"A 2D array of cloud meshes. The first dimension is the x-axis, and the second dimension is the z-axis."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/client/modules#cloudsparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CloudsParams"))),(0,r.kt)("p",null,"Parameters used to create a new ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Clouds"},"Clouds")," instance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xoffset"},"xOffset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"xOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,"The x-offset of the clouds since initialization. This is determined by diffing the ",(0,r.kt)("inlineCode",{parentName:"p"},"locatedCell")," and the\nposition passed into ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Clouds#update"},"update"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"zoffset"},"zOffset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"zOffset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,"The z-offset of the clouds since initialization. This is determined by diffing the ",(0,r.kt)("inlineCode",{parentName:"p"},"locatedCell")," and the\nposition passed into ",(0,r.kt)("a",{parentName:"p",href:"/api/client/classes/Clouds#update"},"update"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Reset the clouds to their initial state."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Move the clouds to centering around the passed in position. If there aren't enough cloud\ncells at any side, new clouds are generated."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new position that this cloud should be centered around.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0},5089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/clouds-e50b847362c93de7e18fca649c4a80d3.png"}}]);