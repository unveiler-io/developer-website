---
id: getting-started
title: Getting Started
---

## Installation

First start by adding [Unveiler's React Native client](https://www.npmjs.com/package/@unveiler.io/react-native-client) as a dependency to your React Native project.
If you're using NPM, then run:

```bash
npm install @unveiler.io/react-native-client
```

If you're using Yarn, run:

```bash
yarn add @unveiler.io/react-native-client
```

## Create an `UnveilerClient`

Next, create an `UnveilerClient` instance. For this you need your own API key, which you can get at the [Unveiler Dashboard][unveiler-dashboard].

```typescript
import { UnveilerClient } from '@unveiler.io/react-native-client'

const client = new UnveilerClient({ apiKey: 'YOUR_API_KEY' })
```

:::note

To circumvent hard-coding the API key, we recommend storing them outside your code-base, for example using [react-native-config][npm-react-native-config] or other similar tools.

:::

## Verify Location Hook

The last step is to start using the `useLazyVerifiedLocation` hook.
In the background this hook will collect GNSS data.
Once enough data has been collected, the `submit` function will be populated, which when invoked will send recent GNSS data to the Unveiler API to verify the current location.
After the location is verified, the results will be available in `claim` and also encoded as a JWT in `jwt`.

```tsx
import { useLazyVerifiedLocation } from '@unveiler.io/react-native-client'

const MyModule = () => {
  const { claim, jwt, submit } = useLazyVerifiedLocation({ client })

  return (
    <>
      {submit && <Button onPress={submit} title={'Submit'} />}
      {claim && (
        <Text>
          {claim.location.latitude}, {claim.location.longitude}
        </Text>
      )}
      {jwt && <Text>JWT: {jwt}</Text>}
    </>
  )
}
```

For a more elaborate useage example, see our example React Native client [here](https://github.com/ClaimR/react-native-client/blob/master/example/src/App.tsx) and explore the [API](/docs/react-native/api).

[unveiler-dashboard]: https://dashboard.unveiler.io
[npm-react-native-config]: https://www.npmjs.com/package/react-native-config
