module.exports = {
  title: 'ClaimR Documentation',
  tagline: "The easy way to verify your user's location. Anywhere. Anytime.",
  url: 'https://docs.claimr.tools',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ClaimR',
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ClaimR Documentation',
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
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ClaimR',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
              to: 'docs/clients/react-native',
            },
          ],
        },
        {
          title: 'Social & Contact',
          items: [
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
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, ClaimR`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/claimr/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/claimr/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
