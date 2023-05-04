module.exports = {
  base: "/happyLife/",
  title: "山雨光云的小窝",
  description: "山雨光云的小窝",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "主页", link: "https://shanyuguangyun.github.io/webBook/front/vue" },
      { text: "基础知识", link: "https://shanyuguangyun.github.io/gitBook" },
      { text: "数据结构", link: "https://shanyuguangyun.github.io/dsBook/ds/xu" },
      { text: "GitHub", link: "https://github.com/shanyuguangyun" },
    ],
    sidebar: [
      {
        title: "音乐", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/music/chap1", 
        ],
      },
      {
        title: "下厨", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/cook/chap1", 
          "/cook/chap2", 
        ],
      },
      {
        title: "猫猫", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/cat/chap1", 
        ],
      },
      {
        title: "风景", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/beauty/chap1", 
        ],
      },
      {
        title: "车车", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/car/chap1", 
        ],
      },
      {
        title: "表情", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/emoji/chap1", 
        ],
      }
    ],
  },
};
