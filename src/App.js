import React from 'react';
import Counter from './01-use-state/Counter';
import DadJoke from './02-use-effect/DadJoke';
import Button from './03-use-context/Button';
import { ThemeProvider } from './03-use-context/ThemeContext';
import Message from './04-use-reducer/Message';
import ColorPicker from './05-use-ref/ColorPicker';
import WindowDimensions from './06-custom-hooks/06-01-useWindowDimensions/WindowDimensions';
import ChuckNorris from './06-custom-hooks/06-02-useFetch/ChuckNorris';
import Form from './06-custom-hooks/06-03-useForm/Form';

function App() {
  return (
    <ThemeProvider>
      <h1>Fun with React Hooks</h1>
      <Counter startingValue={100} />
      <DadJoke />
      <Button>Click me!</Button>
      <Message>I'm a message!</Message>
      <ColorPicker />
      <WindowDimensions />
      <ChuckNorris />
      <Form />
    </ThemeProvider>
  );
}

export default App;
