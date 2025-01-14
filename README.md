# Expo Linking API Silent Failure on Android

This repository demonstrates a bug in the Expo `Linking` API on Android where deep link handling fails silently after the first successful deep link opening.  Subsequent calls to `Linking.openURL` do not trigger the `Linking.addEventListener` callback, and there are no error messages in the console.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Click the "Open Deep Link 1" button.  This should successfully open a deep link (e.g., in a browser).
4. Click the "Open Deep Link 2" button. This button will not open a deep link; the event listener won't fire.

## Solution

The solution involves adding a small delay after processing the first deep link before re-attaching the event listener.  This ensures that the Android system has sufficient time to process the first deep link before attempting to handle the next one.