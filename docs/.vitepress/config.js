export default {
    title: 'Speedrun Document',
    lastUpdated: true,
    srcDir: './mcsr',
    cleanUrls:true,
    themeConfig: {
        head:[
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
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
                    {text:"宏/工具",link:"/resources/tools.md"}
                ]
            },
            {
                text: "教程",
                collapsed: true,
                items: [
                    {text: "如何使用SpawnJuicer进行SSG的多开",link: "/guide/spawnjuicer.md"},
                    {text: "如何使用墙进行RSG的多开",link: "/guide/wall.md"},
                    {text: "如何游玩排位模式",link: "/guide/mcsrranked.md"},
                    {text: "如何配置用于k4hr挑战的计时器",link: "/guide/k4hr.md"},
                    {text: "如何寻找一个种子的最佳出生点",link: "/guide/spawnpoint.md"},
                    {text:"关于访问Github加速",link:"/guide/steampp.md"},
                ]
            },
            {
                text: "常见问题以及回答",
                link: "/questions.md"
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present RayXu6'
        }
    }
}