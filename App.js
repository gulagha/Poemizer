import * as Font from 'expo-font';

import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

import { Ionicons } from '@expo/vector-icons';
import RandomPoemScreen from './screens/RandomPoemScreen'
import { SplashScreen } from 'expo';
import ThemeContext from './ThemeContext'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [theme, setTheme] = useState("light")

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'random-regular': require('./assets/fonts/CrimsonText-Regular.ttf'),
          'random-bold': require('./assets/fonts/CrimsonText-Bold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        <View style={styles.container}>
          <RandomPoemScreen/>
        </View>
      </ThemeContext.Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
