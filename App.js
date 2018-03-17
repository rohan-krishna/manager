/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCvHRFEBwRfqp2SVbt9F5liRqB9RvdQMKg",
      authDomain: "manager-d2c17.firebaseapp.com",
      databaseURL: "https://manager-d2c17.firebaseio.com",
      projectId: "manager-d2c17",
      storageBucket: "",
      messagingSenderId: "682510177301"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware((ReduxThunk)))}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
