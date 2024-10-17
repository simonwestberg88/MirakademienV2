import axios from 'axios';
import { newsletterId } from '../../lib/constants';

// Create an Axios instance with pre-configured base URL and headers
const axiosClient = axios.create({
    baseURL: 'https://clientapi.benchmarkemail.com', // Base URL for Benchmark Email API
    headers: {
        'AuthToken': process.env.BENCHMARKEMAIL_ACCESS_TOKEN, // Using environment variable for the AuthToken
        'Content-Type': 'application/json',
    },
});

// Optional: Interceptor for request (can be used for logging, token refresh, etc.)
axiosClient.interceptors.request.use((config) => {
    return config;
});

// Save Email Method
export const saveEmail = async (email: string) => {
    try {
        const data = JSON.stringify({
            "EmailIDs": email,
        });
        console.log("saving email: ", email);

        const response = await axiosClient.post(`/Contact/${newsletterId}/ContactDetails/CSV`, data);

        return response.data;
    } catch (error) {
        // Safely check if the error is an Axios error and extract the message
        if (axios.isAxiosError(error)) {
            console.error("Error saving emails:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Unknown error occurred');
        } else {
            // Handle non-Axios errors
            console.error("Error saving emails:", error);
            throw new Error('An unexpected error occurred');
        }
    }
};

export default axiosClient;
