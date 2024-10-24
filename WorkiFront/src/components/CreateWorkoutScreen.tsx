import React from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './CreateWorkoutScreenStyles';

const CreateWorkoutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Workout</Text>
      <TextInput style={styles.input} placeholder="Exercise Name" />
      <TextInput style={styles.input} placeholder="Duration (seconds)" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Break Time (seconds)" keyboardType="numeric" />
      <Button title="Add Exercise" onPress={() => {}} />
      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
            <Text>{item.duration} sec</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CreateWorkoutScreen;
