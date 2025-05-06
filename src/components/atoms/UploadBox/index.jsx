import React, { useState } from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import { Placeholder } from '../../../assets/images';
import { showMessage } from 'react-native-flash-message';

function UploadBox({ height, image, setImage }) {
    const getImage = async () => {
        const result = await launchImageLibrary({
          quality: 0.5,
          includeBase64: true,
          mediaType: 'photo',
        });

        if (result.didCancel) {
          showMessage({
            message: 'Pilihan foto dibatalkan',
            type: 'warning',
          });
        } else {
          const assets = result.assets[0];
          const base64 = `data:${assets.type};base64, ${assets.base64}`;
          const source = {uri: base64};
          setImage(source);
        }
    };

    return (
        <TouchableOpacity style={[styles.uploadBox, { height }]} onPress={getImage}>
            <Image source={image} style={styles.uploadIcon} />
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
        overflow: 'hidden',
    },
    uploadIcon: {
        width: '100%',
        height: '100%',
    },
    uploadText: {
        color: '#7F7B7B',
        fontSize: 10,
    },
});

export default UploadBox;
