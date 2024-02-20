import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Form Component', () => {
    test('handles valid input', () => {
        render(<Form onFormSubmit={() => { }} />);

        // Simulate valid input
        fireEvent.change(screen.getByLabelText('Age:'), { target: { value: '25' } });
        fireEvent.change(screen.getByLabelText('Gender:'), { target: { value: 'Male' } });
        fireEvent.change(screen.getByLabelText('Interests:'), { target: { value: 'Books' } });
        fireEvent.submit(screen.getByRole('button'));


        expect(screen.getByLabelText('Age:').value).toBe(''); // Expect the Age input to be cleared
        expect(screen.getByLabelText('Gender:').value).toBe(''); // Expect the Gender input to be cleared
        expect(screen.getByLabelText('Interests:').value).toBe(''); // Expect the Interests input to be cleared

        // Mock function to check if it has been called with the expected parameters
        expect(onFormSubmit).toHaveBeenCalledWith({
            age: '25',
            gender: 'Male',
            interests: 'Books',
        });
    });

    test('handles invalid input and displays error messages', () => {
        render(<Form onFormSubmit={() => { }} />);

        // Simulate invalid input
        fireEvent.change(screen.getByLabelText('Age:'), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText('Gender:'), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText('Interests:'), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button'));


        expect(screen.getByText('Please enter a valid age.')).toBeInTheDocument(); // Example error message assertion
        expect(screen.getByText('Please enter a valid gender.')).toBeInTheDocument(); // Example error message assertion
        expect(screen.getByText('Please enter valid interests.')).toBeInTheDocument(); // Example error message assertion

        // Ensure that the form has not been submitted
        expect(onFormSubmit).not.toHaveBeenCalled();

    });


});