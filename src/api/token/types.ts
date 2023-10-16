import { AxiosResponse } from 'axios';

export type CreateTokenData = {
    username: string;
    password: string;
};

export type CreateToken = {
    access: string;
    refresh: string;
};

export type RefreshToken = {
    access: string;
};

export type TokenAPIType = {
    createToken(
        data: CreateTokenData
    ): Promise<AxiosResponse<CreateToken>>;
    refreshToken(
        refresh: string
    ): Promise<AxiosResponse<RefreshToken>>;
}