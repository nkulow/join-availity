import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App.js';

jest.mock('./components/RegisterForm.scss', () => '');

describe('App', () => { 

    const registerFormComponent = () => {
        render(
            <App />
        );
    };
    
    it('should render basic fields', () => {
        registerFormComponent();
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });
 })