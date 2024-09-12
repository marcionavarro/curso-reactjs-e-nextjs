import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle'
  });
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(async () => {
    setState({
      result: null,
      error: null,
      status: 'peding'
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled'
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error'
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if(shouldRun){
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  const [reFetchData2, result2, error2, status2] = useAsync(fetchData, true);

  useEffect(() => {
    setTimeout(() => {
      reFetchData()
    }, 6000)
  },[reFetchData])

  useEffect(() => {
    console.log(result2)
  },[result2])

  function handleClick(){
    reFetchData();
  }

  if(status === 'idle'){
    return <pre>idle: Nada executando</pre>;
  }

  if(status === 'peding'){
    return <pre>peding: Loading...</pre>;
  }

  if(status === 'error'){
    return <pre>error: {error.message}</pre>;
  }

  if(status === 'settled'){
    return <pre onClick={handleClick}>settled: {JSON.stringify(result, null, 2)}</pre>;
  }

};
