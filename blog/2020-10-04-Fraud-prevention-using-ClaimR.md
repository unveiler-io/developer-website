---
title: Fraud Prevention Using ClaimR
author: Adriaan Knapen
author_title: Founder of ClaimR
author_url: https://github.com/Addono
author_image_url: /img/team/adriaan.jpg
tags: [ClaimR, Use Cases]
description: In this post we will cover the impact of location fraud and how apps can integrate with ClaimR as to prevent location fraud.
#image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Having a device in our pocket which can pinpoint our location has become the norm in the last decade. Many apps capitalize on this feature, for example to tailor the experience to the user's location, offer them navigation instructions, or record where a certain photo is taken.

In some of these cases the user can gain by manipulating their location. This makes app developers unable to use their user's location for critical applications. While less vital applications resort to accepting that some of their users are able to cheat.

In this post we will cover the impact of location fraud and how apps can integrate with ClaimR as to prevent location fraud.

<!--truncate-->

## A Force Even Giants Cannot Withstand

Augmented reality game [Pokémon Go](https://www.pokemongo.com/) is one of those apps which suffers under a large portion of its player base is manipulating their location to get in-game benefits over regular players. The name might not be familiar for everyone, but rest ashured, with an annual revenue of \$894 million in 2019 alone [[1]][sensor-tower-pokemon-go-earnings] they have plenty of resources to fight the problem.

Pokémon Go rewards their players with in-game items for going to certain locations in real life. Manipulating your location is called "spoofing", it has become so common practice that there are open communities with at of writing 136 thousand users [[2][reddit-pokemon-go-spoofing]].

Spoofing is an issue which plagues both the Android and iOS side of Pokémon Go. These cheating users devaluate the effort put in by legitimate users, which in the end hurts the financial side by reducing the amount of in-game purchases conducted by its users.

The developers of Pokémon Go are activelly adding their own mechanisms in an attempt to catch these fraudulent users, which we will cover in a different post, but each and every one of them has been defeated by the spoofing community. In the end, all their defence mechanisms were limited by the fact that the user has full control over the phone, hence the user can manipulate all information received by the app.

## Fighting Fraud With ClaimR

At [ClaimR](https://claimr.tools) we created a novel method of verifying the user's location. We let the users phone record a short sample of measurements of their location positioning (GPS) sensors as proof for their current location. Users attempting to manipulate their location now still need these sensor measurements, which they can only obtain by having a device at the desired location, greatly reducing the feasibility of executing the attack.

Here we will briefly touch upon the methods how an app like Pokémon Go can adopt ClaimR to address cheaters. Globally there are two approaches on how to integrate with ClaimR.

### Send Directly vs. Store-and-Send

In the first approach, the user's location is verified as soon as possible. The positioning sensor measurements are sent as soon as they are available to ClaimR. In turn, ClaimR then verifies the location and your user will have certainty about their location within the minute.

On the other hand, when adopting store-and-send you collect and store the sensor measurements, but do not yet verify them. Then at a later point in time you can send some of these measurements to ClaimR to verify their location with hindsight. This can be useful when beforehand it is not clear when exactly one needs their location verified.

### Verify-at-Server vs. Verify-at-Client

Sending the location verification request to ClaimR can be done both from your server, as well as directly from the client device. In the former situation you let the device collecting the location position sensor measurements emit those to your server, where you then send them to the ClaimR API to verify them.

In the other approach the client device - e.g. an app on your user's device - sends their measurements directly to ClaimR. As a response, the user gets a [cryptographically signed certificate](/docs/api/jwts) from ClaimR, which it can use to prove to e.g. your backend that their location was successfully verified.

### Recommendations

You're free to pick any combination of Send Directly vs. Store-and-Send and Verify-at-Server vs. Verify-at-Client as your use-case demands, we will be there to support it. ClaimR is a generic and open platform, which does not limit its usage in any specific manner.

In general, for starters we recommend using the Send Directly approach combined with Verify-at-Client, as it is the most versatile and requires no adaptations of your backend. This method is also directly supported with our [React Native client](/docs/react-native/getting-started), which makes it extremely simple for developers to adopt ClaimR.

## References

[1] SensorTower - [Pokémon GO Has Best Year Ever in 2019, Catching Nearly \$900 Million in Player Spending][sensor-tower-pokemon-go-earnings]

[2] Reddit - [r/pokemongospoofing: Pokémon GO Spoofing – The #1 Hub for Spoofers!][reddit-pokemon-go-spoofing]

[reddit-pokemon-go-spoofing]: https://www.reddit.com/r/PokemonGoSpoofing/
[sensor-tower-pokemon-go-earnings]: https://sensortower.com/blog/pokemon-go-has-best-year-ever-in-2019-catching-nearly-900m-usd-in-player-spending
