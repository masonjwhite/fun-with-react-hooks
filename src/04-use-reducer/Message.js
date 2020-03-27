import React, { useReducer } from 'react';
import reducer from './reducer';

const Message = (props) => {
  const { children } = props;

  // Use reducer takes a reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { message: children || '' });

  // The buttons below dispatch actions to the reducer
  return (
    <>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: 'uppercase' })}>Uppercase</button>
      <button onClick={() => dispatch({ type: 'lowercase' })}>Lowercase</button>
      <button onClick={() => dispatch({ type: 'reverse' })}>Reverse</button>
    </>
  )
}

export default Message;