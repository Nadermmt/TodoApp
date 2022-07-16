import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootNavigation } from "./src/navigation";
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {styles} from "./AppStyles";

const App = () => {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              <RootNavigation/>
          </SafeAreaView>
      </Provider>
  );
};

export default App;
