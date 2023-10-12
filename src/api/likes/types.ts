import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

export type LikesListData = {
    page?: number;
    photo?: number;
    user?: number;
};

export type LikesListItem = {
    id: number;
    user: LikesListItemUser;
    photo: number;
};

export type LikesListItemUser = {
    id: number;
    username: string;
};

export type LikesAPIType = {
    getLikesList(data: LikesListData): Promise<AxiosResponse<PaginationResponse<LikesListItem>>>;
    createLike(photo: number): Promise<AxiosResponse<LikesListItem>>;
    getLikeItem(id: number): Promise<AxiosResponse<LikesListItem>>;
    updateLike(id: number, photo: number): Promise<AxiosResponse<LikesListItem>>;
    partialUpdateLike(id: number, photo?: number): Promise<AxiosResponse<LikesListItem>>;
    destroyLike(id: number): Promise<AxiosResponse<void>>;
};