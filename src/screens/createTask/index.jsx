import {Pressable, StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../../layout';
import Input from '../../components/input';
import ImageCircle from '../../components/imageCircle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Button from '../../components/button';

const CreateTask = () => {
  const [button, setButton] = useState(['Urgent', 'Running', 'Ongoing']);
  const [activeIndex, setActiveIndex] = useState(0);
  const {colors} = useTheme();

  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 20, gap: 20, paddingVertical: 20}}>
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          Task Name
        </Text>
        <Input
          keyboardType="text"
          textType="text"
          secureEntry={false}
          placeholder="Task Name"
        />
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          Team Member
        </Text>
        <View style={{flexDirection: 'row', gap: 15}}>
          <ImageCircle source={require('../../images/people-image.png')} />
          <ImageCircle source={require('../../images/people-image.png')} />
          <ImageCircle source={require('../../images/people-image.png')} />
          <ImageCircle source={require('../../images/people-image.png')} />
          <View
            style={{
              borderWidth: 1,
              height: 40,
              width: 40,
              borderRadius: 50,
              borderColor: '#756EF3',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="plus" color="#756EF3" size={25} />
          </View>
        </View>
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          Date
        </Text>
        <Input
          keyboardType="text"
          textType="text"
          secureEntry={false}
          placeholder="Enter Date"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{gap: 20, width: '48%'}}>
            <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
              Start Time
            </Text>
            <Input
              keyboardType="text"
              textType="text"
              secureEntry={false}
              placeholder="Start Time"
            />
          </View>
          <View style={{gap: 20, width: '48%'}}>
            <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
              End Time
            </Text>
            <Input
              keyboardType="text"
              textType="text"
              secureEntry={false}
              placeholder="End Time"
            />
          </View>
        </View>
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          Board
        </Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          {button.map((text, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => setActiveIndex(index)}
                style={{
                  paddingVertical: 13,
                  paddingHorizontal: 26,
                  borderWidth: activeIndex == index ? 1 : null,
                  borderRadius: 16,
                  borderColor: '#756EF3',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: activeIndex == index ? colors.heading : '#848A94',
                    fontWeight: 500,
                  }}>
                  {text}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Button text="Save" />
      </View>
    </ScreenWrapper>
  );
};

export default CreateTask;
