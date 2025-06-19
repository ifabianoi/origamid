import React from 'react';

function App() {
  function useEffectCallback() {
    console.log('Mountou');
    return () => {
      console.log('Desmontou');
    };
  }

  React.useEffect(useEffectCallback, []);

  return <div>React</div>;
}

export default App;
