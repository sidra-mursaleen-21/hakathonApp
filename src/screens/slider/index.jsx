import { Link, useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
import { useTheme } from '@react-navigation/native';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();
  const ref = useRef();
  const {colors} = useTheme();

  const slides = [
    {
      image: require('../../images/slider-image-1.png'),
      text1: "Let's create a",
      text2: 'for your workflows.',
      span: 'Space',
    },
    {
      image: require('../../images/slider-image-2.png'),
      text1: 'Work more',
      text2: 'and Organized👌.',
      span: 'Structured',
    },
    {
      image: require('../../images/slider-image-3.png'),
      text1: 'Manage your',
      text2: 'quickly for Results✌.',
      span: 'Tasks',
    },
  ];

  const nextSlide = () => {
    if (currentIndex != 2) {
      ref.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('signIn');
    }
  };

  return (
    <SafeAreaProvider>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        scrollEnabled={false}
        data={slides}
        ref={ref}
        renderItem={({ item, index }) => {
          return (
            <View key={index} width={width} style={{ flex: 3 }}>
              <View
                style={{
                  marginBottom: 10,
                  height: 425,
                }}>
                <Image style={{ resizeMode: 'cover' }} source={item.image} />
              </View>
              <View style={{ paddingHorizontal: 30 }}>
                <Text
                  style={{
                    color: '#756EF3',
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 18,
                    marginBottom: 10,
                  }}>
                  Task Management
                </Text>
                <Text
                  style={{
                    color: colors.heading,
                    fontSize: 35,
                    fontWeight: 500,
                    lineHeight: 45,
                  }}>
                  {item.text1}{' '}
                  <Text style={{ color: '#756EF3', fontWeight: 800 }}>
                    {item.span}
                  </Text>{' '}
                  {item.text2}.
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            position: 'relative',
            justifyContent: 'space-around',
            paddingLeft: 40,
          }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {slides.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: currentIndex === index ? 20 : 8,
                    height: 8,
                    borderRadius: 50,
                    backgroundColor:
                      currentIndex === index ? '#756EF3' : 'lightgrey',
                  }}></View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => navigation.navigate('signIn')}>
              <Text style={{ padding:15 , color: colors.heading, fontWeight: 500 }}>Skip</Text>
            </Pressable>
            <Pressable
              style={{
                height: 100,
                width: 100,
              }}
              onPress={() => nextSlide()}>
              <Image
                style={{ position: 'absolute', right: 0, bottom: -8 }}
                source={require('../../images/next-button.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Slider;
