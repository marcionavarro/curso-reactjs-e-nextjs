import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const hanleClick = () => {
    const now = Date.now();
    while (Date.now() < now + 1500);
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <>
      <button onClick={hanleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '150px', width: '100px', overflow: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
