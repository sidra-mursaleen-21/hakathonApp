import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconCircle from '../icon';

const Header = ({route, navigation}) => {
  const colors = useTheme().colors;

  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: colors.background,
      }}>
      {route.params.title == 'Home' ? (
        <IconCircle>
          <AntDesign color={colors.headerText} size={20} name="search1" />
        </IconCircle>
      ) : (
        <IconCircle
          onPress={() => navigation.goBack()}
          display={route.params.title == 'Profile' ? 'none' : 'flex'}>
          <AntDesign color={colors.headerText} size={20} name="left" />
        </IconCircle>
      )}
      <Text
        style={{
          flexGrow: 1,
          textAlign: 'center',
          color: colors.headerText,
          fontWeight: '500',
          fontSize: 18,
        }}>
        {route.params.title}
      </Text>
      <View style={{flexGrow: 1, alignItems: 'flex-end'}}>
        <Text
          style={{
            display: route.params.title == 'Edit Profile' ? 'block' : 'none',
            color: '#756EF3',
            fontSize: 14,
            fontWeight: 500,
          }}>
          Save
        </Text>
      </View>
    </View>
  );
};

export default Header;
