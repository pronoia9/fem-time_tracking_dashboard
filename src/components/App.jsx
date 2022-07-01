import './App.scss';
import Profile from './Profile';
import Time from './Time';
const data = require('../assets/data.json');

function App() {
  console.log(data);
  return (
    <div className='grid-container'>
      <Profile />
      { data.map((obj) => (<Time key={obj.title} />)) }
    </div>
  );
}

export default App;