import LikesAPI from './likes';
import PhotosAPI from './photos';
import TokenAPI from './token';
import UsersAPI from './users';

import { LikesAPIType } from './likes/types';
import { PhotosAPIType } from './photos/types';
import { TokenAPIType } from './token/types';
import { UsersAPIType } from './users/types';

export type APIType = {
    likes: LikesAPIType;
    photos: PhotosAPIType;
    token: TokenAPIType;
    users: UsersAPIType;
}

export default {
    likes: LikesAPI,
    photos: PhotosAPI,
    token: TokenAPI,
    users: UsersAPI
} as APIType;