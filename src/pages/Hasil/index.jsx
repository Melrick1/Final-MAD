import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Gap, UploadBox } from '../../components/atoms';

const Hasil = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
            <Gap height={20} />
            <Text style={styles.title}>Hasil Deteksi</Text>
            <Gap height={20} />

            <UploadBox height={'350'}/>
            <Gap height={20} />
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.resultBox}>
                <Text style={styles.resultTitle}>Penjelasan :</Text>
                <Gap height={10} />
                <Text style={styles.resultText}>
                    Tipe Hama, Nama ilmiah Hama, Habitat, serta daerah tempat Hama.{"\n\n"}
                    Solusi Pembasmian dan Pencegahan.{"\n\n"}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    tellus tellus, hendrerit sit amet velit ut, ultrices tristique
                    velit. Phasellus quis arcu tortor. Curabitur odio tortor,
                    vulputate quis sem nec, iaculis dictum ante. Morbi tortor sem,
                    sagittis sed gravida in, porta ut velit.
                </Text>
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
