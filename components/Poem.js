import * as WebBrowser from 'expo-web-browser';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default function Poem ({poem, author, title, link}) {
    author.name = author.name.replace(/^\s+/g, '')
    return (
        <ScrollView style={{height: "100%"}}>
            <View>
                <Text selectable style={styles.title}>{'\n\n\n' + title}</Text>
                <Text onPress={() => WebBrowser.openBrowserAsync(author.url)} selectable style={styles.author}>By {author.name}</Text>
            </View>
 
            <Text 
                selectable
                style={styles.poem}> 
                {'\n' + poem +'\n\n'} 
            </Text>
            <Text 
                selectable
                onPress={() => WebBrowser.openBrowserAsync(link)}
                style={{...styles.poem, color: "#ff8855"}}> 
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