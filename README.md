# Photo Gallery

This gallery contains a React implementation of the [Surface Duo Photo Gallery sample](https://github.com/foldable-devices/demos/tree/master/photo-gallery). The `main` branch contains an implementation that uses CSS to hide and show the various components, depending on the foldable state of the application, in the same way that the reference sample works. There is a secondary branch, `react-foldable` ([PR](https://github.com/aaronpowell/surface-duo-photo-gallery/pull/1)), that uses the npm package [`@aaronpowell/react-foldable`](https://www.npmjs.com/package/@aaronpowell/react-foldable) to use React components that adapt to the foldable state to add/remove themselves from the component hierarchy.

View the sample [here](https://kind-beach-0f1a1a11e.azurestaticapps.net/).

Read about how the sample works on the Surface Duo blog.

## Contributing

Once the repo has been cloned install the npm package:

```bash
npm install
```

The codebase uses [create-react-app](https://create-react-app.dev) as the template and can be launched using npm:

```bash
npm start
```

If you make any changes, send them through as a Pull Request for review.
