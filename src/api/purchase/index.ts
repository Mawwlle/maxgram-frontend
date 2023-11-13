import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';
import { PurchaseAPIType, CreatePurchaseData, PurchaseItem } from './types';

const getPurchaseList = (page: number): Promise<AxiosResponse<PaginationResponse<PurchaseItem>>> => {
    return httpClient.get<PaginationResponse<PurchaseItem>>('/api/v1/purchases/', {
        params: {
            page
        }
    });
};

const createPurchase = (data: CreatePurchaseData): Promise<AxiosResponse<PurchaseItem>> => {
    return httpClient.post<PurchaseItem>('/api/v1/purchases/', {
        ...data
    });
};

export default {
    getPurchaseList,
    createPurchase,
} as PurchaseAPIType;