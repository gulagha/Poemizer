import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';

import { LinearGradient } from 'expo-linear-gradient';
import ThemeContext from '../ThemeContext';

export default function RandomButton({ loading, onPress }) {

    const [buttonLoading, setButtonLoading] = useState(true);
    const [animation] = useState(new Animated.Value(0));
    const {theme} = useContext(ThemeContext);

    const rotation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const startAnimation = () => {
        Animated.loop(
            Animated.timing(animation, {toValue: 1, duration: 1500})
        ).start(); 
    }

    const stopAnimation = () => {
        Animated.loop(
            Animated.timing(animation, {toValue: 1, duration: 1500})
        ).stop(); 
    }

    const refresh = () => {
        onPress();
    }

    useEffect(() => {
        if(loading) startAnimation();
        else stopAnimation();
    }, [loading])


    return (
        <LinearGradient 
        colors={theme == "light" 
            ? ['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)','rgba(255,255,255,1)'] 
            : ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)','rgba(0,0,0,1)'] } 
        style={{position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height:"20%"}}>
            <TouchableOpacity onPress={() => refresh()} style={styles.button}>
                <Animated.View style={{transform: [{rotate: rotation}]}}>
                    <Svg width="32" height="32">
                        <Path 
                        d="M29.974 0c-1.12 0-2.026.908-2.026 2.026V6.75C25.664 3.984 23.032 0 15.788 0 7.084 0 0 7.082 0 15.788s7.084 15.788 15.788 15.788a15.77 15.77 0 0015.004-10.864 2.062 2.062 0 10-3.92-1.29 11.65 11.65 0 01-11.084 8.028c-6.432 0-11.664-5.232-11.664-11.664s5.232-11.64 11.664-11.64c4.554 0 7.084 2.834 9.148 5.806h-5.094a2.026 2.026 0 100 4.052h10.132A2.021 2.021 0 0032 11.982V2.026A2.027 2.027 0 0029.974 0z"
                        fill="#554444"/>
                    </Svg>
                </Animated.View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "#F7874C"
    }
})