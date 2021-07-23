---
id: schema
title: GraphQL Schema
---

The Unveiler API has interactive schema documentation of it's GraphQL endpoint at the Playground, which can be accessed by opening https://api.unveiler.io in your browser. At the right, you can explore the queries available by the API under "DOCS" and see the schema under "SCHEMA".

When writing queries in the playground you will have access to syntax highlighting. Which makes it faster and easier to formulate your queries.

## Authorization

Authorization to the Unveiler API is required when making queries. API keys are used for authentication purposes, you can generate one through the [Unveiler Dashboard](https://dashboard.unveiler.io).

The API key should be added as an HTTP header. The header name should be `Authorization` and the value should be `Bearer YOUR_API_KEY`.

## Writing queries

### `verifyLocation`

All queries to the Unveiler API use the `verifyLocation` query. It's arguments consist of the location where the user claims to be and context of the user's location, which acts as the proof.

#### Claims

The claim can be of two types, either it concerns a point, in which it has as it's arguments `location` which represents a coordinate and `radius` which is the distance in meters the user's location is allowed to differ from their claimed location.

The other type of claim is an area claim, which is a polygon of coordinates. In this case the location of the user needs to be located inside the polygon for the claim to be granted.

#### Context

The context of the requests of one field `gnssLog`. The `gnssLog` field are raw GNSS measurements in the [GNSSLogger](https://github.com/google/gps-measurement-tools/tree/master/GNSSLogger) format. These logs are a single multiline string, with each measurements on its own line. This log should include the headers.

#### Response

The response of the `verifyLocation` query contains the following fields:

| Field name      | Value                                          | Description                                                                                                  |
| --------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `status`        | `enum`, either `GRANTED`, `REVOKED` or `ERROR` | The result of the query                                                                                      |
| `message`       | String or `null`                               | An optional message used to clarify why a query failed.                                                      |
| `tokenResponse` | `TokenResponse`                                | Contains the granted token when the location was successfully verified, `null` when the verification failed. |

A `TokenResponse` contains of a `Token`, which has the original claim submitted in the initial query, an "issued at" timestamp (`iat`) and can have a subject (`sub`) field if it was part of the original query. In addition, all information is returned as a string, with the token encoded and signed as a [JWT](https://jwt.io 'JSON Web Token').
