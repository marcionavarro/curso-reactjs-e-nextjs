import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const eventFn = () => {
    console.log('h1 Clicado');
  };

  // componentDiUpdate - executa toda vez qeu o component atualiza
  /*  useEffect(() => {
    console.log('componentDiUpdate');
  }); */

  // componentDiMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // com dependência- executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1 ' + counter, 'C2 ' + counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
