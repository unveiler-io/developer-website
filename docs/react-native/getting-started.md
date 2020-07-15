---
id: getting-started
title: Getting Started
---

## Installation
First start by adding the React Native client as a dependency to your React Native project. 
If you're using NPM, then run:
```bash
npm install @claimr/react-native-client
```

If you're using Yarn, run:
```bash
yarn add @claimr/react-native-client
```

## Linking Android

Add the `GnssLoggerPackage` to the packages of your React application.

```java
// Add the import
import tools.claimr.reactnativeclient.GnssLoggerPackage;

public class MainApplication extends Application implements ReactApplication {

// ...
        protected List<ReactPackage> getPackages() {
          List<ReactPackage> packages = new PackageList(this).getPackages();

          // ...

          // Link the GnssLoggerPackage
          packages.add(new GnssLoggerPackage());

          return packages;
        }
// ...
}
```

## Create a `ClaimrClient`

Next, create a `ClaimrClient` instance. For this you need your own API key, which you can get at the [ClaimR Dashboard][claimr-dashboard].

```typescript
import { ClaimrClient } from '@claimr/react-native-client'

const client = new ClaimrClient({ apiKey: 'YOUR_API_KEY' })
```
> Note: To circumvent hard-coding the API key, we recommend storing them outside your code-base, for example using [react-native-config][npm-react-native-config] or other similar tools.

## Verify Location Hook

The last step is to start using the `useLazyVerifiedLocation` hook.
In the background this hook will collect GNSS data.
Once enough data has been collected, the `submit` function will be populated, which when invoked will send recent GNSS data to the ClaimR API to verify the current location.
After the location is verified, the results will be available in `claim` and also encoded as a JWT in `jwt`.

```typescript
import { useLazyVerifiedLocation } from '@claimr/react-native-client'

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
      { jwt && <Text>JWT: {jwt}</Text>}
    </>
  )
}
```

For a more elaborate useage example, see our example React Native client [here](https://github.com/ClaimR/react-native-client/blob/master/example/src/App.tsx).

[claimr-dashboard]: https://dashboard.claimr.tools
[npm-react-native-config]: https://www.npmjs.com/package/react-native-config
