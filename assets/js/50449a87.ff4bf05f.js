"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4620],{5318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(5773),r=(a(7378),a(5318));const i={id:"ImageVoxelizer",title:"Class: ImageVoxelizer",sidebar_label:"ImageVoxelizer",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/ImageVoxelizer",id:"api/classes/ImageVoxelizer",title:"Class: ImageVoxelizer",description:"A class that turns a given image into a mosaic of block textures registered in the World.",source:"@site/docs/api/classes/ImageVoxelizer.md",sourceDirName:"api/classes",slug:"/api/classes/ImageVoxelizer",permalink:"/docs/api/classes/ImageVoxelizer",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ImageVoxelizer",title:"Class: ImageVoxelizer",sidebar_label:"ImageVoxelizer",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/api/classes/Events"},next:{title:"Inputs",permalink:"/docs/api/classes/Inputs"}},p={},s=[{value:"Methods",id:"methods",level:2},{value:"build",id:"build",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],m={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class that turns a given image into a mosaic of block textures registered in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/World"},"World"),"."),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'ImageVoxelizer.build(\n  "https://i.imgur.com/0Z0Z0Z0.png",\n  world,\n  new THREE.Vector3(0, 0, 0),\n  {\n    width: 64,\n    height: 64,\n    lockedRatio: true,\n    orientation: "x",\n  }\n).then((success) => {\n  if (success) {\n    console.log("Image voxelized successfully!");\n  } else {\n    console.log("Image voxelization failed.");\n  }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ImageVoxelizer example",src:a(5013).Z,width:"3584",height:"2240"})),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"build"},"build"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"build"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"imgURL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Build a list of block updates that corresponds to a mosaic of the given image using the textures registered in the given world's registry."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"imgURL")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to be voxelized. This will be used to create an ",(0,r.kt)("inlineCode",{parentName:"td"},"Image")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"world")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/World"},(0,r.kt)("inlineCode",{parentName:"a"},"World"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The world to be updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The position to start voxelizing the image. This will be the bottom middle of the voxelized image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#imagevoxelizerparams"},(0,r.kt)("inlineCode",{parentName:"a"},"ImageVoxelizerParams"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The extra parameters to process the image voxelization.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"A list of block updates that corresponds to a mosaic of the given image."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parse"},"parse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"parse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"rest"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"Parse a command line string into image voxelization parameters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Parsing a command line string\n// https://example.com/image.png { "width": 64, "height": 64, "lockedRatio": true, "orientation": "x" }\n// Turns into this object\n{\n  url: "https://example.com/image.png",\n  params: {\n    width: 64,\n    height: 64,\n    lockedRatio: true,\n    orientation: "x"\n  }\n}\n')),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rest")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The rest of the command string to be parsed.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#imagevoxelizerparams"},(0,r.kt)("inlineCode",{parentName:"a"},"ImageVoxelizerParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))))}d.isMDXComponent=!0},5013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-voxelizer-83ac930c9bdd3122db9f8e910c3bf5f7.png"}}]);