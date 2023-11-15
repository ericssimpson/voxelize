"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3178],{7690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(4246),n=r(1670);const i={sidebar_position:1},a="Create the Server",o={id:"basics/create-the-server",title:"Create the Server",description:"A Voxelize server is a very powerful HTTP based web server that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side.",source:"@site/docs/tutorials/basics/1-create-the-server.md",sourceDirName:"basics",slug:"/basics/create-the-server",permalink:"/tutorials/basics/create-the-server",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/tutorials/category/the-basics"},next:{title:"Register Blocks",permalink:"/tutorials/basics/register-blocks"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-the-server",children:"Create the Server"}),"\n",(0,s.jsxs)(t.p,{children:["A Voxelize server is a very ",(0,s.jsx)(t.strong,{children:"powerful HTTP based web server"})," that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side."]}),"\n",(0,s.jsxs)(t.p,{children:["Go to ",(0,s.jsx)(t.code,{children:"server/main.rs"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:'title="test"',children:"use voxelize::{Server, Voxelize};\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()>{\n    let server = Server::new().port(4000).build();\n\n    Voxelize::run(server).await\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this code snippet, we create a server running at port ",(0,s.jsx)(t.code,{children:"4000"}),". We will be adding more configurations later on."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, we can run ",(0,s.jsx)(t.code,{children:"npm run server"})," which internally runs ",(0,s.jsx)(t.code,{children:"cargo run"}),". This server should now be running on ",(0,s.jsx)(t.code,{children:"http://localhost:4000"}),", and you'll see something like below in the terminal."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Server Start",src:r(7048).Z+"",width:"1754",height:"534"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/1.0.0/style/ownership/builders.html",children:"idiomatic builder pattern"}),"\xa0is heavily used in Voxelize!"]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7048:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/server-start-3da2db6dd9040553c772b4e7c782809e.png"},1670:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(7378);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);