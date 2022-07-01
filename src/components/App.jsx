import './App.scss';
import Widget from './Widget';
const data = require('../assets/data.json');

function App() {
  console.log(data);
  return (
    <div className='grid-container'>
      <Widget />
      { data.map((obj) => (<Widget key={obj.title} data={obj} />)) }
    </div>
  );
}

export default App;