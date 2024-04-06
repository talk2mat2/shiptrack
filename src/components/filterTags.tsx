import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';

type statusType =
  | 'RECEIVED'
  | 'ERROR'
  | 'CANCELED'
  | 'Delivered'
  | 'On Hold'
  | ''
  | any;

interface pageProps {
  status: statusType;
}

const Filtetags: React.FC<pageProps> = ({status = ''}) => {
  return (
    <View
      style={[
        {
          margin: 6,
          padding: 6,
          paddingHorizontal: 8,
          backgroundColor: colors.ritualCyan4,
        },
      ]}>
      <Text
        style={[
          styles.txt,
          {
            color: colors.lightgrey2,
          },
        ]}>
        {status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
  },
});
export default Filtetags;
