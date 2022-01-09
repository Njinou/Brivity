/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ItemComponent from './src/components/common/item/ItemComponent';
import ListItemsComponent from './src/components/common/list/ListItemsComponent';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ListItemsComponent data={[{id:1,name:"Nitcheu"},{id:2,name:"Mbouendeu"},{id:3,name:"Mbouend"},{id:4,name:"Mbouende"},{id:5,name:"Mboue"},{id:6,name:"Mbouendeu"}
    
    ,{id:7,name:"Mbouende"},{id:8,name:"Mboue"},{id:9,name:"Mbouendeu"},
    
    {id:10,name:"Mbouende"},{id:11,name:"Mboue"},{id:12,name:"Mbouendeu"}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
