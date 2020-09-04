---
id: requirements
title: Requirements
---

The React Native Client for ClaimR poses some requirements on the device it is running on.
These requirements originate from software or hardware limitations of these devices, as access to raw GNSS measurements has only been introduced in recent years.
Hence, not all devices currently in use are supported.
This will mostly affect older devices, as newer devices tend to support raw GNSS measurements.

The following requirements needs to be satisfied for a device to support the ClaimR React Native client:

- Android 7 (support required for all devices running Android 10 or newer)
- [`ACCESS_FINE_LOCATION`](https://developer.android.com/reference/android/Manifest.permission#ACCESS_FINE_LOCATION) permission
- Raw GNSS meaurements support
  - Partial list of hardware support available at [useGalileo.eu](https://www.usegalileo.eu/EN/inner.html#data=smartphone). Not all phone models are listed, check the list of chipsets to see if your hardware supports it.

The simplest method to test if your device supports collecting raw GNSS measurements is to install the [GNSSLogger](https://github.com/google/gps-measurement-tools/releases/tag/2.0.0.1) app.
