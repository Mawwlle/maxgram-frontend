import { useEffect, useState } from 'react';
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
    const [photosList, setPhotosList] = useState<Array<PhotoListItem>>([]);
    const [photosTotal, setPhotosTotal] = useState<number>(0);

    useEffect(() => {
        if (isPhotosLoading) {
            const params: PhotoListData = {
            page: photosPage,
            };
    
            api.photos.getPhotosList(params)
                .then((resp) => {
                    setPhotosList(resp.data.results);
                    setPhotosTotal(resp.data.count);

                    if (resp.data.next) {
                        setIsPhotosNext(true);
                    }

                    setIsPhotosLoading(false);
                })
                .catch((e) => {
                    console.warn('Failed to get photos', e);
                    setIsPhotosLoading(false);
                })
        }
    }, []);

    const $loadMorePhotos = useIntersect((entry) => {
        if(entry.isIntersecting) {
            setPhotosPage((prev) => prev + 1);
            setIsPhotosLoading(true);
        }
    }, {
        rootMargin: '500px 0px'
    });


    const elLoadPhotos = () => {
        if(!isPhotosLoading && photosList.length && isPhotosNext && photosList.length != photosTotal) {
            return <Loader ref={$loadMorePhotos} />;
        }
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
                    return <FeedItem key={photo.id} photo={photo} />
                })}
                {elLoadPhotos()}
            </div>
        {/* </Container> */}
        </div>
    )
}

export default Feed;