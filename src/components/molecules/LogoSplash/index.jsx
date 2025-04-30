import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

function LogoSplash({ logoY, logoTextOpacity }) {
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: logoY }] }]}
    >
      <Image source={require('../../../assets/images/Hama.png')} style={styles.logo} />
      <Animated.Text style={[styles.text, { opacity: logoTextOpacity }]}>HamaAI</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    text: {
        marginTop: 12,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default LogoSplash;