import { useState, useEffect } from 'react';
import './Time.scss';
const icon = require('../assets/images/icon-ellipsis.svg');
const exercise = require('../assets/images/icon-exercise.svg');
const play = require('../assets/images/icon-play.svg');
const selfcare = require('../assets/images/icon-self-care.svg');
const social = require('../assets/images/icon-social.svg');
const study = require('../assets/images/icon-study.svg');
const work = require('../assets/images/icon-work.svg');

export default function Time({ data, state }) {
  const [times, setTimes] = useState({ current: 0, previous: 0 });
  const { title, timeframes } = data;
  const title2 = title.toLowerCase().replace(' ', '-');

  useEffect(() => {
    setTimes(getTimes(state, timeframes));
  }, [state, timeframes]);

  return (
    <section className='work dashboard__widget tc-white'>
      <div className={`dashboard__header bg-${title2}`}>
        <img src={require(`../assets/images/icon-${title2}.svg`)} alt={`${title} icon`} className='icon-image' />
      </div>
      <div className='dashboard__footer bg-dark_blue'>
        <div className='dashboard__footer--nav'>
          <p>{title}</p>
          <img src={icon.default} alt='ellipsis' width='21' height='5' />
        </div>
        <div className='dashboard__footer--foot'>
          <h1 className='current__time fw-400'>{times.current}hrs</h1>
          <p className='tc-pale-blue fw-300 previous__time'>Previous - {times.previous}hrs</p>
        </div>
      </div>
    </section>
  );
}

const getTimes = (state, timeframes) => {
  if (state === 'Daily') return { current: timeframes.daily.current, previous: timeframes.daily.previous };
  else if (state === 'Weekly') return { current: timeframes.weekly.current, previous: timeframes.weekly.previous };
  else if (state === 'Monthly') return { current: timeframes.monthly.current, previous: timeframes.monthly.previous };
  else return [0, 0];
};