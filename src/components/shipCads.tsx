import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import StatusTags from './tstatusTags';
import { shipType } from '../heloers/types';

interface pageProps {
  onress?: () => void;
  onPress?: () => void;
  selected?: boolean;
 item?: shipType;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShipCards: React.FC<pageProps> = ({
  onPress,
  selected = false,
  setSelected,
  item
}) => {
  return (
    <View
      style={[
        styles.container,
        // {
        //   borderWidth: selected ? 1 : 0,
        //   borderRadius: 10,
        //   paddingHorizontal: 10,
        //   borderColor: colors.primary,
        // },
      ]}>
      <BouncyCheckbox
        innerIconStyle={{
          borderRadius: 5,
          borderColor: colors.titualCyan2,
        }}
        isChecked={selected}
        fillColor={colors.ritualCyan3}
        unfillColor={colors.white}
        iconStyle={{borderRadius: 3, borderColor: colors.lightgrey}}
        onPress={(isChecked: boolean) => {
          setSelected(isChecked);
        }}
      />

      <Image
        style={{marginRight: 8}}
        source={require('../../assets/icons/box1.png')}
      />
      <View style={{marginLeft: '2%'}}>
        <Text style={[styles.subText, {color: colors.lightgrey2}]}>{item?.sender}</Text>
        <Text style={styles.header}>{item?.name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.subText}>{item?.origin_city?.toLowerCase()}</Text>
          <Image
            style={{marginHorizontal: 8}}
            source={require('../../assets/icons/right.png')}
          />
          <Text style={styles.subText}>{item?.destination_city?.toLowerCase()}</Text>
        </View>
      </View>
      <View style={{marginLeft: '2%'}}>
        <StatusTags status={item?.status} />
      </View>
      <TouchableOpacity onPress={onPress} style={{marginLeft: 'auto'}}>
        <View
          style={{
            backgroundColor: colors.white,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: 20,
            borderRadius: 20,
          }}>
          <Image
            style={{marginRight: 8}}
            source={require('../../assets/icons/direction.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.ritualCyan4,
    alignItems: 'center',
    height: 67,
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    fontFamily: 'SF Pro Display Regular',
  },
  subText: {
    fontSize: 13,
    color: colors.lightgrey,
    fontFamily: 'SF Pro Display Regular',
  },
});
export default ShipCards;
