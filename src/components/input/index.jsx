import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Input = ({
  placeholder,
  secureEntry,
  keyboardType,
  textType,
  Icon,
  label,
  onChange,
  onSubmit,
}) => {
  const [hover, setHover] = useState(false);
  const colors = useTheme().colors;

  return (
    <View>
      {label ? (
        <Text style={{color: '#848A94', fontWeight: 500, fontSize: 16}}>
          {label}
        </Text>
      ) : null}
      <View
        style={{
          paddingHorizontal: 20,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 16,
          height: 60,
          borderColor: hover ? '#756EF3' : colors.borderOutline,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          placeholder={placeholder}
          placeholderTextColor="#868D95"
          keyboardType={keyboardType}
          textContentType={textType}
          secureTextEntry={secureEntry}
          onFocus={() => {
            setHover(true);
          }}
          onBlur={() => {
            setHover(false);
          }}
          style={{
            flex: 1,
            color: colors.heading,
            fontSize: 16,
            fontWeight: '500',
          }}
        />
        {Icon ? Icon : null}
      </View>
    </View>
    // <TextInput
    //   placeholder={placeholder}
    //   placeholderTextColor="#868D95"
    //   keyboardType={keyboardType}
    //   textContentType={textType}
    //   secureTextEntry={secureEntry}
    //   onFocus={() => {
    //     setHover(true);
    //   }}
    //   onBlur={() => {
    //     setHover(false);
    //   }}
    //   style={{
    // color: colors.heading,
    // fontSize: 16,
    // fontWeight: '500',
    // paddingHorizontal: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderRadius: 16,
    // height: 60,
    // borderColor: hover ? '#756EF3' : colors.borderOutline,
    //     ...customStyle,
    //   }}
    // />
  );
};

export default Input;
