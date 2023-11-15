"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6331],{1510:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=s(4246),l=s(1670);const r={id:"BoxLayer",title:"Class: BoxLayer",sidebar_label:"BoxLayer",sidebar_position:0,custom_edit_url:null},i=void 0,d={id:"client/classes/BoxLayer",title:"Class: BoxLayer",description:"A layer of a canvas box. This is a group of six canvases that are rendered as a single mesh.",source:"@site/docs/api/client/classes/BoxLayer.md",sourceDirName:"client/classes",slug:"/client/classes/BoxLayer",permalink:"/api/client/classes/BoxLayer",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BoxLayer",title:"Class: BoxLayer",sidebar_label:"BoxLayer",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BlockUtils",permalink:"/api/client/classes/BlockUtils"},next:{title:"CanvasBox",permalink:"/api/client/classes/CanvasBox"}},h={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"depth",id:"depth",level:3},{value:"depthSegments",id:"depthsegments",level:3},{value:"height",id:"height",level:3},{value:"heightSegments",id:"heightsegments",level:3},{value:"materials",id:"materials",level:3},{value:"width",id:"width",level:3},{value:"widthSegments",id:"widthsegments",level:3},{value:"Methods",id:"methods",level:2},{value:"paint",id:"paint",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A layer of a canvas box. This is a group of six canvases that are rendered as a single mesh."}),"\n",(0,n.jsx)(t.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Mesh"})}),"\n",(0,n.jsxs)(t.p,{children:["\u21b3 ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"BoxLayer"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"new BoxLayer"}),"(",(0,n.jsx)(t.code,{children:"width"}),", ",(0,n.jsx)(t.code,{children:"height"}),", ",(0,n.jsx)(t.code,{children:"depth"}),", ",(0,n.jsx)(t.code,{children:"widthSegments"}),", ",(0,n.jsx)(t.code,{children:"heightSegments"}),", ",(0,n.jsx)(t.code,{children:"depthSegments"}),", ",(0,n.jsx)(t.code,{children:"side"}),", ",(0,n.jsx)(t.code,{children:"transparent"}),"): ",(0,n.jsx)(t.a,{href:"/api/client/classes/BoxLayer",children:(0,n.jsx)(t.code,{children:"BoxLayer"})})]}),"\n",(0,n.jsx)(t.p,{children:"Create a six-sided canvas box layer."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"width"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The width of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"height"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The height of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"depth"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The depth of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"widthSegments"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The width segments of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"heightSegments"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The height segments of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"depthSegments"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The depth segments of the box layer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"side"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Side"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The side of the box layer to render."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"transparent"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Whether or not should this canvas box be rendered as transparent."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/api/client/classes/BoxLayer",children:(0,n.jsx)(t.code,{children:"BoxLayer"})})}),"\n",(0,n.jsx)(t.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsx)(t.p,{children:"Mesh.constructor"}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"depth",children:"depth"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"depth"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The depth of the box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"depthsegments",children:"depthSegments"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"depthSegments"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The depth segments of the box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"height",children:"height"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"height"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The height of the box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"heightsegments",children:"heightSegments"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"heightSegments"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The height segments of the box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"materials",children:"materials"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"materials"}),": ",(0,n.jsx)(t.code,{children:"Map"}),"<",(0,n.jsx)(t.code,{children:"string"}),", ",(0,n.jsx)(t.code,{children:"MeshBasicMaterial"}),">"]}),"\n",(0,n.jsx)(t.p,{children:"The materials of the six faces of this box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"width",children:"width"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"width"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The width of the box layer."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"widthsegments",children:"widthSegments"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"widthSegments"}),": ",(0,n.jsx)(t.code,{children:"number"})]}),"\n",(0,n.jsx)(t.p,{children:"The width segments of the box layer."}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"paint",children:"paint"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"paint"}),"(",(0,n.jsx)(t.code,{children:"side"}),", ",(0,n.jsx)(t.code,{children:"art"}),"): ",(0,n.jsx)(t.code,{children:"void"})]}),"\n",(0,n.jsx)(t.p,{children:"Add art to the canvas(s) of this box layer."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"side"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/api/client/modules#boxsides",children:(0,n.jsx)(t.code,{children:"BoxSides"})})," | ",(0,n.jsx)(t.a,{href:"/api/client/modules#boxsides",children:(0,n.jsx)(t.code,{children:"BoxSides"})}),"[]"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The side(s) of the box layer to draw on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"art"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"Color"})," | ",(0,n.jsx)(t.code,{children:"Texture"})," | ",(0,n.jsx)(t.a,{href:"/api/client/modules#artfunction",children:(0,n.jsx)(t.code,{children:"ArtFunction"})})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The art or art function to draw on the box layer's side."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"void"})})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1670:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(7378);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);