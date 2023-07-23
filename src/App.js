import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [a, setA] = useState(0);

  let b = 0;

  useEffect(() => {
    console.log('a changed, now is: ', a);
    console.log('b is: ', b);
  }, [a, b])

  useEffect(() => {
    console.log('b changed, now is:', b)
  }, [b])

  const handleCLickState = () => { setA(a+1) }
  const handleClick = () => { b += 1 }

  const handleJustClick = () => { console.log('click') }

  const renderComponentWithHandler = (
    stateHandler = handleJustClick,
    badHandler = handleJustClick) => (<>
      <button onClick={stateHandler}>click me state</button>
      <br />
      <button onClick={badHandler}>click me</button>
    </>)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {renderComponentWithHandler(handleCLickState, handleClick)}
        </div>
        <div>
        {renderComponentWithHandler()}
        </div>
      </header>
    </div>
  );

}

export default App;
