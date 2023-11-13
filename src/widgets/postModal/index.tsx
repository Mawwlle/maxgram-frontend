import React, { useState } from 'react';
import './style.css';
import Container from '../../shared/ui/container';
import Input from '../../shared/ui/input';
import { FieldValues, useForm } from 'react-hook-form';
import api from '../../api';
import Button from '../../shared/ui/button';
import Popup from '../../entities/popUp';
import { CreateOrderData } from '../../api/orders/types';

const PostModal = () => {
    const [isShowModal, setIsShowModal] = useState<{ title: string } | null>(null);

    const {
        register,
        handleSubmit
    } = useForm();

    const onClickSubmit = (data: FieldValues) => {
        const orderData: CreateOrderData = {
            price: data.price,
            count: data.count,
            configuration: data.configuration
        };

        api.orders.createOrder(orderData)
            .then(() => {
                setIsShowModal(null);
                setIsShowModal({ title: 'Posted' });

                setTimeout(() => setIsShowModal(null), 3000);
            })
            .catch((e) => {
                console.warn('error creating photo', e.message);
            });
    }

    return (
        <div className={'post'}>
            {isShowModal && <Popup title={isShowModal.title} />}
            <Container>
                <div className={'post__content'}>
                    <form onSubmit={handleSubmit((data) => onClickSubmit(data))}>
                        <div className={'post__modal__content__params'}>
                            <input {...register('photo')} id={'photoUpload'} type='file' />
                            <Input register={register} maxLength={64} name={'description'} type='text' placeholder='Type description' />
                        </div>
                        <div className={'post__modal__content__submit'}>
                            <Button title={'Post'} type={'submit'} />
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default PostModal;