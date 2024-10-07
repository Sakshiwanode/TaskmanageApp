import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TaskList from './src/TaskList';
import AddTask from './src/AddTask';

const App = () => {
    return (
        <Provider store={store}>
            <AddTask />
            <TaskList />
        </Provider>
    );
};

export default App;
