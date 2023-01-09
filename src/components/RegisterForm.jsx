import React from 'react';
import { Form, FormLabel, FormControl, Button } from 'react-bootstrap';
import './RegisterForm.scss';

const RegisterForm = (props) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors
    } = props

    return(
        <div className='form'>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='form__fields'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl 
                        {...register('firstName', { required: true })}
                        className={errors.firstName ? 'error' : ''}
                        type='input'
                        name='firstName'
                        placeholder='Enter Here'
                    />
                    <br />
                    <FormLabel>Last Name</FormLabel>
                    <FormControl 
                        {...register('lastName', { required: true })}
                        className={errors.lastName ? 'error' : ''}
                        type='input'
                        name='lastName'
                        placeholder='Enter Here'
                    />
                    <br />
                    <FormLabel>NPI Number</FormLabel>
                    <FormControl 
                        {...register('npi', { required: true })}
                        className={errors.npi ? 'error' : ''}
                        type='number'
                        name='npi'
                        placeholder='Enter Here'
                    />
                    <br />
                    <FormLabel>Business Address</FormLabel>
                    <FormControl 
                        {...register('businessAddress', { required: true })}
                        className={errors.businessAddress ? 'error' : ''}
                        type='input'
                        name='businessAddress'
                        placeholder='Enter Here'
                    />
                    <br />
                    <FormLabel>Telephone Number</FormLabel>
                    <FormControl
                        {...register('phoneNumber', { required: true })}
                        className={errors.phoneNumber ? 'error' : ''}
                        type='tel'
                        name='phoneNumber'
                        placeholder='(555) 555-5555'
                    />
                    <br />
                    <FormLabel>Email Address</FormLabel>
                    <FormControl 
                        {...register('email', { required: true })}
                        className={errors.email ? 'error' : ''}
                        type='email'
                        name='email'
                        placeholder='name@example.com'
                    />
                </div>
                <div className='form__submit-btn'>
                    <Button role='submit' type='submit'>Register</Button>
                </div>
            </Form>
        </div>
    );
};

export default RegisterForm;