import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LogoSplash } from '../../components/molecules';
import SignIn from '../SignIn';
import SplashAnimation from '../../utilities/SplashAnimations';

function SplashScreen({ navigation }) {
    const logoSize = 120;
    const topOffset = 60;
    const { logoY, logoTextOpacity, formOpacity } = SplashAnimation(logoSize, topOffset);

  return (
    <View style={styles.container}>
      <LogoSplash logoY={logoY} logoTextOpacity={logoTextOpacity} />
      <SignIn formOpacity={formOpacity} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D8770',
    padding: 20
  }
});

export default SplashScreen;