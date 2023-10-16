import { AxiosResponse } from 'axios';
import { CreateToken, CreateTokenData, RefreshToken, TokenAPIType } from './types';
import httpClient from '../../utils/httpClient';

const createToken = (
    data: CreateTokenData
): Promise<AxiosResponse<CreateToken>> => {
    return httpClient.post<CreateToken>('/api/v1/token/', data);
};

const refreshToken = (
    refresh: string
): Promise<AxiosResponse<RefreshToken>> => {
    return httpClient.post<RefreshToken>('/api/v1/token/refresh/', {
        refresh
    });
};

export default {
    createToken,
    refreshToken
} as TokenAPIType;