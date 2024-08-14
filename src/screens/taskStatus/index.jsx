import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import ScreenWrapper from '../../layout';
import PieChart from 'react-native-pie-chart';
import {useTheme} from '@react-navigation/native';

const TaskStatus = () => {
  const {colors} = useTheme();
  const widthAndHeight = 200;
  const series = [200, 100, 180];
  const sliceColor = ['#B1D199', '#FFB35A', '#756EF3'];
  const progress = ['Completed', 'In Progress', 'To Do'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 20 , marginVertical:25 , gap:30 }}>
        <View style={{alignSelf: 'center'}}>
          <PieChart
            style={{position: 'absolute'}}
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.7}
            coverFill={colors.background}
          />
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontWeight: 500, fontSize: 30, color: colors.heading}}>
              65%
            </Text>
            <Text style={{fontSize: 18, color: '#848A94'}}>Complete</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#B1D199',
                borderRadius: 50,
              }}></View>
            <Text style={{fontSize: 14, color: colors.heading}}>Completed</Text>
          </View>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#FFB35A',
                borderRadius: 50,
              }}></View>
            <Text style={{fontSize: 14, color: colors.heading}}>Completed</Text>
          </View>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#756EF3',
                borderRadius: 50,
              }}></View>
            <Text style={{fontSize: 14, color: colors.heading}}>Completed</Text>
          </View>
        </View>
        <Text style={{fontWeight: 600, fontSize: 18, color: colors.heading}}>
          Monthly
        </Text>
        <View style={{gap: 20}}>
          {progress.map((text, index) => {
            return (
              <Pressable
                onPress={() => setActiveIndex(index)}
                key={index}
                style={{
                  height: 70,
                  borderWidth: 1,
                  borderColor:
                    activeIndex == index ? '#756EF3' : colors.borderOutline,
                  borderRadius: 16,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: colors.heading,
                  }}>
                  {text}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      {/* <View>
        <View
          style={{
            height: 70,
            borderWidth: 1 ,
            borderColor: colors.borderOutline,
            borderRadius: 16,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 16, fontWeight: 500, color: colors.heading}}>
            Completed
          </Text>
        </View>
      </View> */}
    </ScreenWrapper>
  );
};

export default TaskStatus;
