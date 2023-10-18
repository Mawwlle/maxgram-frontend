import Popup from '../../entities/popUp';
import Container from '../../shared/ui/container';
import UserPassword from '../../widgets/settings/userPassword';
import UserSettings from '../../widgets/settings/userSettings';
import './style.css';
import React, { useState } from 'react';

const Settings = () => {
    const [isShowModal, setIsShowModal] = useState<{title: string} | null>(null);

    const onClickSave = (text: string) => {
        setIsShowModal(null);
        setIsShowModal({ title: text });

        setTimeout(() => setIsShowModal(null), 3000);
    }

    return (
        <div className={'settings'}>
            {isShowModal && <Popup title={isShowModal.title}/>}
            <Container>
                <div className={'settings__container'}>
                    <div className={'settings__container__left'}>
                        <UserSettings onClickSave={onClickSave} />
                    </div>
                    <div className={'settings__container__right'}>
                        <UserPassword onClickSave={onClickSave} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Settings;
