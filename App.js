/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
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

import AuthComponent from './src/components/common/auth/AuthComponent';
import ListItemsComponent from './src/components/common/list/ListItemsComponent';
import SignUpScreen from './src/components/auth/signup/SignUpScreen';
import Context from './src/context/Context';

const App: () => Node = () => {
  const [tokenContext,setTokenContext] = useState("token");
  const [isAuthenticatedContext,setIsAuthenticatedContext] = useState(false);

  const settingContextToken = (val) => setTokenContext(val);
  const setAuthenticationContext = ()  => setIsAuthenticatedContext(true);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Context.Provider value={{tokenContext,isAuthenticatedContext,settingContextToken,setAuthenticationContext}} >
        <SignUpScreen />
      </Context.Provider>
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
