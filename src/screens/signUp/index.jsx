import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Signup = ({navigation}) => {
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
    } else if (!user.password.match(check)) {
      setErrorMessage('Password should contain numbers');
    } else if (user.username == '') {
      setErrorMessage('Username is required');
    } else {
      navigation.navigate('tabNavigation');
    }
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <View style={{marginTop: 30}}>
        <Text style={{...style.heading, color: colors.heading}}>Sign Up</Text>
      </View>
      <Image
        style={{position: 'absolute', top: 55, right: 30}}
        source={require('../../images/dot-image.png')}
      />
      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <Text style={{...style.subHeading, color: colors.heading}}>
          Create Account
        </Text>
        <Text style={style.para}>
          Please Inter your Informatioin and create your account
        </Text>
        <View style={{paddingTop: 30, gap: 20}}>
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
            onChange={e => inputField('username', e)}
            keyboardType="username"
            textType="username"
            secureEntry={false}
            placeholder="Enter your username"
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
            Forgot Password?
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
        <Button clicked={() => Submit()} text="Sign Up" />
        <View style={{marginTop: 30, gap: 20, alignItems: 'center'}}>
          <Text style={style.text}>Sign Up with</Text>
          <TouchableOpacity activeOpacity={1} style={style.iconButton}>
            <Image source={require('../../images/google-icon.png')} />
          </TouchableOpacity>
          <Text style={style.linkText}>
            Have an Account ?
            <Pressable
              onPress={() => {
                navigation.navigate('signIn');
              }}>
              <Text style={style.span}> Sign In</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;
