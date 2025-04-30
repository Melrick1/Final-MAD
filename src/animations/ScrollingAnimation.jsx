import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

function ScrollingAnimation(halfWidth, durationPerPixel) {
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = () => {
        translateX.setValue(0);
        Animated.timing(translateX, {
            toValue: -halfWidth,
            duration: halfWidth * durationPerPixel,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) animate();
        });
        };

        animate();
    }, [halfWidth, durationPerPixel, translateX]);

    return translateX;
};

export default ScrollingAnimation;