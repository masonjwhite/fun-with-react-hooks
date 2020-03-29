This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

This repository is a part of my "fun with" series. Each and every day I challenge myself to learn something new. Once I feel like I understand a subject well enough to move onto the next one, I build a small proof of concept or example so that I can reference it in the future.

## Structure

This project was bootstrapped with create-react-app. It contains several examples of React hooks along with a component that utilizes the hook. Currently all of the component examples are being used in the top-level App component.

## Starting the project

Clone the repository
Navigate to the cloned project and run `npm install`
To start the project, run `npm start` to run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Included Examples

- 01-use-state: A basic `useState` hook example.
- 02-use-effect: `useEffect` hook example to fetch some data from an API on mount.
- 03-use-context: `useContext` hook exampe to fetch theme values by consuming a theme context.
- 04-use-reducer: `useReduer` hook example to dynamically change state based on the action passed to it.
- 05-use-ref: `useRef` hook example to `console.log` the value of a `select` DOM node on change.
- 06-custom-hooks:
  - 06-01-useWindowDimensions: A custom hook that updates values when the browser window is resized
  - 06-02-useFetch: A custom hook that abstracts the `fetch` API from components
  - 06-03-useForm: A custom hook that abstracts repetitive form logic from components

## TODO

- No further development is planned at this time. However, as I find use cases for other hooks (e.g. `useCalback`, `useMemo`) I will update this repository approriately.
