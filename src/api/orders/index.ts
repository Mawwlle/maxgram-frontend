import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';
import httpClient from '../../utils/httpClient';
import { OrdersAPIType, CreateOrderData, OrderItem } from './types';

const getOrderList = (page: number): Promise<AxiosResponse<PaginationResponse<OrderItem>>> => {
    return httpClient.get<PaginationResponse<OrderItem>>('/api/v1/orders/', {
        params: {
            page
        }
    });
};

const createOrder = (data: CreateOrderData): Promise<AxiosResponse<OrderItem>> => {
    return httpClient.post<OrderItem>('/api/v1/orders/', {
        ...data
    });
};

export default {
    getOrderList,
    createOrder,
} as OrdersAPIType;