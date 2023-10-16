export interface UserStore {
    isAuth?: boolean;
    user?: UserStoreInfo;
};

export type UserStoreInfo = {
    id?: number;
    email?: string;
    last_login?: string;
    is_superuser?: boolean;
    first_name?: string;
    last_name?: string;
    username?: string;
};
