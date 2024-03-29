const copyright = `Copyright © ${new Date().getFullYear()}, ClaimR B.V. - KvK 81570872`

module.exports = {
  title: 'Unveiler - Developer Documentation',
  tagline: "The simplest way to verify your user's location.",
  url: 'https://developer.unveiler.io',
  baseUrl: '/',
  favicon: 'favicon.ico',
  organizationName: 'Unveiler',
  projectName: 'developer-website',
  themeConfig: {
    navbar: {
      title: 'Developer Docs',
      logo: {
        alt: 'Unveiler Logo',
        src: 'img/logo.svg',
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
          href: 'https://github.com/unveiler-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '032a61376505eb18dfa5b0b18726e97e',
      indexName: 'Unveiler Developer Website',
      appId: 'RFMSBW8V2Z',
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
              href: 'https://github.com/unveiler-io',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCZRWpBaWAeLP6uYLE0kDbRg',
            },
            {
              label: 'Email',
              href: 'mailto:contact@unveiler.io',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/ClaimR-BV',
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
              href: 'https://unveiler.io',
            },
            {
              label: 'Dashboard',
              href: 'https://dashboard.unveiler.io',
            },
            {
              label: 'Status',
              href: 'https://stats.uptimerobot.com/Zz3BYsM85k',
            },
            {
              label: 'Privacy Policy',
              href: 'https://claimr.tools/privacy-policy',
            },
            {
              label: 'API',
              href: 'https://api.unveiler.io',
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
          editUrl: 'https://github.com/unveiler-io/developer-website/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/unveiler-io/developer-website/edit/main/',
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
  plugins: [
    [
      'docusaurus-plugin-plausible',
      {
        domain: 'developer.unveiler.io',
      },
    ],
  ],
}
