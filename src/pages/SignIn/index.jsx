import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../config/FirebaseAPI';
import { AuthSignIn } from '../../utilities/AuthController';

const SignIn = ({ navigation, formOpacity }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInHandler = async () => {
    await signInWithEmailAndPassword(Auth, email, password);
    navigation.navigate('MainApp');
  };

  return (
    <Animated.View style={[styles.formContainer, { opacity: formOpacity }]}>
      <Gap height={20} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selamat Datang,</Text>
        <Text style={styles.subtitle}>Silakan Masuk atau Login</Text>
      </View>

      <Gap height={24} />
      <TextInput
        style={styles.input}
        placeholder="Masukan Nama Email"
        placeholderTextColor="#ccc"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Gap height={20} />
      <TextInput
        style={styles.input}
        placeholder="Kata Sandi"
        secureTextEntry
        placeholderTextColor="#ccc"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      
      <Gap height={24} />
      <Button title="Sign-In" filled onPress={SignInHandler} />
      <Button title="Sign-Up" onPress={() => navigation.navigate('SignUp')} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 120 + 60,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    width: '100%',
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#eee',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#5D8770',
    color: '#fff',
  },
});

export default SignIn;