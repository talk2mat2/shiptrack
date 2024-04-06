import React from 'react';
import {
  StyleSheet,
  View,
  DimensionValue,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';
import Filtetags from './filterTags';
interface pageProps {
  closeModal?: () => void;
}
const FilterModal: React.FC<pageProps> = ({closeModal = () => {}}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.text, {color: colors.black, fontWeight: '900'}]}>
          Filters
        </Text>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:12}}>
        <Text style={styles.header}>SHIPMENT STATUSr</Text>
      </View>
      <View style={styles.tags}>
        <Filtetags status={"Received"}/>
        <Filtetags status={"Putaway"}/>
        <Filtetags status={"Delivered"}/>
        <Filtetags status={"Rejected"}/>
        <Filtetags status={"Lost"}/>
        <Filtetags status={"On Hold"}/>
      </View>
    </View>
  );
};
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 316,
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },tags:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:12
  },
  header: {
    fontSize: 13,
    fontWeight: '700',
    color:colors.dimgrey,
    fontFamily: 'SF Pro Display Regular',
  },
  text: {
    fontFamily: 'SF Pro Display Regular',
    color: colors.primary,
    fontSize: 17,
  },
});
export default FilterModal;
