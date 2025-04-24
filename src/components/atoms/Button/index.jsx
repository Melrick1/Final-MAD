// src/components/atoms/Button/index.jsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress, filled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, filled ? styles.filled : styles.outline]}>
      <Text style={[styles.text, filled ? styles.filledText : styles.outlineText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical: 6,
    width: 300,
    height: 40,
  },
  filled: {
    backgroundColor: '#63D9B3', // warna hijau dari desain
  },
  outline: {
    backgroundColor: '#CFE3DB', // warna abu
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    height: 25,
  },
  filledText: {
    color: '#fff',
  },
  outlineText: {
    color: '#000',
  },
});

export default Button;
