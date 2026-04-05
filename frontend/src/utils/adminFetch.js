/*
    This function fetch admin data from the backend
*/

import { API_URL } from './api_url'

export const adminFetch = async (url, options = {}) => {
    const response = await fetch(`${API_URL}/${url}`, {
        headers: {
                "Content-Type": "application/json",
        },
        credentials: 'include',
        ...options
    })

    if (response.status === 401) {
        throw new Error('Unauthorized!')
    }

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }

    return response.json()
}
