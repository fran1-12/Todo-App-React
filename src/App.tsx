import React from 'react';
import TodoApp from './Todo';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <main>
        <TodoApp />
      </main>
    </div>
  );
};

export default App;
