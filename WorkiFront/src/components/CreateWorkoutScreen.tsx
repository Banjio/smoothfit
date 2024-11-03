import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert} from 'react-native';
import styles from './CreateWorkoutScreenStyles';

class Exercise {
  name: string;
  duration: number; // in seconds
  breakTime: number; // in seconds

  constructor(name: string, duration: number, breakTime: number) {
    this.name = name;
    this.duration = duration;
    this.breakTime = breakTime;
  }

  describe(): string {
    return `${this.name}: ${this.duration} seconds, ${this.breakTime} seconds break`;
  }
}

const CreateWorkoutScreen: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [breakTime, setBreakTime] = useState('');

  const addExercise = () => {
    const newExercise = new Exercise(name, parseInt(duration), parseInt(breakTime));
    setExercises([...exercises, newExercise]);
    setName('');
    setDuration('');
    setBreakTime('');
  };

  const finalizeWorkout = () => {
    Alert.alert("Please sign in to upload workouts");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (seconds)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Break Time (seconds)"
        keyboardType="numeric"
        value={breakTime}
        onChangeText={setBreakTime}
      />
      <Button title="Add Exercise" onPress={addExercise} />
      <FlatList
        data={exercises}
        ListHeaderComponent={() => (
          <View style={styles.listHeader}> 
            <Text style={styles.listHeaderText}>Name</Text> 
            <Text style={styles.listHeaderText}>Duration</Text> 
            <Text style={styles.listHeaderText}>Break Time</Text> 
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
            <Text>{item.duration} sec</Text>
            <Text>{item.breakTime} sec</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    <Button title="Finalze Workout" onPress={finalizeWorkout}></Button>
    </View>
  );
};

export default CreateWorkoutScreen;
