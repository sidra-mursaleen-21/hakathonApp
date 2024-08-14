import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import { useTheme } from '@react-navigation/native';
import ImageCircle from '../imageCircle';

const ProjectCard = ({pressed , clicked }) => {
  const navigation = useNavigation();
  const colors = useTheme().colors

  return (
    <Pressable
      onPress={clicked}>
      <View
        style={{
          backgroundColor: pressed ? 'rgba(117, 110, 243, 0.86)' : colors.background,
          width: 260,
          height: 150,
          borderRadius: 16,
          paddingVertical: 30,
          paddingHorizontal: 20,
          borderWidth: pressed ? null : 1,
          borderColor: colors.borderOutline,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 700,
            lineHeight: 18,
            color: pressed ? '#fff' : colors.heading,
          }}>
          Application Design
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: pressed ? '#C5DAFD' : '#A0BAC5',
            marginVertical: 10,
          }}>
          UI Design Kit
        </Text>
        <View style={{flexDirection: 'row'}}>
          <ImageCircle source={require('../../images/people-image.png')} />
          <ImageCircle source={require('../../images/people-image.png')} />
          <ImageCircle source={require('../../images/people-image.png')} />
        </View>
      </View>
    </Pressable>
  );
};

export default ProjectCard;
