"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6320],{2307:e=>{e.exports=JSON.parse('{"pluginId":"tutorials","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is Voxelize?","href":"/tutorials/intro/what-is-voxelize","docId":"intro/what-is-voxelize","unlisted":false},{"type":"link","label":"Getting Started","href":"/tutorials/intro/getting-started","docId":"intro/getting-started","unlisted":false},{"type":"link","label":"Installation","href":"/tutorials/intro/installation","docId":"intro/installation","unlisted":false}]},{"type":"category","label":"The Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create the Server","href":"/tutorials/basics/create-the-server","docId":"basics/create-the-server","unlisted":false},{"type":"link","label":"Register Blocks","href":"/tutorials/basics/register-blocks","docId":"basics/register-blocks","unlisted":false},{"type":"link","label":"Create a World","href":"/tutorials/basics/create-a-world","docId":"basics/create-a-world","unlisted":false},{"type":"link","label":"Chunk Generation","href":"/tutorials/basics/chunk-generation","docId":"basics/chunk-generation","unlisted":false},{"type":"link","label":"Create the Client","href":"/tutorials/basics/create-the-client","docId":"basics/create-the-client","unlisted":false},{"type":"link","label":"Voxelize Networking","href":"/tutorials/basics/handle-the-network","docId":"basics/handle-the-network","unlisted":false},{"type":"link","label":"Initialize the World","href":"/tutorials/basics/initialize-the-world","docId":"basics/initialize-the-world","unlisted":false},{"type":"link","label":"Apply Textures","href":"/tutorials/basics/texturing-blocks","docId":"basics/texturing-blocks","unlisted":false},{"type":"link","label":"Player Control","href":"/tutorials/basics/player-control","docId":"basics/player-control","unlisted":false},{"type":"link","label":"Debug Voxelize","href":"/tutorials/basics/debug-ui","docId":"basics/debug-ui","unlisted":false},{"type":"link","label":"Update Voxels","href":"/tutorials/basics/update-voxels","docId":"basics/update-voxels","unlisted":false},{"type":"link","label":"Set Perspectives","href":"/tutorials/basics/perspectives-and-visuals","docId":"basics/perspectives-and-visuals","unlisted":false},{"type":"link","label":"Multiplayer","href":"/tutorials/basics/multiplayer","docId":"basics/multiplayer","unlisted":false}],"href":"/tutorials/category/the-basics"},{"type":"category","label":"Intermediate","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Entity Component System","href":"/tutorials/intermediate/entity-component-system","docId":"intermediate/entity-component-system","unlisted":false},{"type":"link","label":"the-client-entity","href":"/tutorials/intermediate/the-client-entity","docId":"intermediate/the-client-entity","unlisted":false},{"type":"link","label":"custom-entity-creation","href":"/tutorials/intermediate/custom-entity-creation","docId":"intermediate/custom-entity-creation","unlisted":false},{"type":"link","label":"metadata-component","href":"/tutorials/intermediate/metadata-component","docId":"intermediate/metadata-component","unlisted":false},{"type":"link","label":"customizing-the-ecs","href":"/tutorials/intermediate/customizing-the-ecs","docId":"intermediate/customizing-the-ecs","unlisted":false},{"type":"link","label":"network-interception","href":"/tutorials/intermediate/network-interception","docId":"intermediate/network-interception","unlisted":false},{"type":"link","label":"collision-detection","href":"/tutorials/intermediate/collision-detection","docId":"intermediate/collision-detection","unlisted":false},{"type":"link","label":"the-events-system","href":"/tutorials/intermediate/the-events-system","docId":"intermediate/the-events-system","unlisted":false},{"type":"link","label":"method-handling","href":"/tutorials/intermediate/method-handling","docId":"intermediate/method-handling","unlisted":false},{"type":"link","label":"chat-and-colored-text","href":"/tutorials/intermediate/chat-and-colored-text","docId":"intermediate/chat-and-colored-text","unlisted":false},{"type":"link","label":"custom-blocks","href":"/tutorials/intermediate/custom-blocks","docId":"intermediate/custom-blocks","unlisted":false},{"type":"link","label":"Protocol Networking","href":"/tutorials/intermediate/protocol-networking","docId":"intermediate/protocol-networking","unlisted":false},{"type":"link","label":"typescript-transport","href":"/tutorials/intermediate/typescript-transport","docId":"intermediate/typescript-transport","unlisted":false}],"href":"/tutorials/category/intermediate"},{"type":"category","label":"Extras","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Placeholder","href":"/tutorials/extras/test","docId":"extras/test","unlisted":false}],"href":"/tutorials/category/extras"}]},"docs":{"basics/chunk-generation":{"id":"basics/chunk-generation","title":"Chunk Generation","description":"In this chapter, we learn about how to populate blocks into empty chunks, in parallel.","sidebar":"tutorialSidebar"},"basics/create-a-world":{"id":"basics/create-a-world","title":"Create a World","description":"With a server and two blocks, we are ready to create our first world.","sidebar":"tutorialSidebar"},"basics/create-the-client":{"id":"basics/create-the-client","title":"Create the Client","description":"Now that we have a running server, it\'s time for us to create our client.","sidebar":"tutorialSidebar"},"basics/create-the-server":{"id":"basics/create-the-server","title":"Create the Server","description":"A Voxelize server is a very powerful HTTP based web server that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side.","sidebar":"tutorialSidebar"},"basics/debug-ui":{"id":"basics/debug-ui","title":"Debug Voxelize","description":"It is fairly easy to use the built-in voxelize debug UI. All you have to do is:","sidebar":"tutorialSidebar"},"basics/handle-the-network":{"id":"basics/handle-the-network","title":"Voxelize Networking","description":"In order to connect our frontend client to the backend Rust server, we need to create a network manager in Voxelize. The network manager handles all the ins and outs of the network packets. For example, the VOXELIZE.World requests for chunks on the server side, but you will need the network manager to send/receive these chunk data to and from the server.","sidebar":"tutorialSidebar"},"basics/initialize-the-world":{"id":"basics/initialize-the-world","title":"Initialize the World","description":"Upon connecting to the server, the voxelize world receives a INIT packet since it\'s registered onto the network. We need to use that packet and initialize the world so that world.isInitialized would be true.","sidebar":"tutorialSidebar"},"basics/multiplayer":{"id":"basics/multiplayer","title":"Multiplayer","description":"Voxelize uses websockets under the hood, and multiplayer functionality is actually already built into the engine. You can implement the client-side multiplayer by simply using VOXELIZE.Peers.","sidebar":"tutorialSidebar"},"basics/perspectives-and-visuals":{"id":"basics/perspectives-and-visuals","title":"Set Perspectives","description":"Me personally, I really like to play games in 3rd person\'s perspective. So, let\'s quickly add perspective switching to our app by pressing \\"c\\".","sidebar":"tutorialSidebar"},"basics/player-control":{"id":"basics/player-control","title":"Player Control","description":"Since Voxelize is built with ThreeJS, any camera controller would theoretically work perfectly. Voxelize does provide developers a well-rounded physics-based controller to walk run and jump around the voxel world, which is the VOXELIZE.RigidControls. RigidControls actually uses the ThreeJS PointerLockControls internally.","sidebar":"tutorialSidebar"},"basics/register-blocks":{"id":"basics/register-blocks","title":"Register Blocks","description":"A voxel world contains tens of millions of blocks, with each block having its own properties and different ways of rendering. Thus, after creating a server, we should register the block types that are used across this server.","sidebar":"tutorialSidebar"},"basics/texturing-blocks":{"id":"basics/texturing-blocks","title":"Apply Textures","description":"The next step that we will be taking is to apply textures to the blocks. Right now, the block textures are all question marks since we haven\'t applied any textures yet. We will be using the following four textures under public/blocks. The reason why grass_side.png is blurry is because it\'s actually only 8 pixels in dimension.","sidebar":"tutorialSidebar"},"basics/update-voxels":{"id":"basics/update-voxels","title":"Update Voxels","description":"In order to update voxels, we need to cast a ray from the camera to the voxel world and figure out which voxel the player is looking at. Luckily, there is a very fast algorithm to do so here.","sidebar":"tutorialSidebar"},"extras/test":{"id":"extras/test","title":"Placeholder","description":"","sidebar":"tutorialSidebar"},"intermediate/chat-and-colored-text":{"id":"intermediate/chat-and-colored-text","title":"chat-and-colored-text","description":"","sidebar":"tutorialSidebar"},"intermediate/collision-detection":{"id":"intermediate/collision-detection","title":"collision-detection","description":"","sidebar":"tutorialSidebar"},"intermediate/custom-blocks":{"id":"intermediate/custom-blocks","title":"custom-blocks","description":"","sidebar":"tutorialSidebar"},"intermediate/custom-entity-creation":{"id":"intermediate/custom-entity-creation","title":"custom-entity-creation","description":"","sidebar":"tutorialSidebar"},"intermediate/customizing-the-ecs":{"id":"intermediate/customizing-the-ecs","title":"customizing-the-ecs","description":"","sidebar":"tutorialSidebar"},"intermediate/entity-component-system":{"id":"intermediate/entity-component-system","title":"Entity Component System","description":"Voxelize servers run on the Specs ECS crate. It is recommended to read through the Specs ECS tutorial before continuing.","sidebar":"tutorialSidebar"},"intermediate/metadata-component":{"id":"intermediate/metadata-component","title":"metadata-component","description":"","sidebar":"tutorialSidebar"},"intermediate/method-handling":{"id":"intermediate/method-handling","title":"method-handling","description":"","sidebar":"tutorialSidebar"},"intermediate/network-interception":{"id":"intermediate/network-interception","title":"network-interception","description":"","sidebar":"tutorialSidebar"},"intermediate/protocol-networking":{"id":"intermediate/protocol-networking","title":"Protocol Networking","description":"Before creating a client to connect to the server, let\'s dive deeper into creating","sidebar":"tutorialSidebar"},"intermediate/the-client-entity":{"id":"intermediate/the-client-entity","title":"the-client-entity","description":"","sidebar":"tutorialSidebar"},"intermediate/the-events-system":{"id":"intermediate/the-events-system","title":"the-events-system","description":"","sidebar":"tutorialSidebar"},"intermediate/typescript-transport":{"id":"intermediate/typescript-transport","title":"typescript-transport","description":"","sidebar":"tutorialSidebar"},"intro/getting-started":{"id":"intro/getting-started","title":"Getting Started","description":"This series of tutorials will be based on this tutorial repository. We will be building a full-stack deployable app that teaches you how to use Voxelize.","sidebar":"tutorialSidebar"},"intro/installation":{"id":"intro/installation","title":"Installation","description":"Once the github repository is cloned, let\'s try to understand what is going on.","sidebar":"tutorialSidebar"},"intro/what-is-voxelize":{"id":"intro/what-is-voxelize","title":"What is Voxelize?","description":"Voxelize is an easy-to-use fullstack library to build fast, interactive, and creative voxel experiences.","sidebar":"tutorialSidebar"}}}')}}]);