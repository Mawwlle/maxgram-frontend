import { AxiosResponse } from 'axios';

export type CreateToken = {
    access: string;
    refresh: string;
};

export type RefreshToken = {
    access: string;
};

export type TokenAPIType = {
    createToken(
        username: string,
        password: string
    ): Promise<AxiosResponse<CreateToken>>;
    refreshToken(
        refresh: string
    ): Promise<AxiosResponse<RefreshToken>>;
}