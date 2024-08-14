import {Pressable, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/button';
import {useNavigation, useTheme} from '@react-navigation/native';
import ScreenWrapper from '../../layout';
import Input from '../../components/input';
import {useState} from 'react';
import ImageCircle from '../../components/imageCircle';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreateTeam = () => {
  const {colors} = useTheme();
  const [button, setButton] = useState(['Private', 'Public', 'Secrete']);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 20, gap: 25, paddingVertical: 20}}>
        <View style={{gap: 15, marginBottom: 10}}>
          <View
            style={{
              width: 84,
              height: 84,
              borderWidth: 1,
              borderColor: colors.heading,
              borderRadius: 50,
              alignSelf: 'center',
            }}></View>
          <Text
            style={{
              color: colors.heading,
              alignSelf: 'center',
              fontWeight: 500,
              fontSize: 18,
            }}>
            Upload Logo File
          </Text>
          <Text style={{fontSize: 14, alignSelf: 'center', color: '#848A94'}}>
            Your logo will publish always
          </Text>
        </View>
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          Team Name
        </Text>
        <Input
          keyboardType="text"
          textType="text"
          secureEntry={false}
          placeholder="Enter your Team Name"
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
          Type
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
        <Button text="Create Team" />
      </View>
    </ScreenWrapper>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
    color: 'black',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    textTransform: 'capitalize',
  },
});

export default CreateTeam;
