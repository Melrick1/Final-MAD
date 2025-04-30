import React from 'react';
import { View, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { Tomohon1, Tomohon2, Tomohon3, Tomohon4, Tomohon5 } from '../../../assets/images';
import { Gap } from '../../atoms';
import ScrollingAnimation from '../../../animations/ScrollingAnimation';

function ScrollingGallery() {
    const images = [Tomohon1, Tomohon2, Tomohon3, Tomohon4, Tomohon5];
    const filledImages = [...images, ...images];

    const itemWidth = Dimensions.get('window').width * 0.7 + 10; // card + margin
    const halfWidth = itemWidth * images.length;

    const translateX = ScrollingAnimation(halfWidth, 20);

    return (
        <View style={styles.gallery}>
            <Animated.View style={[styles.track, { transform: [{ translateX }] }]}>  
                {filledImages.map((src, i) => (
                <View key={i} style={styles.card}>
                    <Image source={src} style={styles.image} />
                </View>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
  gallery: {
    overflow: 'hidden',
    width: Dimensions.get('window').width,
    height: 200,
    backgroundColor: '#90C89B',
    justifyContent: 'center',
  },
  track: {
    flexDirection: 'row',
  },
  card: {
    width: Dimensions.get('window').width * 0.7,
    height: '95%',
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ScrollingGallery