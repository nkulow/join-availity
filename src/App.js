import React from 'react';
import RegisterForm from './components/RegisterForm';
import { useForm } from 'react-hook-form';
import { createAccount } from './services/register-service';

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (formData) => {
    createAccount(formData);
    reset(); // clear form data after submitting
  }
  return (
    <RegisterForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} />
  );
}

export default App;
