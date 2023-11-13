import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../base';

type User = {
    id: number;
    username: string;
};

export type OrderItem = {
    id: number;
    user: User;
    price: string;
    count: number;
    configuration: number;
};

export type CreateOrderData = {
    price: string;
    count: number;
    configuration: number;
};

export type OrdersAPIType = {
    getOrderList(page: number): Promise<AxiosResponse<PaginationResponse<OrderItem>>>;
    createOrder(data: CreateOrderData): Promise<AxiosResponse<OrderItem>>;
};