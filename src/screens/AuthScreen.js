import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  View,
} from 'react-native';
import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import LOGIN from '../graphql/query/auth';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/shared/Card';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation, {loading, error, data}] = useMutation(LOGIN, {
    onCompleted({login}) {
      console.log('our data login is ::', login.payload.token);
      AsyncStorage.setItem('@vibe/token', login.payload.token);
    },
  });

  console.log('our data jwt:::', data, error);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#1DA1F2']}
        style={styles.linearGradient}>
        <Card style={styles.card}>
          <ScrollView>
            <TextInput
              style={styles.input}
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              autoCapitalize="none"
              errorMessage="Please enter a valid email address."
              value={email}
              placeholder="email"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <TextInput
              style={styles.input}
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              minLength={5}
              required
              autoCapitalize="none"
              errorMessage="Please enter a valid password."
              value={password}
              placeholder="password"
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <View style={styles.buttonContainer}>
              <Button
                title={loading ? '...' : 'login'}
                onPress={() => {
                  console.log('email & password:', email, password);
                  console.log('login declencheee');
                  loginMutation({
                    variables: {
                      email,
                      password,
                    },
                  });
                }}
              />
            </View>
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
  input: {
    backgroundColor: '#F5F8FA',
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#E1E8ED',
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 50,
  },
});

export default AuthScreen;
