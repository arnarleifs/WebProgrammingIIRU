import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentDegree } from './actions/weatherActions';
import Counter from './components/Counter';
import CounterWrapper from './components/CounterWrapper';
import Header from './components/Header';
import Name from './components/Name';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentDegree());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CounterWrapper>
        <Counter />
        <Name />
      </CounterWrapper>
    </>
  );
}

export default App;