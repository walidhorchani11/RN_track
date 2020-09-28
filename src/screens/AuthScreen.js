import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/shared/Card';
import LoginForm from '../components/auth/LoginForm';

const AuthScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#1DA1F2']}
        style={styles.linearGradient}>
        <Card style={styles.card}>
          <ScrollView>
            <LoginForm />
          </ScrollView>
        </Card>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#C0C0C0',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxHeight: 400,
    width: '90%',
    maxWidth: 400,
  },
  linearGradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
