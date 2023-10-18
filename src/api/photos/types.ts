import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

export type PhotoListData = {
    created_at?: string;
    page?: number;
    user?: number;
};

export type PhotoListItem = {
    id: number;
    user: PhotoListItemUser;
    caption: string;
    created_at: string;
};

export type PhotoListItemUser = {
    id: number;
    username: string;
};

export type CreatePhotoData = {
    image: string;
    caption?: string;
};

export type PartialUpdatePhotoData = {
    image?: string;
    caption?: string;
};

export type PhotosAPIType = {
    getPhotosList(data: PhotoListData): Promise<AxiosResponse<PaginationResponse<PhotoListItem>>>;
    createPhoto(data: FormData): Promise<AxiosResponse<PhotoListItem>>;
    getPhotoItem(id: number): Promise<AxiosResponse>;
    updatePhoto(id: number, data: CreatePhotoData): Promise<AxiosResponse<PhotoListItem>>;
    partialUpdatePhoto(id: number, data: PartialUpdatePhotoData): Promise<AxiosResponse<PhotoListItem>>;
    destroyPhoto(id: number): Promise<AxiosResponse<void>>;
};