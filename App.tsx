import React from 'react';
import { SafeAreaView } from 'react-native';
import {styles} from "./App";
import { RootNavigation } from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation/>
    </SafeAreaView>
  );
};

export default App;
