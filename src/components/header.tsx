import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants';

interface pageProps {
  onGoBack?: () => void;
}
const Header: React.FC<pageProps> = ({onGoBack = () => {}}) => {
  return (
    <View style={styles.contsiner}>
      <Image
        style={styles.avartar}
        source={require('../../assets/icons/avartar.png')}
      />
      <Image
        style={styles.logo}
        source={require('../../assets/icons/logo2.png')}
      />
      <View style={styles.bell}>
        <Image
          style={styles.notify}
          source={require('../../assets/icons/bell.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contsiner: {
    height: 64,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  bell: {
    backgroundColor: colors.mediumgrey,
    borderRadius:50
  },
  notify: {},
  logo: {
    height: 54,
    resizeMode: 'contain',
  },
  avartar: {},
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
export default Header;
