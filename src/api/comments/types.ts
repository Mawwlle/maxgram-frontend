import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

export type CommentsListData = {
    page?: number;
    photo?: number;
    user?: number;
};

export type CommentsListItem = {
    id: number;
    user: CommentsListItemUser;
    content: string;
    photo: number;
};

export type CommentsListItemUser = {
    id: number;
    username: string;
}

export type CreateCommentData = {
    content: string;
    photo: number;
};

export type PartialUpdateCommentData = {
    content?: string;
    photo?: number;
};

export type CommentsAPIType = {
    getCommentsList(data: CommentsListData): Promise<AxiosResponse<PaginationResponse<CommentsListItem>>>;
    createComment(data: CreateCommentData): Promise<AxiosResponse<CommentsListItem>>;
    getComment(id: number): Promise<AxiosResponse<CommentsListItem>>;
    updateComment(id: number, data: CreateCommentData): Promise<AxiosResponse<CommentsListItem>>;
    partialUpdateComment(id: number, data?: PartialUpdateCommentData): Promise<AxiosResponse<CommentsListItem>>;
    destroyComment(id: number): Promise<AxiosResponse<void>>;
};