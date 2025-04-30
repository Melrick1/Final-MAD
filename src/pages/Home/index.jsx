import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button, Gap, UploadBox } from '../../components/atoms';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Gap height={30} />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Unggah foto hama dan serangga{'\n'}pada tanaman Anda di sini
        </Text>
        <Gap height={10} />
        <Text style={styles.subtitle}>
          Unggah foto tanaman Anda untuk membantu sistem mendeteksi jenis hama atau serangga,
          memahami dampak serangannya, serta memberikan panduan langkah-langkah penanganan
          yang efektif agar tanaman tetap sehat dan produktif.
        </Text>
      </View>

      <Gap height={30} />

      <UploadBox height={'25%'}/>

      <Gap height={60} />

      {/* Button Deteksi */}
      <View style={styles.buttonContainer}>
        <Button title="Deteksi" detect onPress={() => navigation.navigate('Hasil')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFE3DB',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B8F7A',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
    textAlign: 'justify',
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: '#15E7A1',
    borderRadius: 10,
    backgroundColor: '#CFE3DB',
    height: 182,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
    tintColor: '#7F7B7B',
  },
  uploadText: {
    color: '#7F7B7B',
    fontSize: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default Home;
