import * as WebBrowser from 'expo-web-browser';

import React, { useContext, useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Circle, Line, Path} from 'react-native-svg';

import ThemeContext from '../ThemeContext';

export default function Poem ({poem, author, title, link}) {
    const {theme, setTheme} = useContext(ThemeContext)
    const [fontSize, setFontSize] = useState(18);
    const [themeStyles, setThemeStyles] = useState(styles);

    useEffect(() => {
        if(theme == "light") setThemeStyles(styles);
        else setThemeStyles(darkStyles)
    }, [theme])

    author.name = author.name.replace(/^\s+/g, '')
    return (
        <ScrollView style={{height: "100%"}}>
            <TouchableOpacity 
                style={{marginTop: 30, alignItems:"flex-end", paddingRight: 20, backgroundColor: "transparent"}}
                onPress={() => setTheme(theme=="light" ? "dark" : "light")}>
                {theme == "light"
                    ? <Svg width="32" height="32">
                        <Path 
                            fill="none" 
                            stroke="#000" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="5" 
                            d="M20.63,20a9,9,0,0,1-9.12-8.78A8.61,8.61,0,0,1,14.17,5,10.17,10.17,0,0,0,5,15,10.23,10.23,0,0,0,15.42,25,10.43,10.43,0,0,0,25,18.9,9.3,9.3,0,0,1,20.63,20Z"/>
                    </Svg>
                    : <Svg width="32" height="32">
                        <Circle cx="15" cy="15" r="5" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="15" x2="15" y1="5" y2="3" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="15" x2="15" y1="27" y2="25" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="5" x2="3" y1="15" y2="15" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="27" x2="25" y1="15" y2="15" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="7.93" x2="6.51" y1="22.07" y2="23.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="23.49" x2="22.07" y1="6.51" y2="7.93" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="22.07" x2="23.49" y1="22.07" y2="23.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                        <Line x1="6.51" x2="7.93" y1="6.51" y2="7.93" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
                    </Svg>
                }
            </TouchableOpacity>
            <View>
                <Text selectable style={themeStyles.title}>{'\n\n' + title}</Text>
                <Text onPress={() => WebBrowser.openBrowserAsync(author.url)} selectable style={themeStyles.author}>By {author.name}</Text>
            </View>

            <Text 
                selectable
                style={{...themeStyles.poem, fontSize}}> 
                {'\n' + poem +'\n\n'} 
            </Text>
            <Text 
                selectable
                onPress={() => WebBrowser.openBrowserAsync(link)}
                style={{...themeStyles.poem, color: "#ff8855"}}> 
                {'Link \n\n\n\n\n\n\n\n'} 
            </Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    title:{
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left", 
        fontSize: 21, 
        fontWeight: "bold"
    },
    author: {
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left",
        color: "#554444"
    },
    poem: {
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left", 
        fontFamily: "random-regular", 
        fontSize: 18,
    }
})

const darkStyles = StyleSheet.create({
    title:{
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left", 
        fontSize: 21, 
        fontWeight: "bold",
        color: "white"
    },
    author: {
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left",
        color: "white",
    },
    poem: {
        marginLeft: 30, 
        marginRight: 45, 
        textAlign:"left", 
        fontFamily: "random-regular", 
        fontSize: 18,
        color: "white"
    }
})