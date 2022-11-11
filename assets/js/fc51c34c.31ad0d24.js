"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2073],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,u=k["".concat(s,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(5773),r=(n(7378),n(5318));const i={id:"Perspective",title:"Class: Perspective",sidebar_label:"Perspective",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/Perspective",id:"api/classes/Perspective",title:"Class: Perspective",description:"A class that allows you to switch between first, second and third person perspectives for",source:"@site/docs/api/classes/Perspective.md",sourceDirName:"api/classes",slug:"/api/classes/Perspective",permalink:"/docs/api/classes/Perspective",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Perspective",title:"Class: Perspective",sidebar_label:"Perspective",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Peers",permalink:"/docs/api/classes/Peers"},next:{title:"Registry",permalink:"/docs/api/classes/Registry"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"INPUT_IDENTIFIER",id:"input_identifier",level:3},{value:"controls",id:"controls",level:3},{value:"inputs",id:"inputs",level:3},{value:"onChangeState",id:"onchangestate",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"params",id:"params",level:3},{value:"world",id:"world",level:3},{value:"Methods",id:"methods",level:2},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"toggle",id:"toggle",level:3},{value:"Returns",id:"returns-2",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Accessors",id:"accessors",level:2},{value:"state",id:"state",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4}],d={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class that allows you to switch between first, second and third person perspectives for\na ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/RigidControls"},"RigidControls")," instance. By default, the key to switch between perspectives is ",(0,r.kt)("kbd",null,"C"),"."),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Initialize the perspective with the rigid controls.\nconst perspective = new VOXELIZE.Perspective(controls, world);\n\n// Bind the keyboard inputs to switch between perspectives.\nperspective.connect(inputs, "in-game");\n\n// Switch to the first person perspective.\nperspective.state = "third";\n\n// Update the perspective every frame.\nperspective.update();\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"input_identifier"},"INPUT","_","IDENTIFIER"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"INPUT","_","IDENTIFIER"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"voxelize-perspective"')),(0,r.kt)("p",null,"This is the identifier that is used to bind the perspective's keyboard inputs\nwhen ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Perspective#connect"},"connect")," is called."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"controls"},"controls"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"controls"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/RigidControls"},(0,r.kt)("inlineCode",{parentName:"a"},"RigidControls"))),(0,r.kt)("p",null,"The rigid controls that this perspective instance is attached to."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inputs"},"inputs"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"inputs"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"Inputs")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"The input manager that binds the perspective's keyboard inputs."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onchangestate"},"onChangeState"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"onChangeState"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"state"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"first"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"second"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"third"'),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"A method that can be implemented and is called when the perspective's state changes."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"first"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"second"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"third"'))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#perspectiveparams"},(0,r.kt)("inlineCode",{parentName:"a"},"PerspectiveParams"))),(0,r.kt)("p",null,"Parameters to configure the perspective."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"world"},"world"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"world"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("p",null,"The world that this perspective instance is working with."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"connect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Connect the perspective to the given input manager. This will bind the perspective's keyboard inputs, which\nby default is ",(0,r.kt)("kbd",null,"C")," to switch between perspectives."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"inputs")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"Inputs")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Inputs"},"Inputs")," instance to bind the perspective's keyboard inputs to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"*"')),(0,r.kt)("td",{parentName:"tr",align:"left"},"The namespace to bind the perspective's keyboard inputs to.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toggle"},"toggle"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toggle"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Toggle between the first, second and third person perspectives. The order goes from first person to\nthird person and then to second person."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"update"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"This updates the perspective. Internally, if the perspective isn't in first person, it raycasts to find the closest\nblock and then ensures that the camera is not clipping into any blocks."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Perspective"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"controls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params?"),")"),(0,r.kt)("p",null,"Create a new perspective instance that is attached to the given rigid controls. The default\nperspective is the first person perspective."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"controls")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/RigidControls"},(0,r.kt)("inlineCode",{parentName:"a"},"RigidControls"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The rigid controls that this perspective instance is attached to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The world that this perspective instance is working with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#perspectiveparams"},(0,r.kt)("inlineCode",{parentName:"a"},"PerspectiveParams")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parameters to configure the perspective.")))),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"state"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},'"first"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"second"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"third"')),(0,r.kt)("p",null,"Getter for the perspective's state."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"first"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"second"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"third"')),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"state"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Setter for the perspective's state. This will call ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Perspective#onchangestate"},"onChangeState")," if it is implemented."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"first"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"second"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"third"'))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}c.isMDXComponent=!0}}]);