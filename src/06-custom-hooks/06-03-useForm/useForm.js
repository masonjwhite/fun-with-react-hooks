import { useState } from 'react';

const useForm = (initial = {}, submitFn) => {
  // Object to keep track of our input values
  const [ inputs, updateInputs ] = useState(initial);

  const handleChange = (e) => {
    updateInputs({
      ...inputs, // Any existing values
      [e.target.name]: e.target.value // Any new value
    })
  };

  // We take in a submit function so that we can fold in the input values
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFn(inputs);
    reset();
  };

  const reset = () => {
    updateInputs(initial);
  };

  return { inputs, handleChange, handleSubmit, reset };
};

export default useForm;