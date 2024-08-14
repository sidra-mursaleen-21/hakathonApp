import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { useRef } from 'react';
import Button from '../button';
import { Actionsheet } from 'native-base';

const BottomSheet = ({ openSheet }) => {
  // const slide = useRef(new Animated.Value(320)).current;

  // const [sheet, setSheet] = useState(false);

  // const slideUp = () => {
  //   Animated.timing(slide, {
  //     toValue: 0,
  //     duration: 1500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const slideDown = () => {
  //   Animated.timing(slide, {
  //     toValue: 320,
  //     duration: 1500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // if (sheet) {
  //   slideUp();
  // }

  return (
    // <View
    //   style={{
    //     position: 'absolute',
    //     flex: 1,
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: sheet ? 'rgba(0,0,0,0.5)' : null ,
    //     justifyContent: 'flex-end',
    //   }}>
    //   <Animated.View
    //     style={{
    //       width: '100%',
    //       height: '40%',
    //       backgroundColor: '#fff',
    //       transform: [{translateY: slide}],
    //     }}>
    //     <Button text="off" clicked={() => slideDown()} />
    //   </Animated.View>
    // </View>
    <Actionsheet>
      <Actionsheet.Content>
        <View>
          <Text style={{ color: "black" }} >heelooooo</Text>
        </View>
      </Actionsheet.Content>

    </Actionsheet>
  );
};

export default BottomSheet;
