import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
export default withPwa(defineConfig({
    title: 'Speedrun Document',
    lastUpdated: true,
    cleanUrls:true,
    themeConfig: {
        head: [
            ['link', { rel: 'icon',type: 'image/x-icon', href: './favicon.ico' }],/*
            ['meta', { name: 'theme-color', content: '#3eaf7c' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
            ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
            ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
            ['meta', { name: 'msapplication-TileColor', content: '#000000' }]*/
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
                text:"总则",
                collapsed:false,
                items:[
                    {
                        text: "前言",
                        link:"/"
                    }
                ]

            },
            {
                text:"资源整理",
                collapsed: true,
                items:[
                    {text:"排行榜及群",link:"/resources/leaderboard.md"},
                    {text:"练习图",link:"/resources/pracmaps.md"},
                    {text:"SSG种子合集",link:"/resources/ssgseeds.md"},
                    {text:"模组",link:"/resources/mods.md"},
                ]
            },
            {
                text: "教程",
                collapsed: true,
                items: [
                    {
                        text:"游戏前的准备",
                        collapsed:true,
                        items: [
                            {text:"关于启动器",link:"/guide/launchers"},
                            {text:"如何安装模组",link:"/guide/loader"}
                        ]
                    },
                    {
                        text:"游戏内技巧/知识",
                        collapsed:true,
                        items: [
                            {text:"如何炸龙",link:""},
                            {text:"如何无图找宝藏",link:""}
                        ]
                    },
                    {
                        text:"宏/工具的使用",
                        collapsed:true,
                        items: [
                            {text: "前言",link: "/guide/macros"},
                            {text: "使用SpawnJuicer进行SSG的多开",link: "/guide/spawnjuicer.md"},
                            {text: "使用墙进行RSG的多开",link: "/guide/wall.md"},
                        ]
                    },
                    {
                        text:"杂项",
                        collapsed:true,
                        items: [
                            {text: "如何游玩排位模式",link: "/guide/mcsrranked.md"},
                            {text: "如何配置用于k4hr挑战的计时器",link: "/guide/k4hr.md"},
                            {text: "如何寻找一个种子的最佳出生点",link: "/guide/spawnpoint.md"},
                            {text:"关于访问Github加速",link:"/guide/steampp.md"},
                        ]
                    },
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
}))