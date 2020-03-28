import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';

import Poem from '../components/Poem';
import RandomButton from '../components/RandomButton';
import axios from 'axios'

export default function RandomPoemScreen() {
    const [poems, setPoems] = useState([])
    const [counter, setCounter] = useState(1)
    const [loading, setLoading] = useState(false)

    const getPoems = () => {
        setLoading(true);
        axios.get('https://www.poemist.com/api/v1/randompoems')
            .then(response => {
                setPoems([...response.data])
                setLoading(false);
            }).catch(error => {
                alert(error);
                setLoading(false);   
            })
    }

    onPress = () => {
        if (counter > 1) {
            setLoading(true);
            setCounter(counter - 1)
            setLoading(false);
        } else getPoems();
    }

    useEffect(() => {
        getPoems();
    }, []);

    useEffect(() => {
        setCounter(poems.length)
    }, [loading])

    return (
        <View style={styles.pageWrapper}>
            <View style={styles.contentWrapper}>
                { poems.length && !loading && poems[counter - 1]
                    ? <Poem 
                        title={poems[counter - 1].title} 
                        link={poems[counter - 1 ].url} 
                        author={{name: poems[counter -1].poet.name, url: poems[counter -1].poet.url}} 
                        poem={poems[counter - 1].content}/>
                    : <View style={styles.loading}>
                        <Text style={{color: "black", fontFamily: "random-regular"}}> Loading </Text>
                    </View>}
            </View>
  
            <RandomButton loading={loading} onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end"
    },
    contentWrapper: {
        marginTop: 0
    },
    loading: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    buttonWrapper: {
        width: "100%",
        height: 120,
        justifyContent: "center",
        alignItems: "center"
    }
})