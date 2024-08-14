import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import style from './style';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import ScreenWrapper from '../../layout';
import {ScrollView} from 'react-native-gesture-handler';

const Signin = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [secureEntry, setsecureEntry] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3200);
  }, [errorMessage]);

  const inputField = (key, value) => {
    setUser({...user, [key]: value});
  };

  const Submit = () => {
    let regix =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (user == undefined) {
      setErrorMessage('First fill this Information');
    } else if (user.email == '') {
      setErrorMessage('Email is required');
    } else if (!regix.test(user.email)) {
      setErrorMessage('Email is not correct');
    } else if (user.password == '') {
      setErrorMessage('Password is required');
    } else if (user.password.length < 8) {
      setErrorMessage('Password should contain 8 letters');
    } else if (!user.password.match(check))
      setErrorMessage('Password should contain numbers');
    else {
      navigation.navigate('tabNavigation');
    }
  };

  return (
    <ScreenWrapper>
      <View style={{marginTop: 50}}>
        <Text style={{...style.heading, color: colors.heading}}>Sign In</Text>
      </View>
      <Image
        style={{position: 'absolute', top: 75, right: 30}}
        source={require('../../images/dot-image.png')}
      />
      <View style={{paddingHorizontal: 30, paddingVertical: 40}}>
        <Text style={{...style.subHeading, color: colors.heading}}>
          Welcome Back
        </Text>
        <Text style={style.para}>
          Please Inter your email address and password for Login
        </Text>
        <View style={{paddingTop: 40, gap: 30}}>
          <Input
            onSubmit={() => Submit()}
            onChange={e => inputField('email', e)}
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your email"
          />
          <Input
            onSubmit={() => Submit()}
            onChange={e => inputField('password', e)}
            textType="password"
            secureEntry={secureEntry}
            placeholder="Enter your password"
            Icon={
              secureEntry ? (
                <Pressable onPress={() => setsecureEntry(false)}>
                  <Feather size={25} name="eye-off" />
                </Pressable>
              ) : (
                <Pressable onPress={() => setsecureEntry(true)}>
                  <Feather size={25} name="eye" />
                </Pressable>
              )
            }
          />
          <Text style={{...style.forgetPassword, color: colors.heading}}>
            Forgot Password ?
          </Text>
        </View>
        <Text
          style={{
            color: 'red',
            alignSelf: 'center',
            marginTop: 15,
            fontSize: 15,
          }}>
          {errorMessage}
        </Text>
        <Button clicked={() => Submit()} text="Sign In" />
        <View style={{marginTop: 30, gap: 20, alignItems: 'center'}}>
          <Text style={style.text}>Sign In with</Text>
          <TouchableOpacity activeOpacity={1} style={style.iconButton}>
            <Image source={require('../../images/google-icon.png')} />
          </TouchableOpacity>
          <Text style={style.linkText}>
            Not Registrar Yet?
            <Pressable
              onPress={() => {
                navigation.navigate('signUp');
              }}>
              <Text style={style.span}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Signin;
