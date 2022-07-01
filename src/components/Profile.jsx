import './Profile.scss';
const url = require('../assets/images/image-jeremy.png');

export default function Profile({ user }) {
  const { name } = user;

  return (
    <section className='dashboard__widget dashboard__profile bg-dark_blue'>
      <div className='profile__header bg-primary'>
        <img src={url} alt='profile pic' className='profile-image' />
        <div className='profile__info'>
          <p className='text-pale-blue'>Reports for</p>
          <h2>{name}</h2>
        </div>
      </div>
      <div className='profile__footer text-desaturated-blue'>
        <p className='active' id='daily'>
          Daily
        </p>
        <p id='weekly'>Weekly</p>
        <p id='monthly'>Monthly</p>
      </div>
    </section>
  );
}