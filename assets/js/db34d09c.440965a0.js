"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1635],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(5773),a=(r(7378),r(5318));const i={sidebar_position:1},o="Create the Server",s={unversionedId:"basics/create-the-server",id:"basics/create-the-server",title:"Create the Server",description:"A Voxelize server is a very powerful HTTP based web server that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side.",source:"@site/docs/basics/1-create-the-server.md",sourceDirName:"basics",slug:"/basics/create-the-server",permalink:"/docs/basics/create-the-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/1-create-the-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/docs/category/the-basics"},next:{title:"Register Blocks",permalink:"/docs/basics/register-blocks"}},l={},c=[],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-the-server"},"Create the Server"),(0,a.kt)("p",null,"A Voxelize server is a very ",(0,a.kt)("strong",{parentName:"p"},"powerful HTTP based web server")," that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side. "),(0,a.kt)("p",null,"A server can contain multiple worlds. For demonstration purposes, we will only be creating one world for this tutorial called ",(0,a.kt)("strong",{parentName:"p"},"example"),"."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"server/main.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="test"',title:'"test"'},"use voxelize::{Server, Voxelize};\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()>{\n    let server = Server::new().port(4000).build();\n\n    Voxelize::run(server).await\n}\n")),(0,a.kt)("p",null,"In this code snippet, we create a server running at port ",(0,a.kt)("inlineCode",{parentName:"p"},"4000"),". We will be adding more configurations later on."),(0,a.kt)("p",null,"Now, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run server"),", which ",(0,a.kt)("inlineCode",{parentName:"p"},"cd"),"'s into the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," folder and runs ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo run"),". The server should now be running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and you'll see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Start",src:r(2458).Z,width:"1754",height:"534"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The\xa0",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.0.0/style/ownership/builders.html"},"idiomatic builder pattern"),"\xa0is heavily used in Voxelize!")))}u.isMDXComponent=!0},2458:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-start-3da2db6dd9040553c772b4e7c782809e.png"}}]);