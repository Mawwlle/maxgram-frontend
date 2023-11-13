import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../api';
import { CreateOrderData, OrderItem, } from '../../api/orders/types';
import useIntersect from '../../hooks/useIntersect';
import Loader from '../../shared/ui/loader';
import Button from '../../shared/ui/button';


const Order = () => {
    const [isPhotosLoading, setIsPhotosLoading] = useState<boolean>(true);
    const [photosPage, setPhotosPage] = useState<number>(1);
    const [isPhotosNext, setIsPhotosNext] = useState<boolean>(false);
    const [isPhotosMerge, setIsPhotosMerge] = useState<boolean>(false);
    const [photosList, setPhotosList] = useState<Array<OrderItem>>([]);
    const [photosTotal, setPhotosTotal] = useState<number>(0);
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [configuration, setConfiguration] = useState('');

    useEffect(() => {
        if (isPhotosLoading) {
            api.orders.getOrderList(photosPage)
                .then((resp) => {
                    setPhotosList((prev) => isPhotosMerge ? [...prev, ...resp.data.results] : resp.data.results);
                    setPhotosTotal(resp.data.count);

                    setIsPhotosNext(!!resp.data.next);

                    setIsPhotosLoading(false);
                })
                .catch((e) => {
                    console.warn('Failed to get photos', e);
                    setIsPhotosLoading(false);
                })
        }
    }, [isPhotosLoading]);

    const $loadMorePhotos = useIntersect((entry) => {
        if (entry.isIntersecting && !isPhotosLoading && isPhotosNext) {
            setPhotosPage((prev) => prev + 1);
            setIsPhotosMerge(true);
            setIsPhotosLoading(true);
        }
    }, {
        rootMargin: '500px 0px'
    });


    const elLoadPhotos = () => {
        if (!isPhotosLoading && photosList.length && isPhotosNext && photosList.length != photosTotal) {
            return <Loader ref={$loadMorePhotos} />;
        }

        return null;
    };

    const handleSubmit = () => {
        const orderData: CreateOrderData = {
            price,
            count: parseInt(count),
            configuration: parseInt(configuration),
        };

        api.orders.createOrder(orderData)
            .then((response) => {
                console.log('Order created:', response.data);
                setPhotosPage(1);
                setIsPhotosNext(true);
                setIsPhotosMerge(false);
                setIsPhotosLoading(true);
            })
            .catch((error) => {
                console.error('Error creating order:', error);
            });
    };

    if (isPhotosLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div className={'feed'}>
            {/* {elCreateOrder} */}
            <h2 className={'feed_header'}>Заказанные автомобили</h2>
            <div className="order-inputs-container">
                <input
                    className='order-input'
                    type="number"
                    placeholder="Сумма"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    className='order-input'
                    type="number"
                    placeholder="Количество машин"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <input
                    className='order-input'
                    type="number"
                    placeholder="Серийный номер конфигурации"
                    value={configuration}
                    onChange={(e) => setConfiguration(e.target.value)}
                />
                <Button className='order-button' title={'Создать заказ'} type={'submit'} onClick={handleSubmit} />
            </div>
            <div className={'separator'} />
            <div className={'feed__container'}>
                {photosList.map((photo) => (
                    <div key={photo.id} className="order-block">
                        <h3>Сумма: {photo.price}</h3>
                        <h3>Количество машин: {photo.count}</h3>
                        <h3>Серийный номер конфигурации: {photo.configuration}</h3>
                    </div>
                ))}
                {elLoadPhotos()}
            </div>
        </div>
    )
}

export default Order;