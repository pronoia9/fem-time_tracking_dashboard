import Profile from './Profile';
import Time from './Time';
import './Widget.scss';

export default function Widget({ data, state, changeTime }) {
  return data ? (
    <Time data={data} state={state} />
  ) : (
    <Profile state={state} changeTime={changeTime} user={{ name: 'Jeremy Robson', image: '../assets/images/image-jeremy.png' }} />
  );
}