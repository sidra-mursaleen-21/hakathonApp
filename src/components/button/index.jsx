import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

const Button = ({clicked, text}) => {
  return (
    <TouchableOpacity
      onPress={clicked}
      activeOpacity={0.86}
      style={style.button}>
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
