import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

function UploadBox({ height }) {
  return (
    <TouchableOpacity style={[styles.uploadBox, { height }]}>
        <Image source={require('../../../assets/Placeholder.png')} style={styles.uploadIcon} />
        <Text style={styles.uploadText}>Select File</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    uploadBox: {
        borderWidth: 2,
        borderColor: '#15E7A1',
        borderRadius: 10,
        backgroundColor: '#CFE3DB',
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
});

export default UploadBox;
