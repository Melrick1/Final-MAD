import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({height}) => {
  return <View style={styles.gap(height)} />;
};

export default Gap;

const styles = StyleSheet.create({
  gap: height => ({
    height: height,
  }),
});
