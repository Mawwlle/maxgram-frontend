import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import Button from '../../shared/ui/button';
import Container from '../../shared/ui/container'
import Input from '../../shared/ui/input';
import { useAppDispatch } from '../../store/hooks';
import { closeModal } from '../../store/modal';
import './style.css';
import api from '../../api';

const PostModal = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit
    } = useForm();

    const onClickClose = () => {
        dispatch(closeModal());
    }

    const onClickSubmit = (data: FieldValues) => {
        const formData = new FormData();

        const selectedFile = data.photo[0];
        formData.append("image", selectedFile);
        formData.append("caption", data.description);

        api.photos.createPhoto(formData)
            .then((resp) => {
                console.log('photo created', resp.data);
                onClickClose();
            })
            .catch((e) => {
                console.warn('error creating photo', e.message);
            });
    }
    return (
        <div className={'post__modal'}>
            <div className={'post__modal__close'} onClick={onClickClose} />
            <div className={'post__modal__content'}>
                <Container>
                    <div className={'post__modal__content__photo'}>
                        <img src='https://previews.123rf.com/images/lexaarts/lexaarts1311/lexaarts131100028/23463311-3d-human-points-a-finger-down-3d-image-with-a-work-path.jpg'/>
                    </div>
                    <form onSubmit={handleSubmit((data) => onClickSubmit(data))}>
                        <div className={'post__modal__content__params'}>
                            <input {...register('photo')} id={'photoUpload'} type='file' />
                            <Input register={register} name={'description'} type='text' placeholder='Type description'/>
                        </div>
                        <div className={'post__modal__content__submit'}>
                            <Button title={'Post'} type={'submit'}/>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default PostModal;