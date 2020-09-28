import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

import {useMutation, useApolloClient} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import LOGIN from '../../graphql/query/auth';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const client = useApolloClient();

  const [loginMutation, {loading, error, data}] = useMutation(LOGIN, {
    onCompleted({login}) {
      console.log('our data login is ::', login.payload.token);
      AsyncStorage.setItem('@vibe/token', login.payload.token);
      client.writeData({data: {isLoggedIn: true}});
    },
  });

  console.log('our data jwt:::', data, error);

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginForm;