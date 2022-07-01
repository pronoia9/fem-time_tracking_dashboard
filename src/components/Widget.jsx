import Profile from './Profile';
import Time from './Time';
import './Widget.scss';

export default function Widget({ data }) {
  return data ? <Time data={data} /> : <Profile />;
}