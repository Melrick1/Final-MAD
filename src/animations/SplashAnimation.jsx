import { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

function SplashAnimation(logoSize, topOffset) {
  const logoY = useRef(
    new Animated.Value((height - logoSize) / 2.5)
  ).current;

  const logoTextOpacity = useRef(
    new Animated.Value(1)
  ).current;

  const formOpacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(logoY, {
          toValue: topOffset,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(logoTextOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        })
      ])
    ]).start(() => {
      Animated.timing(formOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      }).start();
    });
  }, [logoY, logoTextOpacity, formOpacity]);

  return { logoY, logoTextOpacity, formOpacity };
}

export default SplashAnimation;