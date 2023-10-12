export type PaginationResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<T>;
};

export type PhotoPaginationResponse<T> = {
    count: number;
    next: number | null;
    previous: number | null;
    results: Array<T>;
};

export type Page = {
    pageNumber?: number;
    pageSize?: number;
};
