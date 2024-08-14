import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button';
import {useTheme} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <View style={{height: '100%'}}>
      <View style={{position: 'relative'}}>
        <Image
          style={style.image}
          source={require('../../images/splash-image-2.png')}
        />
        <Image source={require('../../images/splash-image-1.png')} />
      </View>
      <View style={style.container}>
        <View style={{...style.contentContainer , backgroundColor:colors.background}}>
          <Image style={style.logo} source={require('../../images/Logo.png')} />

          <Text style={{...style.heading , color: colors.heading }}>Building Better Workplaces</Text>
          <Text style={style.text}>
            Create a unique emotional story that describes better than words
          </Text>
          <Button
            clicked={() => navigation.navigate('slider')}
            text="Get Started"
          />
        </View>
      </View>
    </View>
  );
};

export default Splash;
