import InputField from '../../entities/inputField';
import Button from '../../shared/ui/button';
import Container from '../../shared/ui/container';
import './style.css';

const Settings = () => {
  return (
    <div className={'settings'}>
      <Container>
        <div className={'settings__container'}>
          <div className={'settings__container__left'}>
            <h2>User settings</h2>
            <InputField title='Email' placeholder='Enter email' defaultValue='maxgram@service.io' className={'settings__container__field'} />
            <InputField title='Username' placeholder='Enter username' defaultValue='maxgram' className={'settings__container__field'} />
            <div>            
              <InputField title='First Name' placeholder='Enter first name' defaultValue='Max' className={'settings__container__field'} />
              <InputField title='Last Name' placeholder='Enter last name' defaultValue='Gram' className={'settings__container__field'} />
            </div>
            <div>
              <Button title='Save changes' className={'settings__container__left__submit'} />
            </div>
          </div>
          <div className={'settings__container__right'}>
            <h2>Change password</h2>
            <InputField title='Enter new password' placeholder='Enter new password' className={'settings__container__field'} />
            <InputField title='Repeat new password' placeholder='Repeat new password' className={'settings__container__field'} />
            <Button title='Change' className={'settings__container__right__submit'}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Settings;
