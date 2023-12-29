import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O Título do reducer',
  body: 'O paragrafo',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda', action.payload);
      return { ...state, title: action.payload };
    }

    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('NENHUMA ACTION ENCONTRADA');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-Br'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOISA' })}>
        Sem Action
      </button>
    </div>
  );
}

export default App;
