import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

const config: Config = {
  title: 'BitFi Docs',
  tagline: 'CeDeFi hybrid documentation',
  favicon: 'img/favicon.png',
  url: 'https://docs.bitfi.one',
  baseUrl: '/',
  organizationName: 'bitfi',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  clientModules: [require.resolve('./src/polyfills/requireResolveWeak.js')],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'BitFi',
      logo: {
        alt: 'BitFi logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'BitFi Home',
              href: 'https://www.bitfi.one/',
            },
            {
              label: 'BitFi Dapp',
              href: 'https://app.bitfi.one/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BitFi.`,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
