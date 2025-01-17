// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: 'sidebar'}],

  // But you can create a sidebar manually
  
  // docsSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Helpful Docs',
  //     items: ['Helpful-Docs/npm'],
  //   },
  // ],
  // projectsSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Taco-Royale',
  //     items: ['Taco-Royale/Collaboration', 'Taco-Royale/Documentation', 'Taco-Royale/Projects'],
  //   },
  // ],
  // learningSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Learning',
  //     items: ['Learning/Articles', 'Learning/TIL'],
  //   },
  // ],
  // meSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Me',
  //     collapsed: true,
  //     items: [
  //       {
  //         type: 'category',
  //         label: '1:1',
  //         items: ['Me/1:1/wc']
  //       },
  //       {
  //         type: 'category',
  //         label: 'Goals',
  //         items: ['Me/Goals/Company', 'Me/Goals/Personal', 'Me/Goals/Recognition']
  //       },
  //       {
  //         type: 'category',
  //         label: 'Weekly',
  //         items: ['Me/Weekly/1.6.25', 'Me/Weekly/1.13.25', 'Me/Weekly/To-Do']
  //       },
  //   ],
  //   }
  // ]
};

export default sidebars;
