import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SigninForm from './components/SigninForm';

export default class App extends React.Component {
  componentDidMount() {
     // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBLrf56WEGbW_GZ5elhuyMmJz_ylQBFAX0",
      authDomain: "one-time-password-83c5f.firebaseapp.com",
      databaseURL: "https://one-time-password-83c5f.firebaseio.com",
      projectId: "one-time-password-83c5f",
      storageBucket: "one-time-password-83c5f.appspot.com",
      messagingSenderId: "105760612208"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
