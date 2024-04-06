import React, {Fragment, useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../constants';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextInputSearch from '../../components/TextUnputSearch';
import BtnIcon from '../../components/btnIcon';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ShipCards from '../../components/shipCads';
import Accordion from '../../components/accordions';
import {appService} from '../../services/appservice';
import {shipType} from '../../heloers/types';
import FilterModal from '../../components/filterModal';
import { UserContext } from '../../../context/usercontext';

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<[shipType] | []>([]);
  const [modalVisible, setModalVisible] = useState(false);
    const userCtx = useContext(UserContext);

  const handleFectData = async () => {
    let payload = JSON.stringify({
      doctype: 'AWB',
      fields: ['*'],
      filters: {},
    });
    setLoading(true);
    await appService
      .fetch_list(payload)
      .then(res => {
        setLoading(false);
        if (res?.status == '200') {
          console.log(res?.data?.message);
          setData(res?.data?.message);
        }
      })
      .catch(err => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFectData();
  }, []);
  return (
    <Fragment>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Pressable style={{flex: 1}} onPress={() => setModalVisible(false)}>
            <View style={{flex: 1}}></View>
          </Pressable>
          <FilterModal closeModal={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Header />
      <View style={styles.container}>
        <View style={{marginTop: 12}}>
          <Text style={styles.subText}>Hello,</Text>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={styles.header}>{userCtx.user?.full_name}</Text>
        </View>
        <View style={{marginTop: 12}}>
          <TextInputSearch />
        </View>
        <View style={styles.btnSection}>
          <View style={{width: '45%'}}>
            <BtnIcon
              onPress={() => setModalVisible(true)}
              icon={
                <Image
                  style={{marginRight: 8}}
                  source={require('../../../assets/icons/filter.png')}
                />
              }
              titleColor={colors.titualCyan2}
              title="Filter"
            />
          </View>
          <View style={{width: '45%'}}>
            <BtnIcon
              icon={
                <Image
                  style={{marginRight: 8}}
                  source={require('../../../assets/icons/scan.png')}
                />
              }
              titleColor={colors.white}
              title="Add Scan"
              bgColor={colors.primary}
            />
          </View>
        </View>
        <View style={styles.listSection}>
          <View
            style={{
              marginTop: 24,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.subhHader}>Shipments</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <BouncyCheckbox
                innerIconStyle={{
                  borderRadius: 5,
                  borderColor: colors.lightgrey,
                  marginRight: 0,
                }}
                fillColor={colors.ritualCyan3}
                iconStyle={{borderRadius: 5, borderColor: colors.lightgrey}}
                onPress={(isChecked: boolean) => {}}
              />
              <Text style={styles.subText2}>Mark All</Text>
            </View>
          </View>
          <View style={{marginTop: 18, paddingBottom: 100}}>
            <FlatList
              data={data || []}
              renderItem={({item}) => <Accordion item={item} />}
              keyExtractor={item => item.name}
              style={{marginBottom: 100}}
              onRefresh={handleFectData}
              refreshing={loading}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'SF Pro Display Regular',
  },
  subhHader: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'SF Pro Display Regular',
  },
  listSection: {},
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  modalContainer: {},
  subText: {
    fontFamily: 'SF Pro Display Regular',
    opacity: 0.6,
  },
  subText2: {
    fontFamily: 'SF Pro Display Regular',
    fontWeight: '700',
    color: colors.primary,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    flex: 1,
  },
});
export default Dashboard;
