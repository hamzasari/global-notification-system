# Global Notification System with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In general, I use tools like `Confluence` for documentation and `Jira` for issue tracking. But, for this project I will try to combine all information in this `readme` file. When I have time to improve this project, I will change the platforms for documentation and issue tracking.

## Requirements

- Global notification System
- This system should provide an API to trigger notifications and should take care of displaying them
- The project should be implemented as a react app
- No third party packages for notification system should be used
- Other third party packages like linters, css frameworks or icon packs can be used
- Notifications should be stylized
- One (or more) buttons should exist to trigger a notification
- Stackability - Notifications fired at the same time should not interfere with each other
- If there is additional time, expand the system to add additional features to notifications, like autohide, callbacks, ..., and implement Modals system maybe

## Development Tools

I use always the same development stack when I start a react project.

- `Node.js`
- `Yarn`
- `React` and it's necessary libraries to build a react app (like react-dom, react-scripts, webpack, ...)
- `Testing library` packages
- `Jest` to run tests
- `Eslint` and `prettier` to write better, cleaner and standard code
- Eslint `jsdoc plugin` to write better and more understandable jsdoc to other developers can understand what's happening
- `Prop-types` to check props
- `Husky` to prevent commit if there is an eslint or prop type error
- `Storybook` to develop components in an isolated way
- `Fontawesome` library to use cool icons
- Helper libraries like `uuid` to create guid and use

I used `latest` and `LTS (long term support)` versions of the tools and packages for this project.

## Architecture

I use atomic design rules to create components in general, but for the sake of this demo project and because it is too small I won't follow these rules right now.

But, when I have time for refactoring and to add new features to this project, I will definitely refactor project structure to follow atomic design rules.

I used `React Hooks` and `Context API` in order to show notifications globally.
I could use `Redux` or any other global state management tool for this particular need, but `Context API` would be a better candidate for this small project.

With this way, I could separate behavior logic and rendering components. So, code is more clear to read and understand and lines in the component files are reduced.

I also used `CSS Modules` for styling and make styles scoped locally. So, styles won't be used globally and this reduces complexity on styling.

I used `Storybook` to develop components separately and in an isolated way, so I can test them one by one visually without starting the whole app.

I created several configuration files for my development environment to follow best development practices, like `.babel.rc`, `.eslintignore`, `.eslintrc.js`, `.prettierrc.js`, ... files and `.husky` and `.storybook` folders.

Because this is such a small project for only demo purposes, I used only master branch, I didn't use separate branches and pull request to merge in to development or master branch. But in general, I always use separate branches for new features, bug fixes or hot fixes, and I always use Pull Requests to do code reviews and merge code.

## File Structure

In the src (source) folder, the structure is like below

```
/ src
-- / common
---- / constants
---- / hooks
---- / models
---- / providers
-- / components
---- / Notification
---- / NotificationProgressBar
---- / Notifications
-- / pages
---- / home
-- App.js
-- ...
package.json
...
```

## Context API

I used `Context API` in order to store notification objects in an array globally, and to access this array and it's modifier functions from inside of any component.

Under the `src/providers` folder, I created `NotificationProvider` component to store the array and it's modifier functions.

## Custom hooks

I used `React Hooks` to separate logic and render from each other, also I used it to access global notification context and to reduce lines of code that needs to rewritten in all component files that is using global context.

To access and use modifier functions for global context, I created `src/common/hooks/useNotification` hook.

I also created other hooks in the hooks directory to separate code logic for more clean code.

## Models

I created `src/common/models` folder to store all models that I will use.

By doing this, project will always use understandable and standard objects for itself.

Whether data is coming from an API, web service or created inside a component with the given user inputs, it won't be a matter. Because, they will all use the same shared object models in the end.

## Constants

I always pay attention to not to define a variable with the same value twice or more. So, I created `src/common/constants` folder to store constant variables.

I also always follow `DRY (do not repeat yourself)` and `Clean Code` principles.

## Components

There are 3 components in the `src/components` folder.

These are `Notification`, `NotificationProgressBar`, `Notifications`.

Components have `styles.module.css` file for styling and also they have a `index.test.js` file for testing the component.

### Notification

The Notification component is to render just only one notification. It takes parameters as props and renders necessary html by returning JSX element.

### NotificationProgressBar

This component will be rendered in Notification component if the Notification component has a prop named `autoHide` and if it's value is `true`.

This component renders a bar at the bottom of Notification component. It starts with full width and it reduces the size over the time according the timeout value to show progress. After the width reaches 0, notification will be closed automatically.

### Notifications

Component to render Notification components as a list with notification list objects in the context.

## Pages

Right now, there is only one page in this project.

It is the `home page` to provide buttons and other inputs to show and test notifications.

## Routing

I didn't use routing for this project, because right now it is too small and it has only one page.

But, I will definitely add routing if needed.

## Further Topics

- Refactoring project structure
- Refactoring the codes
- Checking for performance and unnecessary rerender issues (I already did that with React DevTools, but there won't be any harm if we do it again :) )
- Extracting notification system to it's own npm package

## Installation

You need `node.js` and `yarn` are installed on your machine as prerequisites.

After cloning this project from the github repository, you should `yarn` or `yarn install` command in the root folder of the project to install necessary dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `yarn lint`

Lints the code, shows warnings and errors that need to be fixed.

### `yarn lint:fix`

Lints the code, shows warnings and errors that need to be fixed and tries to fix errors that can be automatically fixed.

### `yarn storybook`

Starts the storybook application in the default browser.

In this application, we can see our working components with example props and we can change the props to see differences.

This tool can be used for visual testing.

Documentation also exists for components on storybook application to show how to use a component properly.

### `yarn build-storybook`

Builds the storybook application and exports the html project, then we can put this folder in a public server to show our components to other developers. By this way, other developers can see our components as well as how they can use our components properly.

### `yarn prepare`

This script tries to install husky when we run the `yarn` or `yarn install` command.

We are using husky to prevent commits if there are errors in our code.
