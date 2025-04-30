import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import ScrollingGallery from '../../components/molecules/ScrollingGallery'
import ContactProfile from '../../components/atoms/ContactProfile';

function About() {
    return (
      <ScrollView contentContainerStyle={Styles.container}>
        <ScrollingGallery />
        
        <View style={Styles. aboutContainer}>
          <Text style={Styles.heading}>Tentang Kami</Text>
          <Text style={Styles.paragraph}>
            Selamat datang di Aplikasi Deteksi Hama dan Serangga! Aplikasi ini dikembangkan oleh Hendy, Audrey, dan Rezza, dengan dukungan dari Universitas Klabat, sebagai solusi berbasis AI untuk membantu para petani dalam mengidentifikasi hama dan serangga yang dapat merusak tanaman.
          </Text>
          <Text style={Styles.paragraph}>
            Dengan menggunakan teknologi AI Gemini, aplikasi ini mampu mendeteksi jenis hama dan serangga hanya melalui gambar yang diambil oleh pengguna. Sistem ini dirancang khusus untuk tromoh dan lemak Maeva, agar lebih mudah dalam mengambil tindakan pencegahan dan penanganan hama secara efektif.
          </Text>
          <Text style={Styles.paragraph}>
            Kami berharap inovasi ini dapat memberikan manfaat bagi para petani dan masyarakat luas dalam meningkatkan produktivitas pertanian. Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami!
          </Text>
          <Text style={[Styles.paragraph, Styles.signature]}>Terima kasih telah menggunakan layanan kami. 🚀</Text>
        </View>

        <View style={Styles.contactUs}>
          <Text style={Styles.contactHeading}>Our Contacts :</Text>

          <View style={Styles.contactContainer}>
            <ContactProfile name={'Hendy'} email={'s22110058@student.unklab.ac.id'}/>
            <ContactProfile name={'Audrey'} email={'s22210181@student.unklab.ac.id'}/>
            <ContactProfile name={'Rezza'} email={'s22210345@student.unklab.ac.id'}/>
          </View>
        </View>
      </ScrollView>
    );
}
  
const Styles = StyleSheet.create({
    container: {
      backgroundColor: '#E6F9DA',
    },
    aboutContainer: {
      padding: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    paragraph: {
      fontSize: 16,
      marginBottom: 12,
      lineHeight: 22,
    },
    signature: {
      textAlign: 'center',
      marginTop: 16,
      fontStyle: 'italic',
    },
    contactUs: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      marginTop: 24,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    contactHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    contactContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-between',
    },
    contactInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
});

export default About;