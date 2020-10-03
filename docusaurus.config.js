const path = require('path')

const copyright = `Copyright © ${new Date().getFullYear()}, ClaimR`

module.exports = {
  title: 'ClaimR',
  tagline: "The simplest way to verify your user's location.",
  url: 'https://claimr.tools',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ClaimR',
  projectName: 'developer-website',
  themeConfig: {
    navbar: {
      title: 'ClaimR',
      logo: {
        alt: 'ClaimR Logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'docs/pricing', label: 'Pricing', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ClaimR',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    goatcounter: {
      code: 'claimr-docs',
    },
    algolia: {
      apiKey: '506c2a603210897672a1348fb8df8c08',
      indexName: 'claimr',
      searchParameters: {},
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
            {
              label: 'Getting Started',
              to: 'docs/api/getting-started',
            },
            {
              label: 'React Native Client',
              to: 'docs/react-native/getting-started',
            },
            {
              label: 'Pricing',
              to: 'docs/pricing',
            },
          ],
        },
        {
          title: 'Social & Contact',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ClaimR',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCZRWpBaWAeLP6uYLE0kDbRg',
            },
            {
              label: 'Email',
              href: 'mailto:contact@claimr.tools',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://claimr.tools',
            },
            {
              label: 'Dashboard',
              href: 'https://dashboard.claimr.tools',
            },
            {
              label: 'Status',
              href: 'https://status.claimr.tools',
            },
            {
              label: 'API',
              href: 'https://api.claimr.tools',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/claimr/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/claimr/docs/edit/main/',
          feedOptions: {
            type: 'all',
            copyright,
            language: 'en',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-goatcounter'],
}
