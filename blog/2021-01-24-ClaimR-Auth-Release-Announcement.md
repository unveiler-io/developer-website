---
title: ClaimR Auth Release Announcement
author: Adriaan Knapen
author_title: Founder of ClaimR
author_url: https://github.com/Addono
author_image_url: /img/team/adriaan.jpg
tags: [ClaimR, ClaimR Auth, Google Play, App, Release]
description: We are proud to announce that after a month of hard work, we have released ClaimR's first fully-fledged app, putting ClaimR's verified location technology directly in the hands of end users.
image: img/blog/claimr-auth_featured.jpg
hide_table_of_contents: false
---

Recently we have released our first publicly available app, named [ClaimR Auth][claimr-auth-google-play].
With ClaimR Auth, we offer a drop-in replacement to widely used multi-factor authenticator apps, such as [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) and [Microsoft Authenticator](https://play.google.com/store/apps/details?id=com.azure.authenticator).

Our app makes use of the ClaimR API to add an additional layer of security: You can limit the area in which the multi-factor authentication can be performed.
This additional security measure gives you a unique method of protecting your accounts today.

<!--truncate-->

## One-Time Passwords

ClaimR Auth implements the One-Time Password (OTP) standard ([RFC 6238](https://tools.ietf.org/html/rfc6238)), which is the industry standard for multi-factor authentication.
With most large services already supporting OTP you can use it already to natively integrate with the multi-factor authentication process of your accounts at Google, Facebook, Twitter, Instagram, Steam, Microsoft Teams and countless more.

Traditionally, OTP authorization apps protect you by giving you a second-factor authentication method based on "something you have", namely a secret stored on your phone.
This secret then in turn is used to create your OTP codes you use to proof to the service where you're logging in that you are indeed the owner of the account.

OTP has shown to be an effective means to protect your account in various cases, for example when your password is guessed, leaked or stolen, then an attack also needs to get access to your phone before your account is breached.
However, this approach to multi-factor authentication lacks any awareness of context, as it would happily let you login to your Amazon account from the other side of the globe.

## A More Secure Tomorrow

We believe that including more context in multi-factor authentication solutions is the way forward to a more secure future.
If access to a certain service is really critical, and you know that it only needs to be accessed from a specific location, then it is a sensible choice to use your location data as an additional layer of protection.
With ClaimR Auth this becomes something you can do today.
Download ClaimR Auth in the [Google Play Store][claimr-auth-google-play] and level up the protection of your most precious accounts.

## Custom Solutions

ClaimR Auth is build directly on top of the same ClaimR API as is publicly available.
As such, if the service you would like to secure is not using OTP, then it is possible to build a custom solution specific for your use-case.
Please consult our [documentation](/docs) on how to get started, or you can [drop us a line](mailto:contact@claimr.tools) to discuss about what's possible.

[claimr-auth-google-play]: https://play.google.com/store/apps/details?id=tools.claimr.auth
