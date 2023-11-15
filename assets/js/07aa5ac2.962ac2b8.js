"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4295],{7356:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var r=l(4246),d=l(1670);const t={id:"Loader",title:"Class: Loader",sidebar_label:"Loader",sidebar_position:0,custom_edit_url:null},n=void 0,i={id:"client/classes/Loader",title:"Class: Loader",description:"An asset loader that can load textures and audio files. This class is used internally by the world",source:"@site/docs/api/client/classes/Loader.md",sourceDirName:"client/classes",slug:"/client/classes/Loader",permalink:"/api/client/classes/Loader",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Loader",title:"Class: Loader",sidebar_label:"Loader",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"LightUtils",permalink:"/api/client/classes/LightUtils"},next:{title:"MathUtils",permalink:"/api/client/classes/MathUtils"}},c={},h=[{value:"Properties",id:"properties",level:2},{value:"audioBuffers",id:"audiobuffers",level:3},{value:"images",id:"images",level:3},{value:"progress",id:"progress",level:3},{value:"textures",id:"textures",level:3},{value:"Methods",id:"methods",level:2},{value:"getGifTexture",id:"getgiftexture",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getTexture",id:"gettexture",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"load",id:"load",level:3},{value:"Returns",id:"returns-2",level:4},{value:"loadAudioBuffer",id:"loadaudiobuffer",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"loadGifImages",id:"loadgifimages",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"loadImage",id:"loadimage",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"loadTexture",id:"loadtexture",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["An asset loader that can load textures and audio files. This class is used internally by the world\nand can be accessed via ",(0,r.jsx)(s.a,{href:"/api/client/classes/World#loader",children:"World.loader"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"audiobuffers",children:"audioBuffers"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"audioBuffers"}),": ",(0,r.jsx)(s.code,{children:"Map"}),"<",(0,r.jsx)(s.code,{children:"string"}),", ",(0,r.jsx)(s.code,{children:"AudioBuffer"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"A map of all audios loaded by Voxelize."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"images",children:"images"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"images"}),": ",(0,r.jsx)(s.code,{children:"Map"}),"<",(0,r.jsx)(s.code,{children:"string"}),", ",(0,r.jsx)(s.code,{children:"HTMLImageElement"})," | ",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),"[]>"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"progress",children:"progress"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"progress"}),": ",(0,r.jsx)(s.code,{children:"number"})," = ",(0,r.jsx)(s.code,{children:"0"})]}),"\n",(0,r.jsx)(s.p,{children:"The progress at which Loader has loaded, zero to one."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"textures",children:"textures"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"textures"}),": ",(0,r.jsx)(s.code,{children:"Map"}),"<",(0,r.jsx)(s.code,{children:"string"}),", ",(0,r.jsx)(s.code,{children:"Texture"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"A map of all textures loaded by Voxelize."}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"getgiftexture",children:"getGifTexture"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"getGifTexture"}),"(",(0,r.jsx)(s.code,{children:"source"}),"): ",(0,r.jsx)(s.code,{children:"Texture"}),"[]"]}),"\n",(0,r.jsx)(s.p,{children:"Get a loaded gif texture with this function."}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The source to the texture file loaded from."})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Texture"}),"[]"]}),"\n",(0,r.jsx)(s.p,{children:"A list of textures for each frame of the gif."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"gettexture",children:"getTexture"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"getTexture"}),"(",(0,r.jsx)(s.code,{children:"source"}),"): ",(0,r.jsx)(s.code,{children:"Texture"})]}),"\n",(0,r.jsx)(s.p,{children:"Get a loaded texture by its source."}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The source to the texture file to load from."})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Texture"})}),"\n",(0,r.jsx)(s.p,{children:"A texture instance loaded from the source."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"load",children:"load"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"load"}),"(): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"Load all assets other than the textures. Called internally by the world.\nThis can be used to ensure that a function runs after all assets are loaded."}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"A promise that resolves when all assets are loaded."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Example"})})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"world.loader.load().then(() => {});\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"loadaudiobuffer",children:"loadAudioBuffer"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"loadAudioBuffer"}),"(",(0,r.jsx)(s.code,{children:"source"}),", ",(0,r.jsx)(s.code,{children:"onLoaded?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"AudioBuffer"}),">"]}),"\n",(0,r.jsx)(s.p,{children:"Add an audio file to be loaded from."}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The source to the audio file to load from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"onLoaded?"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"buffer"}),": ",(0,r.jsx)(s.code,{children:"AudioBuffer"}),") => ",(0,r.jsx)(s.code,{children:"void"})]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"A callback to run when the audio is loaded."})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"AudioBuffer"}),">"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"loadgifimages",children:"loadGifImages"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"loadGifImages"}),"(",(0,r.jsx)(s.code,{children:"source"}),", ",(0,r.jsx)(s.code,{children:"onLoaded?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),"[]>"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"onLoaded?"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"images"}),": ",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),"[]) => ",(0,r.jsx)(s.code,{children:"void"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),"[]>"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"loadimage",children:"loadImage"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"loadImage"}),"(",(0,r.jsx)(s.code,{children:"source"}),", ",(0,r.jsx)(s.code,{children:"onLoaded?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"onLoaded?"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"image"}),": ",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),") => ",(0,r.jsx)(s.code,{children:"void"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"HTMLImageElement"}),">"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"loadtexture",children:"loadTexture"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"loadTexture"}),"(",(0,r.jsx)(s.code,{children:"source"}),", ",(0,r.jsx)(s.code,{children:"onLoaded?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"Texture"}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"source"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"onLoaded?"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"texture"}),": ",(0,r.jsx)(s.code,{children:"Texture"}),") => ",(0,r.jsx)(s.code,{children:"void"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.code,{children:"Texture"}),">"]})]})}function x(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1670:(e,s,l)=>{l.d(s,{Z:()=>i,a:()=>n});var r=l(7378);const d={},t=r.createContext(d);function n(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);