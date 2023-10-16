import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useAppSelector } from '../../store/hooks';
import api from '../../api';

interface IProps {
    item: {
        id: number;
        user: {
            id: number;
            username: string;
        };
        content: string;
        photo: number;
    }
    updateList: () => void;
}

const FeedItemComment = (props: IProps) => {
    const userId = useAppSelector((store) => store.user.user?.id)
    const isOwner = props.item.user.id === userId;

    const onClickRemoveComment = () => {
        if (isOwner) {
            api.comments.destroyComment(props.item.id)
                .then((resp) => {
                    console.log('Removed', resp.data);

                    props.updateList();
                })
                .catch((e) => {
                    console.warn('Failed to remove', e);
                });
        }
        return console.log('onClickRemoveComment');
    };

    return (
        <div className={'comment'}>
            <div className={'comment__title'}>
                <span>{props.item.user.username}: </span>{props.item.content}
            </div>
            <div className={'comment__controls'} onClick={onClickRemoveComment}>
                {isOwner && <FontAwesomeIcon icon={faRemove} />}
            </div>
        </div>
    );
};

export default FeedItemComment;