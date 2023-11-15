"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2296],{7537:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(4246),n=s(1670);const r={sidebar_position:14},a="Multiplayer",o={id:"basics/multiplayer",title:"Multiplayer",description:"Voxelize uses websockets under the hood, and multiplayer functionality is actually already built into the engine. You can implement the client-side multiplayer by simply using VOXELIZE.Peers.",source:"@site/docs/tutorials/basics/14-multiplayer.md",sourceDirName:"basics",slug:"/basics/multiplayer",permalink:"/tutorials/basics/multiplayer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Set Perspectives",permalink:"/tutorials/basics/perspectives-and-visuals"},next:{title:"Intermediate",permalink:"/tutorials/category/intermediate"}},l={},c=[];function u(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"multiplayer",children:"Multiplayer"}),"\n",(0,i.jsxs)(t.p,{children:["Voxelize uses websockets under the hood, and multiplayer functionality is actually already built into the engine. You can implement the client-side multiplayer by simply using ",(0,i.jsx)(t.code,{children:"VOXELIZE.Peers"}),".\nIt is possible to customize and use your own mesh for other players' meshes. For this tutorial, we'll just use the Voxelize characters."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"const peers = new VOXELIZE.Peers(rigidControls.object);\n\npeers.createPeers = createCharacter;\n\npeers.onPeerUpdate = (peer, data) => {\n    peer.set(data.position, data.direction);\n};\n\nworld.add(peers);\n\n// ...\n\nfunction animate() {\n    if (world.isInitialized) {\n        // ...\n        peers.update(); \n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Here, we pass in the rigidControls's object, which is just the camera. This is used to send back this client's current position every frame to update all the other clients. Also, the ",(0,i.jsx)(t.code,{children:"peer.set"})," is using the ",(0,i.jsx)(t.a,{href:"/api/client/classes/Character#set",children:(0,i.jsx)(t.code,{children:"Character.set"})}),", which updates the Voxelize characters."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(9598).Z+"",width:"2560",height:"1440"})}),"\n",(0,i.jsx)(t.p,{children:"That's it, now you have multiplayer!"})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9598:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/multiplayer-4c0ab66d7c85364874dc34078aa49150.png"},1670:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var i=s(7378);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);