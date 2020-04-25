/* eslint-disable react/prop-types */
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import RefreshButton from './Icons/RefreshIcon';
import ThemeContext from '../ThemeContext';

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#F7874C',
  },
});

export default function RandomButton({ loading, onPress }) {
  const [animation] = useState(new Animated.Value(0));
  const { theme } = useContext(ThemeContext);

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, { toValue: 1, duration: 1500 }),
    ).start();
  };

  const stopAnimation = () => {
    Animated.loop(
      Animated.timing(animation, { toValue: 1, duration: 1500 }),
    ).stop();
  };

  const refresh = () => {
    onPress();
  };

  useEffect(() => {
    if (loading) startAnimation();
    else stopAnimation();
  }, [loading]);


  return (
    <LinearGradient
      colors={theme === 'light'
        ? ['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']
        : ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
      style={{
        position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '20%',
      }}
    >
      <TouchableOpacity onPress={() => refresh()} style={styles.button}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <RefreshButton />
        </Animated.View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
