"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1651],{4688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(4246),s=n(1670);const o={sidebar_position:11},r="Debug Voxelize",l={id:"basics/debug-ui",title:"Debug Voxelize",description:"It is fairly easy to use the built-in voxelize debug UI. All you have to do is:",source:"@site/docs/tutorials/basics/11-debug-ui.md",sourceDirName:"basics",slug:"/basics/debug-ui",permalink:"/tutorials/basics/debug-ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Player Control",permalink:"/tutorials/basics/player-control"},next:{title:"Update Voxels",permalink:"/tutorials/basics/update-voxels"}},a={},d=[];function c(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"debug-voxelize",children:"Debug Voxelize"}),"\n",(0,i.jsx)(t.p,{children:"It is fairly easy to use the built-in voxelize debug UI. All you have to do is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"import '@voxelize/core/dist/styles.css'; // For any built-in UI in Voxelize\n\n// ...\n\nconst debug = new VOXELIZE.Debug(document.body);\n\ndebug.registerDisplay('Current time', world, 'time', (time) => time.toFixed(2));\n\ninputs.bind('j', debug.toggle)\n\n// ...\n\nfunction animate() {\n    // ...\n\n    if (world.isInitialized) {\n        // ...\n\n        debug.update();\n    }\n}\n\n// ...\n"})}),"\n",(0,i.jsxs)(t.p,{children:['I added a debugging element called "Current time", which reads the ',(0,i.jsx)(t.code,{children:"time"})," property from the world every time ",(0,i.jsx)(t.code,{children:"debug.update()"})," is called. The last argument passed in is the ",(0,i.jsx)(t.strong,{children:"formatter"}),", which formats the time to 2 decimal places."]}),"\n",(0,i.jsxs)(t.p,{children:["Additional to the built-in debug element, I also recommend using the ",(0,i.jsx)(t.code,{children:"lil-gui"})," library to quickly create interactive debugging elements:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install lil-gui\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"import { GUI } from 'lil-gui';\n\nconst gui = new GUI();\ngui.domElement.style.top = \"10px\";\n\nasync function start() {\n    // ...\n\n    await world.initialize();\n\n    gui\n        .add({ time: world.time }, 'time', 0, world.options.timePerDay, 0.01)\n        .onFinishChange((time) => {\n            world.time = time; // Calls the 'vox-builtin:set-time' method internally\n        });\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You should see these two panels once everything is working. For the ",(0,i.jsx)(t.code,{children:"world.time"})," setter, the world calls an internal method to the server ",(0,i.jsx)(t.code,{children:"vox-builtin:set-time"}),". To learn more about methods, check out ",(0,i.jsx)(t.a,{href:"/wiki/calling-methods",children:"the method tutorial"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(6592).Z+"",width:"2560",height:"1440"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6592:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/time-setter-024112bee061efdf0c34f1af596b230f.png"},1670:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7378);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);