---
id: api
title: API
---

## `ClaimrClient`
The `ClaimrClient` object maintains the connection with the API.

### `constructor(options)`: <`ClaimrClient`>

#### Parameters

* `options`: <`Object`>
  * `apiKey`: `string` (required)

  The API key to use when sending requests to the ClaimR API.
  You can get one at the [ClaimR Dashboard](https://dashboard.claimr.tools).

#### Returns

`ClaimrClient`

## `useLazyVerifiedLocation`
The `useLazyVerifiedLocation` hook is used to verify a user's location.
As it's lazy, the user needs to manually invoke it to send the request to the ClaimR API.
This can be done by calling the `submit` function once its defined by the hook.

The hook tracks its state using the following state machine:
![State machine](/img/react-native-state-machine.png)

The machine is initially in the `registeringListener` state, when it successfully registers the listener it will switch to the `listening` state.
Once enough raw GNSS data has been collected, it will move to `ready`.
In every state which has an outgoing edge with `submit` you can request the location to get verified. 

> An iteractive version of the state machine can be explored [here](https://xstate.js.org/viz/?gist=2cccde93b8c36974fc5ebe6e4c147595).

#### Parameters
* `options`: <`Object`>
  * `client`: <`ClaimrClient`> (required)

#### Returns
| Property | Type | Description |
| ---- | --- | --- |
| `state` | `States` | The current state of this location verification hook. | 
| `submit` | `() => void` \| `undefined` | Callback to submit the location verification request to the ClaimR API. It will be `undefined` until sufficient raw GNSS data has been collected.| 
| `claim` | `PointClaim` \| `undefined` | Contains the validated location results from the ClaimR API. Only available after `submit` has been invoked and the location was in fact successfully validated. |
| `jwt` | `string` \| `undefined` | Similar to `claim`, however now stored as a cryptographically secured JSON Web Token (JWT). |
| `message` | `string` \| `undefined` | An optional message returned from the ClaimR API. Only used to retrieve the error message. |