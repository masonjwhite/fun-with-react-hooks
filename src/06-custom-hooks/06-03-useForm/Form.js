import React from 'react';
import useForm from './useForm';

const Form = () => {
  const { inputs, handleChange, handleSubmit } = useForm(
    { firstName: '', lastName: '', email: '' }, 
    inputs => console.log(inputs)
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name: </label>
        <input 
          type='text' 
          name='firstName' 
          value={inputs.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='lastName'>Last Name: </label>
        <input 
          type='text' 
          name='lastName' 
          value={inputs.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input 
          type='email' 
          name='email' 
          value={inputs.email}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;
