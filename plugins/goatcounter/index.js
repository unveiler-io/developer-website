module.exports = function (context) {
  const { siteConfig } = context
  const { themeConfig } = siteConfig
  const { goatcounter } = themeConfig || {}

  if (!goatcounter) {
    throw new Error(
      `You need to specify 'goatcounter' object in 'themeConfig' with 'code' field in it to use docusaurus-plugin-goatcounter`
    )
  }

  const { code } = goatcounter

  if (!code) {
    throw new Error(
      'You specified the `googleAnalytics` object in `themeConfig` but the `code` field was missing. ' +
        'Please ensure this is not a mistake.'
    )
  }

  const isProd = process.env.NODE_ENV === 'production'

  const analyticsDomain = `https://${code}.goatcounter.com`

  return {
    name: 'docusaurus-plugin-goatcounter',
    injectHtmlTags: () => {
      if (!isProd) {
        return {}
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: analyticsDomain,
            },
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: '//gc.zgo.at/count.js',
              'data-goatcounter': `${analyticsDomain}/count`,
            },
          },
        ],
      }
    },
  }
}
