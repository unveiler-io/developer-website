module.exports = {
  docs: [
    {
      type: 'category',
      label: 'ClaimR',
      items: ['overview', 'use-cases'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'ClaimR API',
      items: ['api/getting-started', 'api/jwts', 'api/schema'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'React Native Client',
      collapsed: false,
      items: [
        'react-native/overview',
        'react-native/requirements',
        'react-native/getting-started',
        'react-native/api',
      ],
    },
  ],
}
