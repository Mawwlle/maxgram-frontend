import Container from '../../shared/ui/container';
import './style.css';
import Paperclip from '../../icons/paperclip.svg';

const Feed = () => {
  return (
    <div className={'feed'}>
      {/* <Container> */}
        <div className={'feed__container'}>
          <div className={'feed__item'}>
            <img src={Paperclip} className={'feed__item__paperclip'} />
            <div className={'feed__item__image'}>
              <img src="https://i.pinimg.com/736x/e2/3e/b8/e23eb8d47b92ce2c8432d4e85472d243.jpg" alt="" />
            </div>
            <div className={'feed__item__description'}>Home... / Дом...</div>
          </div>
          <div className={'feed__item'}>
            <img src={Paperclip} className={'feed__item__paperclip'} />
            <div className={'feed__item__image'}>
              <img src="https://i.pinimg.com/736x/e2/3e/b8/e23eb8d47b92ce2c8432d4e85472d243.jpg" alt="" />
            </div>
            <div className={'feed__item__description'}>Home... / Дом...</div>
          </div>
          <div className={'feed__item'}>
            <img src={Paperclip} className={'feed__item__paperclip'} />
            <div className={'feed__item__image'}>
              <img src="https://i.pinimg.com/736x/e2/3e/b8/e23eb8d47b92ce2c8432d4e85472d243.jpg" alt="" />
            </div>
            <div className={'feed__item__description'}>Home... / Дом...</div>
          </div>
          <div className={'feed__item'}>
            <img src={Paperclip} className={'feed__item__paperclip'} />
            <div className={'feed__item__image'}>
              <img src="https://i.pinimg.com/736x/e2/3e/b8/e23eb8d47b92ce2c8432d4e85472d243.jpg" alt="" />
            </div>
            <div className={'feed__item__description'}>Home... / Дом...</div>
          </div>
        </div>
      {/* </Container> */}
    </div>
  )
}

export default Feed;