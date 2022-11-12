"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6320],{2307:e=>{e.exports=JSON.parse('{"pluginId":"tutorials","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is Voxelize?","href":"/tutorials/intro/what-is-voxelize","docId":"intro/what-is-voxelize"},{"type":"link","label":"Getting Started","href":"/tutorials/intro/getting-started","docId":"intro/getting-started"},{"type":"link","label":"Installation","href":"/tutorials/intro/installation","docId":"intro/installation"}]},{"type":"category","label":"The Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create the Server","href":"/tutorials/basics/create-the-server","docId":"basics/create-the-server"},{"type":"link","label":"Register Blocks","href":"/tutorials/basics/register-blocks","docId":"basics/register-blocks"},{"type":"link","label":"Create a World","href":"/tutorials/basics/create-a-world","docId":"basics/create-a-world"},{"type":"link","label":"Chunk Generation","href":"/tutorials/basics/chunk-generation","docId":"basics/chunk-generation"},{"type":"link","label":"Protocol Networking","href":"/tutorials/basics/protocol-networking","docId":"basics/protocol-networking"},{"type":"link","label":"Create the Client","href":"/tutorials/basics/create-the-client","docId":"basics/create-the-client"},{"type":"link","label":"Joining a World","href":"/tutorials/basics/joining-a-world","docId":"basics/joining-a-world"},{"type":"link","label":"Texturing Blocks","href":"/tutorials/basics/texturing-blocks","docId":"basics/texturing-blocks"}],"href":"/tutorials/category/the-basics"},{"type":"category","label":"Intermediate","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Entity Component System","href":"/tutorials/intermediate/entity-component-system","docId":"intermediate/entity-component-system"},{"type":"link","label":"the-client-entity","href":"/tutorials/intermediate/the-client-entity","docId":"intermediate/the-client-entity"},{"type":"link","label":"custom-entity-creation","href":"/tutorials/intermediate/custom-entity-creation","docId":"intermediate/custom-entity-creation"},{"type":"link","label":"metadata-component","href":"/tutorials/intermediate/metadata-component","docId":"intermediate/metadata-component"},{"type":"link","label":"customizing-the-ecs","href":"/tutorials/intermediate/customizing-the-ecs","docId":"intermediate/customizing-the-ecs"},{"type":"link","label":"network-interception","href":"/tutorials/intermediate/network-interception","docId":"intermediate/network-interception"},{"type":"link","label":"collision-detection","href":"/tutorials/intermediate/collision-detection","docId":"intermediate/collision-detection"},{"type":"link","label":"the-events-system","href":"/tutorials/intermediate/the-events-system","docId":"intermediate/the-events-system"},{"type":"link","label":"method-handling","href":"/tutorials/intermediate/method-handling","docId":"intermediate/method-handling"},{"type":"link","label":"chat-and-colored-text","href":"/tutorials/intermediate/chat-and-colored-text","docId":"intermediate/chat-and-colored-text"},{"type":"link","label":"custom-blocks","href":"/tutorials/intermediate/custom-blocks","docId":"intermediate/custom-blocks"},{"type":"link","label":"typescript-transport","href":"/tutorials/intermediate/typescript-transport","docId":"intermediate/typescript-transport"}],"href":"/tutorials/category/intermediate"},{"type":"category","label":"Extras","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Placeholder","href":"/tutorials/extras/test","docId":"extras/test"}],"href":"/tutorials/category/extras"}]},"docs":{"basics/chunk-generation":{"id":"basics/chunk-generation","title":"Chunk Generation","description":"In this chapter, we learn about how to populate blocks into empty chunks, in parallel.","sidebar":"tutorialSidebar"},"basics/create-a-world":{"id":"basics/create-a-world","title":"Create a World","description":"With a server and two blocks, we are ready to create our first world.","sidebar":"tutorialSidebar"},"basics/create-the-client":{"id":"basics/create-the-client","title":"Create the Client","description":"","sidebar":"tutorialSidebar"},"basics/create-the-server":{"id":"basics/create-the-server","title":"Create the Server","description":"A Voxelize server is a very powerful HTTP based web server that handles most of the heavy-lifting you see in a Voxelize app, such as world terrain generation and meshing. These tasks are done on the server-side in a multi-threaded fashion, so that we can ensure the best user experience on the client-side.","sidebar":"tutorialSidebar"},"basics/joining-a-world":{"id":"basics/joining-a-world","title":"Joining a World","description":"","sidebar":"tutorialSidebar"},"basics/protocol-networking":{"id":"basics/protocol-networking","title":"Protocol Networking","description":"Before creating a client to connect to the server, let\'s dive deeper into creating","sidebar":"tutorialSidebar"},"basics/register-blocks":{"id":"basics/register-blocks","title":"Register Blocks","description":"A Voxelize world consists of tens of millions of blocks, so our first step after creating a server should be registering the blocks used across this server.","sidebar":"tutorialSidebar"},"basics/texturing-blocks":{"id":"basics/texturing-blocks","title":"Texturing Blocks","description":"","sidebar":"tutorialSidebar"},"extras/test":{"id":"extras/test","title":"Placeholder","description":"","sidebar":"tutorialSidebar"},"intermediate/chat-and-colored-text":{"id":"intermediate/chat-and-colored-text","title":"chat-and-colored-text","description":"","sidebar":"tutorialSidebar"},"intermediate/collision-detection":{"id":"intermediate/collision-detection","title":"collision-detection","description":"","sidebar":"tutorialSidebar"},"intermediate/custom-blocks":{"id":"intermediate/custom-blocks","title":"custom-blocks","description":"","sidebar":"tutorialSidebar"},"intermediate/custom-entity-creation":{"id":"intermediate/custom-entity-creation","title":"custom-entity-creation","description":"","sidebar":"tutorialSidebar"},"intermediate/customizing-the-ecs":{"id":"intermediate/customizing-the-ecs","title":"customizing-the-ecs","description":"","sidebar":"tutorialSidebar"},"intermediate/entity-component-system":{"id":"intermediate/entity-component-system","title":"Entity Component System","description":"Voxelize servers run on the Specs ECS crate. It is recommended to read through the Specs ECS tutorial before continuing.","sidebar":"tutorialSidebar"},"intermediate/metadata-component":{"id":"intermediate/metadata-component","title":"metadata-component","description":"","sidebar":"tutorialSidebar"},"intermediate/method-handling":{"id":"intermediate/method-handling","title":"method-handling","description":"","sidebar":"tutorialSidebar"},"intermediate/network-interception":{"id":"intermediate/network-interception","title":"network-interception","description":"","sidebar":"tutorialSidebar"},"intermediate/the-client-entity":{"id":"intermediate/the-client-entity","title":"the-client-entity","description":"","sidebar":"tutorialSidebar"},"intermediate/the-events-system":{"id":"intermediate/the-events-system","title":"the-events-system","description":"","sidebar":"tutorialSidebar"},"intermediate/typescript-transport":{"id":"intermediate/typescript-transport","title":"typescript-transport","description":"","sidebar":"tutorialSidebar"},"intro/getting-started":{"id":"intro/getting-started","title":"Getting Started","description":"This series of tutorials will be based on this example repository. We will be building a full-stack deployable app that teaches you the inner-workings of Voxelize.","sidebar":"tutorialSidebar"},"intro/installation":{"id":"intro/installation","title":"Installation","description":"Once the github repository is cloned, let\'s try to understand what is going on.","sidebar":"tutorialSidebar"},"intro/what-is-voxelize":{"id":"intro/what-is-voxelize","title":"What is Voxelize?","description":"Voxelize is an easy-to-use fullstack library to build fast, interactive, and creative voxel experiences.","sidebar":"tutorialSidebar"}}}')}}]);