import Profile from './Profile';
import Time from './Time';
import './Widget.scss';

export default function Widget({ data, changeTime }) {
  return data ? (
    <Time data={data} />
  ) : (
    <Profile changeTime={changeTime} user={{ name: 'Jeremy Robson', image: '../assets/images/image-jeremy.png' }} />
  );
}