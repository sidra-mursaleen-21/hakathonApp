import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Screen} from 'react-native-screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Navigatingbox from '../../components/navigatingBox';
import Theme from '../../layout';
import ScreenWrapper from '../../layout';
import {useTheme} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <ScreenWrapper>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            marginVertical: 15,
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            color: colors.heading,
            fontWeight: 600,
            fontSize: 22,
          }}>
          Alvart Ainstain
        </Text>
        <Text
          style={{
            marginVertical: 8,
            color: '#848A94',
            fontSize: 16,
          }}>
          @albart.ainstain
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate('editProfile', {title: 'Edit Profile'})
          }>
          <View
            style={{
              width: 64,
              height: 35,
              borderColor: '#756EF3',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.heading, fontSize: 13}}>Edit</Text>
          </View>
        </Pressable>
        <View
          style={{
            width: '100%',
            paddingVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image source={colors.background == 'black'
                  ? require('../../images/timeSquareWhite.png') : require('../../images/timeSquare.png')} />
            <Text
              style={{color: colors.heading, fontSize: 22, fontWeight: 600}}>
              5
            </Text>
            <Text style={{color: '#848A94', fontSize: 13}}>On Going</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={
                colors.background == 'black'
                  ? require('../../images/tickSquareWhite.png')
                  : require('../../images/tickSquare.png')
              }
            />
            <Text
              style={{color: colors.heading, fontSize: 22, fontWeight: 600}}>
              25
            </Text>
            <Text style={{color: '#848A94', fontSize: 13}}>Total Complete</Text>
          </View>
        </View>
        <View style={{gap: 15, paddingVertical: 15}}>
          <Navigatingbox text="My Projects" icon="arrow" />
          <Navigatingbox text="Join a Team" icon="arrow" />
          <Navigatingbox
            text="Settings"
            icon="arrow"
            pressed={() => navigation.navigate('setting', {title: 'Settings'})}
          />
          <Navigatingbox text="My Task" icon="arrow" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Profile;
