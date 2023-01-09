import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from './RegisterForm.jsx';

jest.mock('./RegisterForm.scss', () => '');

describe('RegisterForm', () => { 

    const register = jest.fn();
    const handleSubmit = jest.fn();
    const onSubmit = jest.fn();

    const registerFormComponent = () => {
        render(
            <RegisterForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={false} />
        );
    };
    
    it('should render basic fields', () => {
        registerFormComponent();
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });

    it('should register register all fields', () => {
        jest.clearAllMocks();
        registerFormComponent();
        expect(register).toHaveBeenCalledTimes(6);
    });

    it('should submit form when submitting', () => {
        jest.clearAllMocks();
        registerFormComponent();
        fireEvent.click(screen.getByRole('submit'));
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
 })