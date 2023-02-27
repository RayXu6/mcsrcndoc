export default {
    title: 'Speedrun Document',
    lastUpdated: true,
    srcDir: './mcsr',
    cleanUrls:true,
    themeConfig: {
        nav: [
            {
                text:"MCSR",
                link:"/mcsr/"
            },
            {
                text:"Socials",
                items:[
                    {text:"BiliBili",link:"https://space.bilibili.com/556631393"},
                    {text:"Github",link:"https://github.com/RayXu6"}
                ]
            }
        ],
        sidebar: [
            {
                text: "总则",
                link:"/"
            },
            {
                text:"资源整理",
                collapsed: true,
                items:[
                    {text:"排行榜及群",link:"/resources/leaderboard.md"},
                    {text:"练习图",link:"/resources/pracmaps.md"},
                    {text:"SSG种子合集",link:"/resources/ssgseeds.md"},
                    {text:"有用的图片",link:"/resources/pics.md"},
                    {text:"模组",link:"/resources/mods.md"},
                    {text:"宏/工具",link:"/resources/tools.md"},
                    {text:"关于访问Github加速",link:"/resources/steampp.md"},
                ]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present RayXu6'
        }
    }
}