import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function ImageBox({ height, image }) {

    return (
        <View style={[styles.uploadBox, { height }]}>
            <Image source={image} style={styles.uploadIcon} />
        </View>
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

export default ImageBox;
