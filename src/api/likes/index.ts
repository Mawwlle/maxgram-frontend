import { AxiosResponse } from 'axios';
import { LikesAPIType, LikesListData, LikesListItem } from './types';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';

const getLikesList = (data: LikesListData): Promise<AxiosResponse<PaginationResponse<LikesListItem>>> => {
    return httpClient.get<PaginationResponse<LikesListItem>>('/api/v1/likes/', {
        params: {
            ...data
        }
    });
};

const createLike = (photo: number): Promise<AxiosResponse<LikesListItem>> => {
    return httpClient.post<LikesListItem>('/api/v1/likes/', photo);
};

const getLikeItem = (id: number): Promise<AxiosResponse<LikesListItem>> => {
    return httpClient.get<LikesListItem>(`/api/v1/likes/${id}/`);
};

const updateLike = (id: number, photo: number): Promise<AxiosResponse<LikesListItem>> => {
    return httpClient.put<LikesListItem>(`/api/v1/likes/${id}/`, photo);
};

const partialUpdateLike = (id: number, photo?: number): Promise<AxiosResponse<LikesListItem>> => {
    return httpClient.patch<LikesListItem>(`/api/v1/likes/${id}/`, photo);
};

const destroyLike = (id: number): Promise<AxiosResponse<void>> => {
    return httpClient.delete<void>(`/api/v1/likes/${id}/`);
};

export default {
    getLikesList,
    createLike,
    getLikeItem,
    updateLike,
    partialUpdateLike,
    destroyLike
} as LikesAPIType;