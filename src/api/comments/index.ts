import { AxiosResponse } from 'axios';
import { CommentsAPIType, CommentsListData, CommentsListItem, CreateCommentData, PartialUpdateCommentData } from './types';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';

const getCommentsList = (data: CommentsListData): Promise<AxiosResponse<PaginationResponse<CommentsListItem>>> => {
    return httpClient.get<PaginationResponse<CommentsListItem>>('/api/v1/comments/', {
        params: {
            ...data
        }
    });
};

const createComment = (data: CreateCommentData): Promise<AxiosResponse<CommentsListItem>> => {
    return httpClient.post<CommentsListItem>('/api/v1/comments/', data);
};

const getComment = (id: number): Promise<AxiosResponse<CommentsListItem>> => {
    return httpClient.get<CommentsListItem>(`/api/v1/comments/${id}/`);
};

const updateComment = (id: number, data: CreateCommentData): Promise<AxiosResponse<CommentsListItem>> => {
    return httpClient.put<CommentsListItem>(`/api/v1/comments/${id}/`, data);
};

const partialUpdateComment = (id: number, data?: PartialUpdateCommentData): Promise<AxiosResponse<CommentsListItem>> => {
    return httpClient.patch<CommentsListItem>(`/api/v1/comments/${id}/`, data);
};

const destroyComment = (id: number): Promise<AxiosResponse<void>> => {
    return httpClient.delete<void>(`/api/v1/comments/${id}/`);
};

export default {
    getCommentsList,
    createComment,
    getComment,
    updateComment,
    partialUpdateComment,
    destroyComment
} as CommentsAPIType;