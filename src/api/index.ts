import CommentsAPI from './comments';
import LikesAPI from './likes';
import PhotosAPI from './photos';
import TokenAPI from './token';
import UsersAPI from './users';

import { CommentsAPIType } from './comments/types';
import { LikesAPIType } from './likes/types';
import { PhotosAPIType } from './photos/types';
import { TokenAPIType } from './token/types';
import { UsersAPIType } from './users/types';

export type APIType = {
    comments: CommentsAPIType;
    likes: LikesAPIType;
    photos: PhotosAPIType;
    token: TokenAPIType;
    users: UsersAPIType;
}

export default {
    comments: CommentsAPI,
    likes: LikesAPI,
    photos: PhotosAPI,
    token: TokenAPI,
    users: UsersAPI
} as APIType;