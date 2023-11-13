import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

export type PurchaseItem = {
    id: number;
    buyer_first_name: string;
    buyer_second_name: string;
    amount: number;
    configuration: number;
};

export type CreatePurchaseData = {
    buyer_first_name: string;
    buyer_second_name: string;
    amount: number;
    configuration: number;
};

export type PurchaseAPIType = {
    getPurchaseList(page: number): Promise<AxiosResponse<PaginationResponse<PurchaseItem>>>;
    createPurchase(data: CreatePurchaseData): Promise<AxiosResponse<PurchaseItem>>;
};