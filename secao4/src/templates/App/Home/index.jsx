import { lazy, Suspense, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => {
  console.log('Component Carregando....');
  return import('./lazy-component');
};
const LazyComponent = lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC on screen' : 'LC is off'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};
