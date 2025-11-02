import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'TwoThreeBlocks',
    tagline: '二三方块 Minecraft 服务器 Wiki',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'http://wiki.ocks.top/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'masterLazy', // Usually your GitHub org/user name.
    projectName: 'TwoThreeBlocks Wiki', // Usually your repo name.

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //    'https://github.com/masterLazy/TwoThreeBlocks-Wiki/tree/main/',
                    showLastUpdateTime: true
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
        },
        // Replace with your project's social card
        navbar: {
            title: 'TwoThreeBlocks',
            logo: {
                alt: 'TTB Logo',
                src: 'img/logo-light.svg',
                srcDark: 'img/logo-dark.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'mySidebar',
                    position: 'left',
                    label: '文档',
                },
                {
                    to: '/docs/category/-指南',
                    position: 'left',
                    label: '指南',
                },
                {
                    to: '/docs/category/地点列表',
                    position: 'left',
                    label: '地点列表',
                },
                {
                    to: '/docs/donate',
                    position: 'left',
                    label: '🤝 赞助我们',
                },
                {
                    href: 'https://github.com/masterLazy/TwoThreeBlocks-Wiki',
                    position: 'right',
                    className: 'header-link header-github-link',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: '文档',
                    items: [
                        {
                            label: '概述',
                            to: '/docs/intro',
                        },
                        {
                            label: '指南',
                            to: '/docs/category/-指南'
                        },
                        {
                            label: '地点列表',
                            to: '/docs/category/地点列表'
                        },
                        {
                            label: '赞助者名单',
                            to: '/docs/category/赞助者名单'
                        }
                    ],
                },
                {
                    title: '更多',
                    items: [
                        {
                            label: '本站GitHub仓库',
                            href: 'https://github.com/masterLazy/TwoThreeBlocks-Wiki',
                        },
                        {
                            label: '二三方块人交流会',
                            href: 'https://qm.qq.com/q/7ZjpDLT6De'
                        }
                    ],
                },
                {
                    title: '常用网站',
                    items: [
                        {
                            label: '中文Minecraft Wiki镜像站 (Bilibili)',
                            href: 'https://wiki.biligame.com/mc/Minecraft_Wiki',
                        },
                        {
                            label: 'Modrinth (Mod 下载)',
                            href: 'https://modrinth.com/',
                        },
                        {
                            label: 'MC百科 (mcmod.cn)',
                            href: 'https://www.mcmod.cn/',
                        },
                        {
                            label: 'ChunkBase',
                            href: 'https://www.chunkbase.com/',
                        },
                    ],
                }
            ],
            copyright: `© ${new Date().getFullYear()} TwoThreeBlocks · Built with Docusaurus · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        future: {
            experimental_faster: true,
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
