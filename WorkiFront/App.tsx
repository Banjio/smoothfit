import React from 'react';
import { SafeAreaView } from 'react-native';
import CreateWorkoutScreen from './src/components/CreateWorkoutScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CreateWorkoutScreen />
    </SafeAreaView>
  );
};

export default App;