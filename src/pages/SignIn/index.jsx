// src/pages/SignIn/index.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Gap height={100} />
      <Image source={require('../../assets/Hama.png')} style={styles.logo} />
      <Gap height={20} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selamat Datang,</Text>
        <Text style={styles.subtitle}>Silakan Masuk atau Login</Text>
      </View>
      <Gap height={24} />
      <TextInput style={styles.input} placeholder="Masukan Nama Email" />
      <Gap height={20} />
      <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry />
      <Gap height={24} />
      <Button title="Login" filled />
      <Button title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#5D8770',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
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
