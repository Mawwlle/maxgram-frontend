import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../api';
import { CreatePurchaseData, PurchaseItem, } from '../../api/purchase/types';
import useIntersect from '../../hooks/useIntersect';
import Loader from '../../shared/ui/loader';
import Button from '../../shared/ui/button';


const Purchase = () => {
    const [isPhotosLoading, setIsPhotosLoading] = useState<boolean>(true);
    const [photosPage, setPhotosPage] = useState<number>(1);
    const [isPhotosNext, setIsPhotosNext] = useState<boolean>(false);
    const [isPhotosMerge, setIsPhotosMerge] = useState<boolean>(false);
    const [photosList, setPhotosList] = useState<Array<PurchaseItem>>([]);
    const [photosTotal, setPhotosTotal] = useState<number>(0);
    const [price, setPrice] = useState('');
    const [configuration, setConfiguration] = useState('');
    const [buyerFirstName, setBuyerFirstName] = useState('');
    const [buyerSecondName, setBuyerSecondName] = useState('');

    useEffect(() => {
        if (isPhotosLoading) {
            api.purchases.getPurchaseList(photosPage)
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
        const purchaseData: CreatePurchaseData = {
            buyer_first_name: buyerFirstName,
            buyer_second_name: buyerSecondName,
            amount: parseInt(price),
            configuration: parseInt(configuration),
        };

        api.purchases.createPurchase(purchaseData)
            .then((response) => {
                console.log('Purchase created:', response.data);
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
            <h2 className={'feed_header'}>Купленные автомобили</h2>
            <div className="order-inputs-container">
                <input
                    className='order-input'
                    type="text"
                    placeholder="Имя покупателя"
                    value={buyerFirstName}
                    onChange={(e) => setBuyerFirstName(e.target.value)}
                />
                <input
                    className='order-input'
                    type="text"
                    placeholder="Фамилия покупателя"
                    value={buyerSecondName}
                    onChange={(e) => setBuyerSecondName(e.target.value)}
                />
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
                    placeholder="Серийный номер конфигурации"
                    value={configuration}
                    onChange={(e) => setConfiguration(e.target.value)}
                />
                <Button className='order-button' title={'Оформить покупку'} type={'submit'} onClick={handleSubmit} />
            </div>
            <div className={'separator'} />
            <div className={'feed__container'}>
                {photosList.map((photo) => (
                    <div key={photo.id} className="order-block">
                        <h3>Сумма: {photo.amount}</h3>
                        <h3>Покупатель: {photo.buyer_first_name} {photo.buyer_second_name}</h3>
                        <h3>Серийный номер конфигурации: {photo.configuration}</h3>
                    </div>
                ))}
                {elLoadPhotos()}
            </div>
        </div>
    )
}

export default Purchase;