---
title: Building a React Native app with verified location from scratch
author: Adriaan Knapen
author_title: Founder of ClaimR
author_url: https://github.com/Addono
author_image_url: /img/team/adriaan.jpg
tags: [React Native, ClaimR, Android, Development, Guide, Getting Started]
description: In this post we walk you through how to create a React Native app with verified location from ClaimR from scratch.
#image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

In this post I will show you how to create a React Native app with ClaimR's verified location technology from scratch.
You don't need prior experience with React or React Native in order to be able to follow this guide.

You can find the source code of the end result [on Github](https://github.com/ClaimR/blog-builing-a-rn-app).

## Setup Development Environment

If you already have developed React Native apps before on Android on your development workstation, then you should be able to skip this step.
Here we will not be covering the development environment setup process in detail, as the React Native documentation has an excellent [guide](https://reactnative.dev/docs/environment-setup) on how to configure your development environment for React Native.
Make sure to follow the instructions for "React Native CLI Quickstart" (rather than the default "Expo CLI Quickstart") with as target OS "Android".

## Initialize Project

Let's bootstrap a React Native app, run the following command:

```bash
npx react-native init MyClaimrApp
```

This will give you a bare React Native app, try to launch it on your Android device:

```bash
yarn run android
```

## Integrating with ClaimR

Next up we will be integrating with ClaimR by using the [ClaimR React Native client](https://www.npmjs.com/package/@claimr/react-native-client).
This client makes it a lot easier to get started with ClaimR, as it takes care of all the GNSS specifics for you.
It's completely open-source, so feel free to dig into it [here](https://github.com/ClaimR/react-native-client) if you're interested to get to know the inner workings.

### Install `@claimr/react-native-client` as a Dependency

Let's start by adding ClaimR's React Native client by running the following command:

```bash
yarn add @claimr/react-native-client
```

### Adding the ClaimR Client

Open `App.js` and replace its content with the following code snippet:

```jsx
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { ClaimrClient, useLazyVerifiedLocation } from '@claimr/react-native-client'

const client = new ClaimrClient({ apiKey: 'YOUR_API_KEY' })

const App = () => {
  const { claim, state, submit } = useLazyVerifiedLocation({ client })

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My ClaimR App</Text>
      <Text>State: {state.toLocaleUpperCase()}</Text>
      {submit && <Button onPress={submit} title={'Submit'} />}
      {claim && (
        <Text>
          {claim.location.latitude}, {claim.location.longitude}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default App
```

### Create ClaimR API Key

The last step is to add a ClaimR API key.
Go to [dashboard.claimr.tools](https://dashboard.claimr.tools/) and create a new API key.
Copy this new key and replace `YOUR_API_KEY` in `App.js` with the API key you just obtained.

## Take It For a Spin

Re-start your app by running the following command again while your phone is connected:

```bash
yarn run android
```

Wait until the "Submit" button appears, then you can press it to send your first verified-location request 🎉.

:::note

If you're experiencing issues, then try completely removing the app. The hot-reloading of React Native sometimes breaks the connection to the native Android code collecting the data for the ClaimR client.

:::

The end-result should look something like this:

<img src="\img\blog\2020-09-19\screenshot-end-result.jpg" alt="Screenshot of finalized app" width="40%"/>

## Next Steps

Normally you will want to have the certainty from verified location on your backend services.
For this you can use the JWT returned by `useLazyVerifiedLocation` and send it to your own backend.
There you can validate the JWT, such that you can be certain about the user's location.
The documentation covers [how to work with JWTs](/docs/api/jwts) on your backend.
