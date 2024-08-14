// import React, {useState} from 'react';
// import ScreenWrapper from '../../layout';
// import {Pressable, Text, TextInput, View} from 'react-native';
// import {useTheme} from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const SearchProject = () => {
//   const colors = useTheme().colors;
//   const [button, setButton] = useState(['Favourites', 'Recents', 'All']);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <ScreenWrapper>
//       <View style={{marginHorizontal: 24}}>
//         <View
//           style={{
//             alignSelf: 'center',
//             borderRadius: 12,
//             width: 320,
//             flexDirection: 'row',
//             borderWidth: 1,
//             borderColor: colors.borderOutline,
//             paddingHorizontal: 15,
//             gap: 10,
//             marginVertical: 20,
//             alignItems: 'center',
//           }}>
//           <AntDesign color={colors.headerText} size={24} name="search1" />
//           <TextInput
//             style={{
//               flex: 1,
//               fontSize: 16,
//               color: colors.heading,
//               fontWeight: '500',
//             }}
//             placeholder="Search"
//             placeholderTextColor="#868D95"
//           />
//         </View>
//         <View style={{flexDirection: 'row', gap: 10}}>
//           {button.map((text, index) => {
//             return (
//               <Pressable
//                 key={index}
//                 onPress={() => setActiveIndex(index)}
//                 style={{
//                   paddingVertical: 4,
//                   paddingHorizontal: 10,
//                   borderWidth: activeIndex == index ? 1 : null,
//                   borderRadius: 16,
//                   borderColor: '#756EF3',
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: 14,
//                     color: activeIndex == index ? colors.heading : '#848A94',
//                     fontWeight: '500',
//                   }}>
//                   {text}
//                 </Text>
//               </Pressable>
//             );
//           })}
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default SearchProject;
