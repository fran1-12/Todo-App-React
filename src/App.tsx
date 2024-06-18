import React from 'react';
import TodoApp from './Todo';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <main>
        <TodoApp />
      </main>
    </div>
  );
};

export default App;
