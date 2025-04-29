import React from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignIn = ({ navigation, formOpacity }) => {
  return (
    <Animated.View style={[styles.formContainer, { opacity: formOpacity }]}>        
      <Gap height={20} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selamat Datang,</Text>
        <Text style={styles.subtitle}>Silakan Masuk atau Login</Text>
      </View>
      <Gap height={24} />
      <TextInput style={styles.input} placeholder="Masukan Nama Email" placeholderTextColor="#ccc" />
      <Gap height={20} />
      <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry placeholderTextColor="#ccc" />
      <Gap height={24} />
      <Button title="Login" filled onPress={() => navigation.navigate('Home')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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