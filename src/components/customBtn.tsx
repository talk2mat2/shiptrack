import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../constants';

interface btnProps {
  bgColor?: string;
  titleColor?: string;
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const CustomBtn: React.FC<btnProps> = ({
  bgColor = colors.white,
  titleColor = colors.primary,
  title = '',
  onPress = () => {},
  loading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={disabled ? () => {} : onPress}>
      <View style={[styles.contsiner, {backgroundColor: bgColor}]}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={[styles.txt, {color: titleColor}]}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contsiner: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'SF Pro Display Regular',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default CustomBtn;
