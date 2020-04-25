/* eslint-disable react/prop-types */
import * as WebBrowser from 'expo-web-browser';

import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DayIcon from './Icons/DayIcon';
import NightIcon from './Icons/NightIcon';
import ThemeContext from '../ThemeContext';

const commonStyles = {
  placement: {
    marginLeft: 30,
    marginRight: 45,
    textAlign: 'left',
  },
};

const styles = StyleSheet.create({
  title: {
    ...commonStyles.placement,
    marginTop: 16,
    fontSize: 21,
    fontWeight: 'bold',
  },
  author: {
    ...commonStyles.placement,
    color: '#554444',
  },
  poem: {
    ...commonStyles.placement,
    marginTop: 16,
    marginBottom: 32,
    fontFamily: 'random-regular',
    fontSize: 18,
  },
  link: {
    ...commonStyles.placement,
    marginTop: 16,
    marginBottom: 160,
    fontFamily: 'random-regular',
    fontSize: 18,
    color: '#ff8855',
  },
  themeSwitcher: {
    marginTop: 45,
    paddingRight: 20,
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
});

const darkStyles = StyleSheet.create({
  title: {
    ...styles.title,
    color: 'white',
  },
  author: {
    ...styles.author,
    color: 'white',
  },
  poem: {
    ...styles.poem,
    color: 'white',
  },
  link: {
    ...styles.link,
  },
  themeSwitcher: {
    ...styles.themeSwitcher,
  },
});

export default function Poem({
  poem, author, title, link,
}) {
  const { theme, storeTheme } = useContext(ThemeContext);
  // eslint-disable-next-line no-unused-vars
  const [fontSize, setFontSize] = useState(18);
  const [themeStyles, setThemeStyles] = useState(styles);

  useEffect(() => {
    if (theme === 'light') setThemeStyles(styles);
    else setThemeStyles(darkStyles);
  }, [theme]);

  const authorName = author.name.replace(/^\s+/g, '');

  return (
    <ScrollView style={{ height: '100%' }}>
      <TouchableOpacity
        style={styles.themeSwitcher}
        onPress={() => storeTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <NightIcon /> : <DayIcon />}
      </TouchableOpacity>
      <View>
        <Text selectable style={themeStyles.title}>
          {title}
        </Text>
        <Text
          onPress={() => WebBrowser.openBrowserAsync(author.url)}
          selectable
          style={themeStyles.author}
        >
          By
          {' '}
          {authorName}
        </Text>
      </View>

      <Text selectable style={{ ...themeStyles.poem, fontSize }}>
        {poem}
      </Text>
      <Text
        selectable
        onPress={() => WebBrowser.openBrowserAsync(link)}
        style={themeStyles.link}
      >
        Link
      </Text>
    </ScrollView>
  );
}
