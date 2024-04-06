import React, {ReactNode} from 'react';
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
  icon?: ReactNode;
}

const BtnIcon: React.FC<btnProps> = ({
  bgColor = colors.ritualCyan,
  titleColor = colors.primary,
  title = '',
  onPress = () => {},
  loading = false,
  disabled = false,
  icon = null,
}) => {
  return (
    <TouchableOpacity onPress={disabled ? () => {} : onPress}>
      <View style={[styles.contsiner, {backgroundColor: bgColor}]}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <View style={styles.itemsSection}>
            {icon ? icon : null}
            <Text style={[styles.txt, {color: titleColor}]}>{title}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contsiner: {
    height: 44,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  itemsSection: {
    flexDirection: 'row',
    alignItems:"center"
  },
  txt: {
    fontFamily: 'SF Pro Display Regular',
    fontSize: 16,
    fontWeight: '400',
  },
});
export default BtnIcon;
