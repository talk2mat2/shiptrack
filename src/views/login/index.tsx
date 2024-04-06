import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Animated,
  Modal,
  Text,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../constants';
import CustomBtn from '../../components/customBtn';
import LoginForm from './loginForm';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface PageProps {
  handleNext?: () => void;
  navigation?: NavigationProp<ParamListBase>;
}
const Login: React.FC<PageProps> = ({handleNext = () => {}, navigation}) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      delay: 1300,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        handleNext();
      }, 3000);
    });
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{paddingTop: 80}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, paddingTop: 60}}>
          <LoginForm
            navigate={() => {
              setModalVisible(false);
              navigation?.navigate('Dashboard');
            }}
            closeModal={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      {/* <SafeAreaView style={styles.safArea}> */}
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
        <Animated.View style={[styles.itemsSection, {opacity: fadeAnim}]}>
          <View>
            <Image source={require('../../../assets/icons/logowhite.png')} />
          </View>
          <View style={styles.btnSection}>
            <CustomBtn onPress={() => setModalVisible(true)} title="Login" />
          </View>
        </Animated.View>
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  safArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 66,
  },
  itemsSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    height: '48%',
  },
  btnSection: {
    width: '100%',
    marginTop: 'auto',
  },
});
export default Login;
