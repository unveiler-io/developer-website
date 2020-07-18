---
id: overview
title: Overview
---

Locations reported by users or machines can be manipulated in various ways, including modifying the software running on a device (software spoofing) and tampering with GNSS signals (hardware spoofing).
ClaimR fights fraud, enables location based authorization and enhances your users' privacy.

ClaimR offers Verified Location-as-a-Service.
When verifying a user's location, some contextual information is uploaded to the cloud based ClaimR API.
The ClaimR API uses this contextual information as proof to verify the user's location.

Currently, this proof exists of raw GPS measurements.
Modern Android phones give access to the raw measurements they use to establish the user's position.
We add additional processing to these raw measurements as an additional security check that the location reported by the phone corresponds to their real location.

Future iterations of the ClaimR API will include other means of location verification, for example IP based or using nearby WiFi access points.
