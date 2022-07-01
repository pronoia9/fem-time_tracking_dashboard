import './Profile.scss';
const url = require('../assets/images/image-jeremy.png');

export default function Profile({ user, state, changeTime }) {
  const { name } = user;
  const times = [{ time: 'Daily' }, { time: 'Weekly' }, { time: 'Monthly' }];

  return (
    <section className='dashboard__widget dashboard__profile bg-dark_blue'>
      <div className='profile__header bg-primary'>
        <img src={url} alt='profile pic' className='profile-image' />
        <div className='profile__info'>
          <p className='tc-pale-blue'>Reports for</p>
          <h2>{name}</h2>
        </div>
      </div>
      <div className='profile__footer tc-desaturated-blue'>
        {times.map((t) => (
          <p key={t.time} className={state === t.time ? 'active' : ''} onClick={() => changeTime(t.time)}>
            {t.time}
          </p>
        ))}
      </div>
    </section>
  );
}