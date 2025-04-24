import {StyleSheet,View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({placeholder}) => {
  return (
    <View>
      <Input placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    color: 'white',
  },
});
