import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, Image, View} from 'react-native';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import { AuthSignUp } from '../../utilities/AuthController';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUpHandler = async () => {
    AuthSignUp(name, email, password);
  }

  return (
    <View style={styles.container}>
      <Gap height={40} />
      <Image source={require('../../assets/images/Hama.png')} style={styles.logo} />
      <Gap height={20} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Selamat Datang,</Text>
        <Text style={styles.subtitle}>Silakan Masuk atau Login</Text>
      </View>
      <Gap height={20} />

      <TextInput
        style={styles.input}
        placeholder="Masukan Nama"
        placeholderTextColor="#ccc"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Gap height={20} />

      <TextInput
        style={styles.input}
        placeholder="Masukan Email Anda"
        placeholderTextColor="#ccc"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Gap height={20} />


      <TextInput
        placeholder="Kata Sandi" secureTextEntry
        style={styles.input}
        placeholderTextColor="#ccc"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Gap height={24}/>

      <Button title="Sign Up" filled  onPress={SignUpHandler}/>
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