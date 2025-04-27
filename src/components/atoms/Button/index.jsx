import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress, filled, detect }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        filled ? styles.filled : styles.outline,
        detect && styles.detectButton,
      ]}
    >
      <Text
        style={[
          styles.text,
          filled ? styles.filledText : styles.outlineText,
          detect && styles.detectButtonText,
        ]}
      >
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
    justifyContent: 'center',
    marginVertical: 6,
    width: 300,
    height: 40,
  },
  filled: {
    backgroundColor: '#63D9B3',
  },
  outline: {
    backgroundColor: '#CFE3DB',
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
  // Style baru buat Deteksi
  detectButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detectButtonText: {
    color: '#8C8C8C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
