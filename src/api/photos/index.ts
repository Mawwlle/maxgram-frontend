import { AxiosResponse } from 'axios';
import { CreatePhotoData, PartialUpdatePhotoData, PhotoListData, PhotoListItem, PhotosAPIType } from './types';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';

const getPhotosList = (data: PhotoListData): Promise<AxiosResponse<PaginationResponse<PhotoListItem>>> => {
    return httpClient.get<PaginationResponse<PhotoListItem>>('/api/v1/photos/', {
        params: {
            ...data
        }
    });
};

const createPhoto = (data: FormData): Promise<AxiosResponse<PhotoListItem>> => {
    return httpClient.post<PhotoListItem>('/api/v1/photos/', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

const getPhotoItem = (id: number): Promise<AxiosResponse> => {
    return httpClient.get(`/api/v1/photos/${id}/`, {
        responseType: 'blob'
    });
};

const updatePhoto = (id: number, data: CreatePhotoData): Promise<AxiosResponse<PhotoListItem>> => {
    return httpClient.put<PhotoListItem>(`/api/v1/photos/${id}`, data);
};

const partialUpdatePhoto = (id: number, data: PartialUpdatePhotoData): Promise<AxiosResponse<PhotoListItem>> => {
    return httpClient.patch<PhotoListItem>(`/api/v1/photos/${id}`, data);
};

const destroyPhoto = (id: number): Promise<AxiosResponse<void>> => {
    return httpClient.delete<void>(`/api/v1/photos/${id}`);
};

export default {
    getPhotosList,
    createPhoto,
    getPhotoItem,
    updatePhoto,
    partialUpdatePhoto,
    destroyPhoto
} as PhotosAPIType;