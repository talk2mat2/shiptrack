import React, {Fragment} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants';

interface pageProps {
  title?: string;
  secured?: boolean;
  value?: string;
  errorMessage?: string;
  onChangeText?: (txt: string) => void;
}
const CustomTextInput: React.FC<pageProps> = ({
  title = '',
  secured = false,
  value = '',
  onChangeText = () => {},
  errorMessage = '',
}) => {
  return (
    <Fragment>
      <View style={[styles.container,{borderWidth:0.5,borderColor:errorMessage?colors.error:"transparent"}]}>
        <Text style={styles.title}>{title}</Text>
        <TextInput autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
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
    backgroundColor: colors.mediumgrey,

    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
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
export default CustomTextInput;
