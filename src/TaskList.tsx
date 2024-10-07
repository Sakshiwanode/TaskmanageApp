import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import TaskItem from './TaskItem';
import { RootState } from './redux/store';

const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Task List</Text>
            {tasks.length === 0 ? (
                <Text style={styles.noTasksText}>No tasks available</Text>
            ) : (
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <TaskItem task={item} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    noTasksText: {
        fontSize: 16,
        color: 'gray',
    },
});

export default TaskList;
