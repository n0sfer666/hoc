import React from 'react';
import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import { LOREM } from './lorem';

const renderComponentWithHandler = (
  handler: () => void,
  type: 'increment' | 'decrement') => (<>
    <button onClick={handler}>
      {type}
    </button>
  </>)

function App() {
  const [a, setA] = useState(0);

  const inc = () => { setA(a+1) }
  const dec = () => { setA(a-1) }

  return (
    <div className="App">
      <header>
        {renderComponentWithHandler(inc, 'increment')}
        {' '}
        {renderComponentWithHandler(dec, 'decrement')}
      </header>
      <main>
        <Layout title={`Волшебное число: ${a}`}>
          <p style={{width: '40%'}}>{LOREM}</p>
        </Layout>
      </main>
    </div>
  );

}

export default App;
