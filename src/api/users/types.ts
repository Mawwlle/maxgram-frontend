import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

export type UserItem = {
    id: number;
    email: string;
    last_login: string;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    username: string;
};

export type CreateUserData = {
    email?: string;
    first_name?: string;
    last_name?: string;
    username: string;
    password: string;
}

export type PartialUpdateUserData = {
    email?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    password?: string;
}

export type UsersAPIType = {
    getUsersList(page: number): Promise<AxiosResponse<PaginationResponse<UserItem>>>;
    createUser(data: CreateUserData): Promise<AxiosResponse<UserItem>>;
    getUser(id: number): Promise<AxiosResponse<UserItem>>;
    updateUser(id: number, data: CreateUserData): Promise<AxiosResponse<UserItem>>;
    partialUpdateUser(id: number, data: PartialUpdateUserData): Promise<AxiosResponse<UserItem>>;
    destroyUser(id: number): Promise<AxiosResponse<void>>;
    getSelfUser(): Promise<AxiosResponse<UserItem>>;
};