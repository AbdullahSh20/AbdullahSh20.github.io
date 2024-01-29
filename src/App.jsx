import React from 'react';
import ConstructionIcon from './ConstructionIcon';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <ConstructionIcon />
      <h1 className="text-2xl font-bold">This site is undergoing an update</h1>
      <p>Please check back later for updates.</p>
    </div>
  );
}

export default App;