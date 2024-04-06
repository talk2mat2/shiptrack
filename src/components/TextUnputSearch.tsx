import React, {Fragment} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants';

interface pageProps {
  title?: string;
  secured?: boolean;
  value?: string;
  errorMessage?: string;
  onChangeText?: (txt: string) => void;
}
const TextInputSearch: React.FC<pageProps> = ({
  secured = false,
  value = '',
  onChangeText = () => {},
  errorMessage = '',
}) => {
  return (
    <Fragment>
      <View
        style={[
          styles.container,
          {
            borderWidth: 0.5,
            borderColor: errorMessage ? colors.error : 'transparent',
          },
        ]}>
        <Image
          style={styles.SearchIcon}
          source={require('../../assets/icons/search.png')}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          placeholder="Search"
          secureTextEntry={secured}
          style={styles.input}
        />
      </View>
      <Text style={styles.error}>{errorMessage}</Text>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ritualCyan,
flexDirection:"row",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  SearchIcon: {},
  error: {
    fontSize: 12,
    color: colors.error,
    fontFamily: 'SF Pro Display Regular',
  },
  input: {
    letterSpacing: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    paddingVertical: 5,
    marginVertical: 0,
  },
  title: {
    fontSize: 11,
    fontFamily: 'SF Pro Display Regular',
  },
});
export default TextInputSearch;
