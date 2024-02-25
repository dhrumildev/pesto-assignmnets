import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import TodoList from './components/ToDoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
