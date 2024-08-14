import React, {useState} from 'react';
import ScreenWrapper from '../../layout';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import ImageCircle from '../../components/imageCircle';
import {ProgressBar} from 'react-native-paper';
import Seachbar from '../../components/searchBar';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const button = ['Favourites', 'Recents', 'All'];
  const {colors} = useTheme();

  const project = [
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
    {
      heading: 'Utility Dashboard',
      text: 'Design',
      image: [
        require('../../images/people-image.png'),
        require('../../images/people-image.png'),
      ],
      taskComplete: '10/20',
      percent: 0.5,
    },
  ];

  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 24}}>
        <Seachbar />
        <View style={{flexDirection: 'row', gap: 10}}>
          {button.map((text, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setActiveIndex(index)}
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderWidth: activeIndex == index ? 1 : null,
                  borderRadius: 16,
                  borderColor: '#756EF3',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: activeIndex == index ? colors.heading : '#848A94',
                    fontWeight: '500',
                  }}>
                  {text}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginVertical: 25}}>
          <View style={{gap: 15}}>
            {project.map((object, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 310,
                    height: 93,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.borderOutline,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: colors.heading,
                          fontWeight: '500',
                        }}>
                        {object.heading}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#848A94',
                        }}>
                        {object.text}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor:
                          index % 3 == 0
                            ? '#B1D199'
                            : index % 2 == 0
                            ? '#63B4FF'
                            : '#FFB35A',
                        width: 46,
                        height: 18,
                        borderRadius: 9,
                      }}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 12,
                          color: colors.heading,
                          fontWeight: 400,
                        }}>
                        {object.taskComplete}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 20,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      {object.image.map((url, index) => {
                        return <ImageCircle key={index} source={url} />;
                      })}
                    </View>
                    <ProgressBar
                      style={{
                        width: 180,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor:
                          index % 3 == 0
                            ? '#ECF4E5'
                            : index % 2 == 0
                            ? '#E8EDF4'
                            : '#F4F0E4',
                      }}
                      progress={object.percent}
                      color={
                        index % 3 == 0
                          ? '#B1D199'
                          : index % 2 == 0
                          ? '#63B4FF'
                          : '#FFB35A'
                      }
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Projects;
