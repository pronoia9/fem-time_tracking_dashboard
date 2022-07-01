import './Time.scss';
const icon = require('../assets/images/icon-ellipsis.svg');
const exercise = require('../assets/images/icon-exercise.svg');
const play = require('../assets/images/icon-play.svg');
const selfcare = require('../assets/images/icon-self-care.svg');
const social = require('../assets/images/icon-social.svg');
const study = require('../assets/images/icon-study.svg');
const work = require('../assets/images/icon-work.svg');

export default function Time({ data }) {
  const { title, timeframes } = data;
  const { daily, weekly, monthly } = timeframes;

  return (
    <section class='work dashboard__widget text-white'>
      <div class='dashboard__header bg-100'>
        <img src='./images/icon-work.svg' alt='work icon' class='icon-image' />
      </div>
      <div class='dashboard__footer bg-neutral-400'>
        <div class='dashboard__footer--nav'>
          <p>{title}</p>
          <img src={icon.default} alt='ellipsis' width='21' height='5' />
        </div>
        <div class='dashboard__footer--foot'>
          <h1 class='current__time fw-400'>5hrs</h1>
          <p class='text-pale-blue fw-300 previous__time'>Previous - 7hrs</p>
        </div>
      </div>
    </section>
  );
}