// src/api/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const api = {
  get: <T>(url: string): Promise<T> => {
    console.log(`Making GET request to: ${API_BASE_URL}${url}`);
    return fetch(`${API_BASE_URL}${url}`).then(handleResponse);
  },

  post: <T>(url: string, data?: any): Promise<T> => {
    console.log(`Making POST request to: ${API_BASE_URL}${url}`, data);
    return fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    }).then(handleResponse);
  },

  put: <T>(url: string, data?: any): Promise<T> => {
    console.log(`Making PUT request to: ${API_BASE_URL}${url}`, data);
    return fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    }).then(handleResponse);
  },

  delete: <T>(url: string): Promise<T> => {
    console.log(`Making DELETE request to: ${API_BASE_URL}${url}`);
    return fetch(`${API_BASE_URL}${url}`, {
      method: 'DELETE',
    }).then(handleResponse);
  },
};