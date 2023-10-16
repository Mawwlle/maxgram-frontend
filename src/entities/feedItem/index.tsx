import React, { useState, useEffect } from 'react';
import { PhotoListItem } from '../../api/photos/types';
import api from '../../api';
import Paperclip from '../../icons/paperclip.svg';
import './style.css';
import Input from '../../shared/ui/input';
import { useForm, FieldValues } from 'react-hook-form';
import { CommentsListData, CommentsListItem, CreateCommentData } from '../../api/comments/types';
import Like from '../../icons/like.svg';
import Comment from '../../icons/comment.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LikesListData } from '../../api/likes/types';
import { useAppSelector } from '../../store/hooks';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import useIntersect from '../../hooks/useIntersect';
import Loader from '../../shared/ui/loader';
import FeedItemComment from '../feedItemComment';

interface IItemProps {
    photo: PhotoListItem;
}
  
const FeedItem = (props: IItemProps) => {
    const [photo, setPhoto] = useState<string>();
    const [isPhotoClicked, setIsPhotoClicked] = useState<boolean>();
    const [commentList, setCommentList] = useState<Array<CommentsListItem>>([]);
    const [commentsPage, setCommentsPage] = useState<number>(1);
    const [isCommentsNext, setIsCommentsNext] = useState<boolean>(false);
    const [isCommentsLoadMore, setIsCommentsLoadMore] = useState<boolean>(false);
    const [isCommentsLoading, setIsCommentsLoading] = useState<boolean>(false);
    const [commentsTotal, setCommentsTotal] = useState<number>(0);
    const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true);
    const [isLoadingLike, setIsLoadingLike] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<number | null>(null);

    const user = useAppSelector((store) => store.user.user);

    const {
        register,
        handleSubmit,
        resetField,
        formState: { isValid }
    } = useForm();


    useEffect(() => {
        api.photos.getPhotoItem(props.photo.id)
        .then((resp) => {
            const href = URL.createObjectURL(resp.data);
            setPhoto(href);
        });

        const params: LikesListData = {
            ...(props.photo.id && {photo: props.photo.id}),
            ...(user?.id && {user: user?.id})
        };

        api.likes.getLikesList(params)
            .then((resp) => {
                if (resp.data.results.length) {
                    setIsLiked(resp.data.results[0].id);
                }
            })
    }, []);

    useEffect(() => {
        if (isLoadingComments && !isCommentsLoading) {
            setIsCommentsLoading(true);
            const params: CommentsListData = {
                page: commentsPage,
                photo: props.photo.id
            };
    
            api.comments.getCommentsList(params)
                .then((resp) => {
                    setCommentList((prev) => isCommentsLoadMore ? [...prev, ...resp.data.results] : resp.data.results);
                    setCommentsTotal(resp.data.count);

                    if (resp.data.next) {
                        setIsCommentsNext(true);
                    } else {
                        setIsCommentsNext(false);
                    }

                    
                    setIsCommentsLoading(false);
                    setIsLoadingComments(false);
                    setIsCommentsLoadMore(false);
                })
                .catch((e) => {
                    setIsCommentsNext(false);
                    
                    setIsCommentsLoading(false);
                    setIsLoadingComments(false);
                    setIsCommentsLoadMore(false);
                    console.warn('Error getting comments', e);
                });
        }
    }, [isLoadingComments]);

    useEffect(() => {
        if (isLoadingLike && !isLiked) {
            api.likes.createLike(props.photo.id)
                .then((resp) => {
                    console.log('Liked', resp.data);
                    setIsLiked(resp.data.id);
                })
                .catch((e) => {
                    console.warn('Error creating like: ', e);
                });
        } else if (isLoadingLike && isLiked) {
            api.likes.destroyLike(isLiked)
                .then((resp) => {
                    console.log('Successfully destroyed like: ', resp.data);
                    setIsLiked(null);
                })
                .catch((e) => {
                    console.warn('Error destroying like: ', e);
                });
        }
        setIsLoadingLike(false);
    }, [isLoadingLike])

    const onCommentClick = () => {
        setIsPhotoClicked((prev) => !prev);
    };

    const onLikeClick = () => {
        setIsLoadingLike(true);
    }

    const onSubmitComment = (data: FieldValues) => {
        if (isValid && data.comment.length) {
            const params: CreateCommentData = {
                content: data.comment,
                photo: props.photo.id
            };

            api.comments.createComment(params)
                .then((resp) => {
                    console.log('posted comment', resp.data);
                    resetField('comment');
                    setCommentsPage(1);
                    setIsLoadingComments(true);
                })
                .catch((e) => {
                    console.warn('error creating comment', e);
                });
        }
    };

    const onRemoveComment = () => {
        setCommentsPage(1);
        setIsLoadingComments(true);
    };

    const $loadMoreComments = useIntersect((entry) => {
        if(entry.isIntersecting) {
            setCommentsPage((prev) => prev + 1);
            setIsCommentsLoadMore(true);
            setIsLoadingComments(true);
        }
    }, {
        rootMargin: '100px 0px'
    });


    const elLoadComments = () => {
        if(!isCommentsLoading && commentList.length && isCommentsNext && commentList.length != commentsTotal) {
            return <Loader ref={$loadMoreComments} />;
        }

        return null;
    };

    return (
        <div className={'feed__item'}>
            <div className={'feed__item__content'}>
                <img src={Paperclip} className={'feed__item__paperclip'} />
                {isPhotoClicked ? 
                    <>
                        <div className={'feed__item__comment'}>
                            <div className={'feed__item__comment__scroll'}>
                                {commentList?.map((comment) => {
                                    return (
                                        <FeedItemComment key={comment.id} item={comment} updateList={onRemoveComment}/>
                                    )
                                })}
                                {elLoadComments()}
                            </div>
                            <form className={'feed__item__comment__input'} onSubmit={handleSubmit((data) => onSubmitComment(data))}>
                                <Input register={register} name='comment' />
                            </form>
                        </div>
                    </>    
                :
                    <>
                        <div className={'feed__item__image'}>
                            <img src={photo} alt={`${props.photo.id}`} />
                        </div>
                    </>
                }
            </div>
            <div className={'feed__item__description'}>
                <div className={'feed__item__description__controls'}>
                    <div onClick={onLikeClick} className={'feed__item__description__controls-like'}>
                        {isLiked ? 
                        <FontAwesomeIcon icon={faHeart} />
                        :
                        <img src={Like} alt="" />
                        }
                    </div>
                    <div onClick={onCommentClick} className={'feed__item__description__controls-comment'}>
                        <img src={Comment} alt="" />
                    </div>
                </div>
                <div className={'feed__item__description__title'}>
                    {props.photo.caption}
                </div>
            </div>
        </div>
    )
}

export default FeedItem;