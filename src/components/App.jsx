import { useState, useEffect } from 'react';
import './App.scss';
import Widget from './Widget';
const data = require('../assets/data.json');

function App() {
  const [state, setState] = useState();
  useEffect(() => { setState('Daily') }, []);
  const changeTime = (t) => setState(t); 

  return (
    <div className='grid-container'>
      <Widget changeTime={changeTime} />
      { data.map((obj) => (<Widget key={obj.title} data={obj} />)) }
    </div>
  );
}

export default App;