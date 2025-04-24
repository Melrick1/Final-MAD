import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, Image, View} from 'react-native';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

const SignUp = ({ navigation }) => {
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
      
      <TextInput placeholder="Masukan Nama Email" style={styles.input} placeholderTextColor="#ccc"/>
      <Gap height={20} />
      
      <TextInput
        placeholder="Kata Sandi" secureTextEntry style={styles.input} placeholderTextColor="#ccc"/>
      <Gap height={24} />
      
      <Button title="Sign Up" filled />
      <Gap height={24} />

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.loginLink}>Kembali ke Login</Text>
      </TouchableOpacity>
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
  signupButton: {
    backgroundColor: '#5BE2A4',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },  
});

export default SignUp;