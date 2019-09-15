/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginForm from './src/components/login-form'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

export default class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyA5rn9KL-jR8aNB02ksH86y5-8TnsabmJo",
      authDomain: "authentication-b0012.firebaseapp.com",
      databaseURL: "https://authentication-b0012.firebaseio.com",
      projectId: "authentication-b0012",
      storageBucket: "",
      messagingSenderId: "112660177360",
      appId: "1:112660177360:web:560bf99aa7ef6c8594d9d5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render(){
  const store=createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoginForm />
      </View>
    </Provider>  
  )}
};

const styles = StyleSheet.create({
  container: {
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


