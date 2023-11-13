import TokenAPI from './token';
import UsersAPI from './users';
import OrdersAPI from './orders';
import PurchaseAPI from './purchase';

import { PurchaseAPIType } from './purchase/types';
import { TokenAPIType } from './token/types';
import { UsersAPIType } from './users/types';
import { OrdersAPIType } from './orders/types';

export type APIType = {
    token: TokenAPIType;
    users: UsersAPIType;
    orders: OrdersAPIType;
    purchases: PurchaseAPIType;
}

export default {
    token: TokenAPI,
    users: UsersAPI,
    orders: OrdersAPI,
    purchases: PurchaseAPI,
} as APIType;