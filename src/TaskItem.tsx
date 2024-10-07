import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { deleteTask, editTask } from './redux/taskSlice';

const TaskItem = ({ task }: any) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState(task.name);

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTask({ id: task.id, name: newTaskName }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <View style={styles.taskItem}>
            {isEditing ? (
                <TextInput
                    value={newTaskName}
                    onChangeText={setNewTaskName}
                    style={styles.input}
                />
            ) : (
                <Text style={styles.taskText}>{task.name}</Text>
            )}
            <Button title={isEditing ? 'Save' : 'Edit'} onPress={handleEdit} />
            <Button title="Delete" onPress={handleDelete} />
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskText: {
        fontSize: 18,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginRight: 10,
    },
});

export default TaskItem;
