# RestoList

This project provides possibility to browse data provided at [Wolt official GitHub page](https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json) which contains multiple restaurants with additional information. 🍕

## Description

This application allows user to browse dining places.\
It is possible to sort the list of the restaurants by name in ascending and descending alphabetical order as well as to search for a restaurant by its name.

This project was create on a base of JavaScript library React.\
There are also other libraries have been used in this project to provide better user experience, such as [MaterialUI](https://material-ui.com/), [lodash](https://lodash.com/) and [blurhash](https://blurha.sh/).

## Project structure

Most of the source code is located under the [src](./src) directory.\

- [src/comm](./src/comm) contains code for fetching of the data from the remote server.
- [src/components](./src/components) contains React components that are intended for displaying data of the single data item on the screen.
- [src/containers](./src/containers) contains React components that render multiple of other components instead of displaying data items directly.
- [src/types](./src/types) contains Typescript types definitions that describe application data.
- [src/utils](./src/utils) contains helper functions for operations on different data types such as strings and arrays.

## Implementation details

### Search

Search functionality is implemented with respect to a possible growth of data that is needed to be handled.\
Search string input field is using debounce technique that provides low input delay when manipulating large number of data entries and escapes unnecessary of users computation resources. ([example](./src/containers/Restaurants.tsx))

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
