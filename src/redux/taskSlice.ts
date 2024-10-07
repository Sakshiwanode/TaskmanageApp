import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    name: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = {
                id: Date.now(),
                name: action.payload,
            };
            state.tasks.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action: PayloadAction<{ id: number; name: string }>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index].name = action.payload.name;
            }
        },
    },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
