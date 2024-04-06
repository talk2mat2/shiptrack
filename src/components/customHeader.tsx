import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants';

interface pageProps {
  onGoBack?: () => void;
}
const CustomHeader: React.FC<pageProps> = ({onGoBack = () => {}}) => {
  return (
    <View style={styles.contsiner}>
      <TouchableOpacity onPress={onGoBack}>
        <Image
          style={styles.left}
          source={require('../../assets/icons/Chevron.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contsiner: {
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  left: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: 7,
    marginVertical: 10,
  },
  text: {
    fontFamily: 'SF Pro Display Regular',
    color: colors.primary,
    fontSize: 17,
  },
});
export default CustomHeader;
