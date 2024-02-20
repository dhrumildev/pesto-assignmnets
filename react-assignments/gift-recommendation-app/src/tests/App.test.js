import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

describe('App Component', () => {
    test('handles OpenAI API response and displays recommendations', async () => {
        // Mock API response
        const mockResponse = {
            data: {
                recommendations: [
                    { name: 'Gift 1' },
                    { name: 'Gift 2' },
                ],
            },
        };
        axios.post.mockResolvedValueOnce(mockResponse);

        // Render the app
        const { getByText } = render(<App />);

        // Wait for recommendations to be displayed
        await waitFor(() => {
            expect(getByText('Gift 1')).toBeInTheDocument();
            expect(getByText('Gift 2')).toBeInTheDocument();
        });
    });

    test('handles errors or edge cases related to OpenAI API', async () => {
        // Mock API response with an error
        axios.post.mockRejectedValueOnce(new Error('API error'));

        // Render the app
        const { getByText } = render(<App />);

        // Wait for error message to be displayed
        await waitFor(() => {
            expect(getByText('Error fetching recommendations: API error')).toBeInTheDocument();
        });
    });
});