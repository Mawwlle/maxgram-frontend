import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../api';
import { PhotoListData, PhotoListItem } from '../../api/photos/types';
import FeedItem from '../../entities/feedItem';
import useIntersect from '../../hooks/useIntersect';
import Loader from '../../shared/ui/loader';

const Feed = () => {
    const [isPhotosLoading, setIsPhotosLoading] = useState<boolean>(true);
    const [photosPage, setPhotosPage] = useState<number>(1);
    const [isPhotosNext, setIsPhotosNext] = useState<boolean>(false);
    const [isPhotosMerge, setIsPhotosMerge] = useState<boolean>(false);
    const [photosList, setPhotosList] = useState<Array<PhotoListItem>>([]);
    const [photosTotal, setPhotosTotal] = useState<number>(0);

    useEffect(() => {
        if (isPhotosLoading) {
            const params: PhotoListData = {
            page: photosPage,
            };
    
            api.photos.getPhotosList(params)
                .then((resp) => {
                    setPhotosList((prev) => isPhotosMerge ? [...prev, ...resp.data.results] : resp.data.results);
                    setPhotosTotal(resp.data.count);

                    if (resp.data.next) {
                        setIsPhotosNext(true);
                    } else {
                        setIsPhotosNext(false);
                    }

                    setIsPhotosLoading(false);
                })
                .catch((e) => {
                    console.warn('Failed to get photos', e);
                    setIsPhotosLoading(false);
                })
        }
    }, [isPhotosLoading]);

    const updatePhotoList = () => {
        setPhotosPage(1);
        setIsPhotosMerge(false);
        setIsPhotosLoading(true);
    }

    const $loadMorePhotos = useIntersect((entry) => {
        if(entry.isIntersecting && !isPhotosLoading && isPhotosNext) {
            setPhotosPage((prev) => prev + 1);
            setIsPhotosMerge(true);
            setIsPhotosLoading(true);
        }
    }, {
        rootMargin: '500px 0px'
    });


    const elLoadPhotos = () => {
        if(!isPhotosLoading && photosList.length && isPhotosNext && photosList.length != photosTotal) {
            return <Loader ref={$loadMorePhotos} />;
        }

        return null;
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
        {/* <Container> */}
            <div className={'feed__container'}>
                {photosList?.map((photo) => {
                    return <FeedItem key={photo.id} photo={photo} updateList={updatePhotoList} />
                })}
                {elLoadPhotos()}
            </div>
        {/* </Container> */}
        </div>
    )
}

export default Feed;