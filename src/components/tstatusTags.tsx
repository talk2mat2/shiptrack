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

const StatusTags: React.FC<pageProps> = ({status = ''}) => {
  return (
    <View
      style={[
        {
          padding: 6,
          paddingHorizontal: 8,
          backgroundColor:
            status == 'RECEIVED' || 'New ShipmentTT'
              ? colors.primary2
              : status == 'ERROR'
              ? colors.error2
              : status == 'Delivered'
              ? colors.success
              : status == 'CANCELED'
              ? colors.ritualCyan4
              : status == 'On Hold'
              ? colors.warning
              : '',
        },
      ]}>
      <Text
        style={[
          styles.txt,
          {
            color:
              status == 'RECEIVED' || 'New ShipmentTT'
                ? colors.primary
                : status == 'ERROR'
                ? colors.error3
                : status == 'Delivered'
                ? colors.success2
                : status == 'CANCELED'
                ? colors.lightgrey2
                : status == 'On Hold'
                ? colors.warning2
                : '',
          },
        ]}>
        {status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 11,
  },
});
export default StatusTags;
