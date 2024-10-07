import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (taskName.trim()) {
            dispatch(addTask(taskName));
            setTaskName('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task Managing App</Text>
            <TextInput
                value={taskName}
                onChangeText={setTaskName}
                placeholder="Add a new task"
                style={styles.input}
            />
            <Button title="Add Task" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30, 
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default AddTask;
