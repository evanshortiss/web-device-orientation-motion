## Web Device Motion and Orientation APIs Example

This is a simple webapp that binds to the [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent) and [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent) browser events and displays data generated by the device.

## Usage

Requires Node.js and npm (tested using Node.js 8.x and npm 5.x).

```bash
$ git clone $THIS_REPO_URL devicemotion
$ cd devicemotion
$ npm i
$ npm start
```

By default the application will serve on port 8080. You can change this in the
`index.js` file.

You will most likely need to test this on an Android or iOS device. The
application will print your local network IP on startup to make this easier.

![](https://github.com/evanshortiss/web-device-orientation-motion/raw/master/screenshots/android-chrome.png)