import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';
import { CreateUserData, PartialUpdateUserData, UserItem, UsersAPIType } from './types';

const getUsersList = (page: number): Promise<AxiosResponse<PaginationResponse<UserItem>>> => {
    return httpClient.get<PaginationResponse<UserItem>>('/api/v1/users/', {
        params: {
            page
        }
    });
};

const createUser = (data: CreateUserData): Promise<AxiosResponse<UserItem>> => {
    return httpClient.post<UserItem>('/api/v1/users/', {
        ...data
    });
};

const getUser = (id: number): Promise<AxiosResponse<UserItem>> => {
    return httpClient.get(`/api/v1/users/${id}/`);
};

const updateUser = (id: number, data: CreateUserData): Promise<AxiosResponse<UserItem>> => {
    return httpClient.put<UserItem>(`/api/v1/users/${id}/`, data);
};

const partialUpdateUser = (id: number, data: PartialUpdateUserData): Promise<AxiosResponse<UserItem>> => {
    return httpClient.patch<UserItem>(`/api/v1/users/${id}/`, data);
};

const destroyUser = (id: number): Promise<AxiosResponse<void>> => {
    return httpClient.delete(`/api/v1/users/${id}/`);
};

export default {
    getUsersList,
    createUser,
    getUser,
    updateUser,
    partialUpdateUser,
    destroyUser
} as UsersAPIType;