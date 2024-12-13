// utils/apiService.js

export const apiRequest = async (url, method = 'GET', body = null, token = null) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    // Add Authorization header if token is provided
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        // Parse the response
        const data = await response.json();

        // Handle non-OK responses
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data; // Return the parsed data
    } catch (error) {
        console.error(`API Error: ${error.message}`);
        throw error; // Re-throw to handle it in the calling code
    }
};

export const get = async (url, token = null) => {
    return apiRequest(url, 'GET', null, token);
};

export const post = async (url, body, token = null) => {
    return apiRequest(url, 'POST', body, token);
};

export const put = async (url, body, token = null) => {
    return apiRequest(url, 'PUT', body, token);
};

export const patch = async (url, body, token = null) => {
    return apiRequest(url, 'PATCH', body, token);
};

export const del = async (url, token = null) => {
    return apiRequest(url, 'DELETE', null, token);
};