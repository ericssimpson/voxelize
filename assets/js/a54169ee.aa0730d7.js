"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2696],{566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(4246),i=n(1670);const r={sidebar_position:3},o="Installation",a={id:"intro/installation",title:"Installation",description:"Once the github repository is cloned, let's try to understand what is going on.",source:"@site/docs/tutorials/intro/3-installation.md",sourceDirName:"intro",slug:"/intro/installation",permalink:"/tutorials/intro/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/tutorials/intro/getting-started"},next:{title:"The Basics",permalink:"/tutorials/category/the-basics"}},l={},c=[{value:"Server Setup",id:"server-setup",level:2},{value:"Client Setup",id:"client-setup",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Once the github repository is cloned, let's try to understand what is going on."}),"\n",(0,s.jsx)(t.h2,{id:"server-setup",children:"Server Setup"}),"\n",(0,s.jsxs)(t.p,{children:["The Voxelize server runs mainly on the ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/voxelize",children:"voxelize"})," crate. We will also be using:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://crates.io/crates/actix-web",children:"actix-web"})," for network/websocket handling."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://crates.io/crates/specs",children:"specs"})," for the central Entity Component System."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",metastring:'title="server/Cargo.toml"',children:'voxelize = "*"\nactix-web = "*"\nspecs = {version = "*", features = ["specs-derive", "serde"]}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"client-setup",children:"Client Setup"}),"\n",(0,s.jsxs)(t.p,{children:["The client-side npm package of Voxelize is called ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/@voxelize/core",children:(0,s.jsx)(t.code,{children:"@voxelize/core"})}),". Voxelize uses ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/three",children:(0,s.jsx)(t.code,{children:"three.js"})})," for the 3D rendering. As you can see in the template, they have been added to our project in the ",(0,s.jsx)(t.code,{children:"package.json"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'"dependencies": {\n  "@voxelize/core": "**",\n  "three": "*"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now you're ready to start developing! Remember, the finished version of this tutorial can be find ",(0,s.jsx)(t.a,{href:"https://github.com/voxelize/voxelize-tutorial/tree/final",children:"here"})," if you are stuck."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7378);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);