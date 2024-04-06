import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  UIManager,
  Platform,
  LayoutAnimation,
  Image,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import ShipCards from './shipCads';
import {colors} from '../constants';
import BtnIcon from './btnIcon';
import {shipType} from '../heloers/types';

interface pageProps {
  item?: shipType;
}

export default function Accordion({item}: pageProps) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = React.useState(false);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleAccordion = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {type: 'easeIn', property: 'opacity'},
      update: {type: 'linear', springDamping: 0.3, duration: 250},
    });
    setOpened(!opened);
  };

  return (
    <View
      style={[
        styles.container,
        {marginBottom:8,
          borderWidth: selected ? 1 : 0,
          borderRadius: 10,
          paddingHorizontal: 10,
          borderColor: colors.primary,
        },
      ]}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <ShipCards item={item}
          setSelected={setSelected}
          selected={selected}
          onPress={toggleAccordion}
        />
      </TouchableWithoutFeedback>

      {opened && (
        <View style={[styles.content]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{marginLeft: '2%'}}>
              <Text style={[styles.subText, {color: colors.lightgrey2}]}>
                Origin
              </Text>
              <Text style={styles.header}>{item?.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.subText}>Dokki, 22 Nile St.</Text>
              </View>
            </View>
            <Image
              style={{marginHorizontal: 8}}
              source={require('../../assets/icons/right2.png')}
            />
            <View style={{marginLeft: '2%'}}>
              <Text style={[styles.subText, {color: colors.lightgrey2}]}>
                Destination
              </Text>
              <Text style={styles.header}>41785691423</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.subText}>Smoha, 22 max St.</Text>
              </View>
            </View>
          </View>

          <View style={styles.btnSection}>
            <View style={{width: 100}}>
              <BtnIcon
                icon={
                  <Image
                    style={{marginRight: 8}}
                    source={require('../../assets/icons/phone.png')}
                  />
                }
                titleColor={colors.white}
                title="Filter"
                bgColor={colors.primary3}
              />
            </View>
            <View style={{width: 140, marginLeft: 18}}>
              <BtnIcon
                icon={
                  <Image
                    style={{marginRight: 8}}
                    source={require('../../assets/icons/whatsapp.png')}
                  />
                }
                titleColor={colors.white}
                title="Add Scan"
                bgColor={colors.green1}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    opacity: 0.65,
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 'auto',
    width: '100%',
    paddingBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    fontFamily: 'SF Pro Display Regular',
  },
  subText: {
    fontSize: 11,
    color: colors.lightgrey,
    fontFamily: 'SF Pro Display Regular',
  },
  title: {},
  content: {
    marginTop: 8,
    width: '100%',
    height: 128,
    backgroundColor: colors.white,
  },
  container: {
    borderRadius: 6,
  },
});
