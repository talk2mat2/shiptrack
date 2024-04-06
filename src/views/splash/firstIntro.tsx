import React, {useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  View,
  Easing,
  Dimensions,
} from 'react-native';
import {colors} from '../../constants';

interface PageProps {
  handleNext?: () => void;
}
const FirstIntro: React.FC<PageProps> = ({handleNext = () => {}}) => {
  const [scale] = useState(new Animated.Value(0));
  const animatedValue = new Animated.Value(0);
  const [showLogo, setShowLogo] = React.useState(true);
  const moveXy = new Animated.Value(0);
  const deviceHight = Dimensions.get('window').height;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0.3,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start(() => {
      setTimeout(() => {
        handleNext();
      }, 2800);
      setTimeout(() => {
        Animated.timing(moveXy, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.ease,
        }).start();
      }, 2000);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          style={{
            height: 38.15,
            width: 28.15,
            resizeMode: 'contain',
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.3],
                }),
              },
              {
                translateY: moveXy.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -deviceHight / 0.5],
                }),
              },
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 10],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 10],
                }),
              },
              {
                scaleY: moveXy.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 20],
                }),
              },
              {
                scaleX: moveXy.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 20],
                }),
              },
              {
                skewX: moveXy.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '250deg'],
                }),
              },
            ],
          }}
          source={require('../../../assets/logogreen.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

});
export default FirstIntro;
