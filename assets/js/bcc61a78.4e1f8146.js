"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3799],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(5773),a=(n(7378),n(5318));const i={sidebar_position:3},l="Create a World",o={unversionedId:"basics/create-a-world",id:"basics/create-a-world",title:"Create a World",description:"With a server and two blocks, we are ready to create our first world.",source:"@site/docs/tutorials/basics/3-create-a-world.md",sourceDirName:"basics",slug:"/basics/create-a-world",permalink:"/tutorials/basics/create-a-world",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Register Blocks",permalink:"/tutorials/basics/register-blocks"},next:{title:"Chunk Generation",permalink:"/tutorials/basics/chunk-generation"}},u={},s=[{value:"What are Chunks?",id:"what-are-chunks",level:2},{value:"World Configuration",id:"world-configuration",level:2},{value:"World Creation",id:"world-creation",level:2},{value:"Progress Check",id:"progress-check",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-world"},"Create a World"),(0,a.kt)("p",null,"With a server and two blocks, we are ready to create our first world."),(0,a.kt)("h2",{id:"what-are-chunks"},"What are Chunks?"),(0,a.kt)("p",null,"Chunks are columns of blocks that make up an entire Voxelize world. By default, a chunk is 16x256x16 in dimension. A Voxelize world can be infinite because the world only generates the chunks around the clients, and as the client moves, more chunks are generated."),(0,a.kt)("p",null,"Chunks have their own coordinate system, separate from the voxel coordinate system. Voxel coordinates are 3D, and chunk coordinates are 2D. For example, if the chunk size is 16 blocks wide, the voxel ",(0,a.kt)("inlineCode",{parentName:"p"},"(1, 1, 1)")," would reside in the chunk ",(0,a.kt)("inlineCode",{parentName:"p"},"(0, 0)"),", and the voxel ",(0,a.kt)("inlineCode",{parentName:"p"},"(17, 1, 1)")," would reside in chunk ",(0,a.kt)("inlineCode",{parentName:"p"},"(1, 0)"),". If chunk has a max height of 256, a voxel coordinate such as ",(0,a.kt)("inlineCode",{parentName:"p"},"(17, 256, 1)")," would be invalid since the valid y-coordinate range would be ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"256"),"."),(0,a.kt)("p",null,"The concept of chunk allows Voxelize to organize data and run things in parallel"),(0,a.kt)("h2",{id:"world-configuration"},"World Configuration"),(0,a.kt)("p",null,"Voxelize worlds are configured through ",(0,a.kt)("inlineCode",{parentName:"p"},"WorldConfig"),"s. It defines how the world should be run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="server/main.rs"',title:'"server/main.rs"'},"// highlight-next-line\nuse voxelize::{Block, Registry, Server, Voxelize, WorldConfig};\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    // ... Creating the server\n\n    // highlight-start\n    let config = WorldConfig::new()\n        .min_chunk([-1, -1])\n        .max_chunk([1, 1])\n        .build();\n    // highlight-end\n\n    // ... Running the server\n}\n")),(0,a.kt)("p",null,"The snippet above creates a configuration for a world that generates only 9 chunks, from ",(0,a.kt)("inlineCode",{parentName:"p"},"(-1, -1)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"(1, 1)")," inclusively."),(0,a.kt)("p",null,"Here are the properties that can be configured in a world config:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_clients"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum amount of clients a world can hold."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chunk_size"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The horizontal dimension of each chunk."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sub_chunks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The amount of sub meshes each chunk."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_height"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum height of the world, in other words the vertical dimension of each chunk."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_chunk"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The minimum inclusive chunk on this world."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_chunk"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum inclusive chunk on this world."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_light_level"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum level of light that can be propagated."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_updates_per_tick"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum voxel updates to be processed per tick."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_chunks_per_tick"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maxmimum chunks that can be processed per tick."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_response_per_tick"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The maximum chunk response per tick to prevent network bottle-necking."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"water_level"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The water level of the world. Can be used in the terrain generation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gravity"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Three dimensional gravity."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_bounce_impulse"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The minimum impulse to start bouncing."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"air_drag"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Drag of the air in the voxelize world."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fluid_drag"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Drag of the fluid in the voxelize world."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fluid_density"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Density of the fluid in the voxelize world."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"collision_impulse"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The impulse applied on two entities who collides together."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Seed of the voxelize world, used in\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Terrain"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"terrain"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A set of noise parameters that can be used to generate the terrain shape."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"saving"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Whether or not should the world be saved."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"save_dir"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The directory to save the world at."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"save_interval"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The rate at which the world is being saved at.")))),(0,a.kt)("h2",{id:"world-creation"},"World Creation"),(0,a.kt)("p",null,"Now that we have a world configuration, we can use it to create a Voxelize world."),(0,a.kt)("p",null,"There are two ways of doing so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="server/main.rs"',title:'"server/main.rs"'},'// Method 1\nuse voxelize::World;\n\nlet world = World::new("example", &config);\nserver.add_world(world).expect("Could not add world!");\n\n// Method 2\nlet world = server.create_world("example", &config).unwrap();\n')),(0,a.kt)("p",null,"Both ways add a new world called ",(0,a.kt)("inlineCode",{parentName:"p"},'"example"')," to the Voxelize server."),(0,a.kt)("h2",{id:"progress-check"},"Progress Check"),(0,a.kt)("p",null,"The code so far on ",(0,a.kt)("inlineCode",{parentName:"p"},"server/main.rs")," should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="server/main.rs"',title:'"server/main.rs"'},'use voxelize::{Block, Registry, Server, Voxelize, World, WorldConfig};\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let mut registry = Registry::new();\n\n    let dirt = Block::new("Dirt").id(1).build();\n    let stone = Block::new("Stone").id(2).build();\n\n    registry.register_blocks(&[dirt, stone]);\n\n    let mut server = Server::new().port(4000).registry(&registry).build();\n\n    let config = WorldConfig::new()\n        .min_chunk([-1, -1])\n        .max_chunk([1, 1])\n        .build();\n\n    let world = World::new("example", &config);\n    server.add_world(world).expect("Could not add world!");\n\n    Voxelize::run(server).await\n}\n')))}d.isMDXComponent=!0}}]);