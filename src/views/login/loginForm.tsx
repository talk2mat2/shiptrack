import React, {Fragment, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import {colors} from '../../constants';
import CustomHeader from '../../components/customHeader';
import CustomBtn from '../../components/customBtn';
import CustomTextInput from '../../components/CustomTextUnput';
import {Formik} from 'formik';
import {loginSchema} from '../../heloers/validationSchema';
import {appService} from '../../services/appservice';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {UserContext} from '../../../context/usercontext';

interface pageProps {
  closeModal?: () => void;
  navigate?: () => void;
}

const LoginForm: React.FC<pageProps> = ({
  closeModal = () => {},
  navigate = () => {},
}) => {
  const [loading, setLoading] = React.useState(false);
  const userCtx = useContext(UserContext);

  const handleLogin = async (payload: {}) => {
    Keyboard.dismiss();
    setLoading(true);
    await appService
      .login(payload)
      .then(res => {
        console.log(res?.message);
        setLoading(false);
        console.log(res?.status);
        if (res?.status == '200') {
          userCtx?.setUser({full_name: res.data?.full_name});
          Alert.alert(res?.data?.message);
          setTimeout(() => {
            navigate();
          }, 1000);
        } else {
          Alert.alert(res?.message || 'An error occured');
        }
        // console.log(res?.message);
      })
      .catch(err => {
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <CustomHeader onGoBack={closeModal} />
      <Formik
        validationSchema={loginSchema}
        initialValues={{pwd: '', usr: '', url: 'https://www.brandimic.com'}}
        onSubmit={values => handleLogin(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
        }) => (
          <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <ScrollView>
              <>
                <View style={{marginTop: 18}}>
                  <Text style={styles.subheader}>
                    Please enter your First, Last name and your {'\n'}phone
                    number in order to register
                  </Text>
                </View>
                <View style={{marginTop: 36}}>
                  <View style={{marginBottom: 31}}>
                    <CustomTextInput
                      errorMessage={errors.url}
                      value={values.url}
                      title="URL"
                    />
                  </View>
                  <View style={{marginBottom: 31}}>
                    <CustomTextInput
                      errorMessage={errors.usr}
                      value={values.usr}
                      title="Username / Email"
                      onChangeText={txt => setFieldValue('usr', txt)}
                    />
                  </View>
                  <View style={{marginBottom: 31}}>
                    <CustomTextInput
                      errorMessage={errors.pwd}
                      onChangeText={txt => setFieldValue('pwd', txt)}
                      value={values.pwd}
                      secured
                      title="Password"
                    />
                  </View>
                </View>
              </>
            </ScrollView>
            <View style={styles.btnSection}>
              <CustomBtn
                loading={loading}
                title="Login"
                onPress={handleSubmit}
                titleColor={colors.white}
                bgColor={colors.primary}
              />
            </View>
          </View>
        )}
      </Formik>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, paddingHorizontal: 16},
  header: {
    fontSize: 34,
    fontWeight: '800',
    fontFamily: 'SF Pro Display Regular',
  },
  btnSection: {
    marginTop: 'auto',
    marginBottom: 60,
  },
  subheader: {
    fontSize: 17,
    color: colors.lightgrey,
    lineHeight: 24,
    letterSpacing: -0.41,
  },
});
export default LoginForm;
