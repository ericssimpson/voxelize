"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[222],{6817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=n(4246),i=n(1670);const l={id:"LightShined",title:"Class: LightShined",sidebar_label:"LightShined",sidebar_position:0,custom_edit_url:null},d="Example",r={id:"client/classes/LightShined",title:"Class: LightShined",description:"A class that allows mesh to dynamically change brightness based on the voxel light level at their position.",source:"@site/docs/api/client/classes/LightShined.md",sourceDirName:"client/classes",slug:"/client/classes/LightShined",permalink:"/api/client/classes/LightShined",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LightShined",title:"Class: LightShined",sidebar_label:"LightShined",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ItemSlots",permalink:"/api/client/classes/ItemSlots"},next:{title:"LightUtils",permalink:"/api/client/classes/LightUtils"}},h={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"ignored",id:"ignored",level:3},{value:"list",id:"list",level:3},{value:"options",id:"options",level:3},{value:"world",id:"world",level:3},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"ignore",id:"ignore",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-4",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A class that allows mesh to dynamically change brightness based on the voxel light level at their position."}),"\n",(0,s.jsxs)(t.p,{children:["By default, ",(0,s.jsx)(t.code,{children:"VOXELIZE.Shadow"})," and ",(0,s.jsx)(t.code,{children:"VOXELIZE.NameTag"})," is ignored by this effect."]}),"\n",(0,s.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Create a light shined effect manager.\nconst lightShined = new VOXELIZE.LightShined();\n\n// Add the effect to a mesh.\nlightShined.add(character);\n\n// In the render loop, update the effect.\nlightShined.update();\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Example",src:n(9895).Z+"",width:"1200",height:"628"})}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"new LightShined"}),"(",(0,s.jsx)(t.code,{children:"world"}),", ",(0,s.jsx)(t.code,{children:"options?"}),"): ",(0,s.jsx)(t.a,{href:"/api/client/classes/LightShined",children:(0,s.jsx)(t.code,{children:"LightShined"})})]}),"\n",(0,s.jsx)(t.p,{children:"Construct a light shined effect manager."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"world"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/api/client/classes/World",children:(0,s.jsx)(t.code,{children:"World"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The world that the effect is applied to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"options"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Partial"}),"<",(0,s.jsx)(t.a,{href:"/api/client/modules#lightshinedoptions",children:(0,s.jsx)(t.code,{children:"LightShinedOptions"})}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Parameters to customize the effect."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/client/classes/LightShined",children:(0,s.jsx)(t.code,{children:"LightShined"})})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"ignored",children:"ignored"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"ignored"}),": ",(0,s.jsx)(t.code,{children:"Set"}),"<",(0,s.jsx)(t.code,{children:"any"}),">"]}),"\n",(0,s.jsx)(t.p,{children:"A list of types that are ignored by this effect."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"list",children:"list"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"list"}),": ",(0,s.jsx)(t.code,{children:"Set"}),"<",(0,s.jsx)(t.code,{children:"Object3D"}),"<",(0,s.jsx)(t.code,{children:"Object3DEventMap"}),">>"]}),"\n",(0,s.jsx)(t.p,{children:"A list of meshes that are effected by this effect."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"options"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"options"}),": ",(0,s.jsx)(t.a,{href:"/api/client/modules#lightshinedoptions",children:(0,s.jsx)(t.code,{children:"LightShinedOptions"})})]}),"\n",(0,s.jsx)(t.p,{children:"Parameters to customize the effect."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"world",children:"world"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"world"}),": ",(0,s.jsx)(t.a,{href:"/api/client/classes/World",children:(0,s.jsx)(t.code,{children:"World"})})]}),"\n",(0,s.jsx)(t.p,{children:"The world that the effect is applied to."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"add",children:"add"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"add"}),"(",(0,s.jsx)(t.code,{children:"obj"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Add an object to be affected by this effect."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"obj"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Object3D"}),"<",(0,s.jsx)(t.code,{children:"Object3DEventMap"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A THREE.JS object to be shined on."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"ignore",children:"ignore"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"ignore"}),"(",(0,s.jsx)(t.code,{children:"...types"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Ignore a certain type of object from being affected by this effect."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"...types"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"any"}),"[]"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A type or a list of types to be ignored by this effect."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Example"})})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Ignore all shadows. (This is done by default)\nlightShined.ignore(VOXELIZE.Shadow);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"remove",children:"remove"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"remove"}),"(",(0,s.jsx)(t.code,{children:"obj"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Remove an object from being affected by this effect"}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"obj"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"Object3D"}),"<",(0,s.jsx)(t.code,{children:"Object3DEventMap"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The object to be removed from the effect."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"update",children:"update"}),"\n",(0,s.jsxs)(t.p,{children:["\u25b8 ",(0,s.jsx)(t.strong,{children:"update"}),"(): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n",(0,s.jsx)(t.p,{children:"Update the light shined effect. This fetches the light level at the position of\neach object and recursively updates the brightness of the object."}),"\n",(0,s.jsx)(t.p,{children:"This should be called in the render loop."}),"\n",(0,s.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9895:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/light-shined-376d9260581adaa511abc3ba2d5c739d.png"},1670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var s=n(7378);const i={},l=s.createContext(i);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);