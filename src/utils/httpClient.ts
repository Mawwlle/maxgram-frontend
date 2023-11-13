import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import api from '../api';

const MILLISECONDS_PER_SECOND = 1000;

const isTokenExpired = (token: string): boolean => {
    const expToken = JSON.parse(atob(token.split('.')[1])).exp;
    return new Date().getTime() >= expToken * MILLISECONDS_PER_SECOND;
};

const handleRefreshToken = (refreshToken: string, originalRequest: InternalAxiosRequestConfig) => {
    api.token.refreshToken(refreshToken)
        .then((resp) => {
            localStorage.setItem('access_token', resp.data.access);

            setTimeout(() => location.reload, 300);
            return httpClient.request(originalRequest);
        })
        .catch((refreshError) => {
            console.error('Error refreshing token:', refreshError);
            logoutAndClearTokens();
        });
};

const logoutAndClearTokens = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};

const httpClient = axios.create({
    baseURL: 'http://localhost:8000/', // Configure this properly
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
    maxRedirects: 10
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && !isTokenExpired(token)) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

const errorInterceptor = (error: AxiosError) => {
    if (!error.response) {
        return Promise.reject(error);
    }

    switch (error.response.status) {
        case 401: {
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                if (refreshToken && !isTokenExpired(refreshToken) && error.config) {
                    const originalRequest = error.config;
                    handleRefreshToken(refreshToken, originalRequest);
                } else {
                    console.warn('Refresh token is not valid');
                    logoutAndClearTokens();
                }
            } catch (error) {
                console.error('Error handling token refresh:', error);
            }
            break;
        }
        default:
            break;
    }

    return Promise.reject(error);
};

const responseInterceptor = (response: AxiosResponse) => response;

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;