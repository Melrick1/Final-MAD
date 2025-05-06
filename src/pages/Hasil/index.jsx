import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Gap, ImageBox } from '../../components/atoms';
import MarkdownView from '../../components/molecules/MarkdownView';

const Hasil = ({ route, navigation}) => {
  const { image, analysisResult } = route.params || {};

  return (
    <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
            <Gap height={20} />
            <Text style={styles.title}>Hasil Deteksi</Text>
            <Gap height={20} />

            <ImageBox image={image} height={'350'}/>
            <Gap height={20} />
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.resultBox}>
                <Text style={styles.resultTitle}>Penjelasan :</Text>
                <Gap height={10} />
                <MarkdownView markdown={analysisResult} />
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CFE3DB',
    },
    topContainer: {
      alignItems: 'center',
      height: '50vh',
    },
    bottomContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    resultBox: {
      backgroundColor: '#90C89B',
      padding: 15,
      borderRadius: 10,
    },
    resultTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#1E3D2F',
    },
    resultText: {
      fontSize: 14,
      color: '#1E3D2F',
      textAlign: 'justify',
    },
});

export default Hasil;
