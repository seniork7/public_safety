import { API_URL } from './api_url'

export const adminFetch = async (url, options = {}) => {
    const response = await fetch(`${API_URL}/${url}`, {
        ...options,
        credentials: 'include',
    })

    if (response.status === 401) {
        throw new Error('Unauthorized!')
    }

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }

    return response.json()
}
