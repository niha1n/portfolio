import React, { useState, useEffect } from 'react';
import ScrollContainer from './components/ScrollContainer';
import { Logo } from './components/reusable/Logo';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetching data or preparing the component)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Logo/>
      ) : (
        <ScrollContainer />
      )}
    </>
  );
}

export default App;
