import React, { useState } from 'react';
import {Pressable, Text, View} from 'react-native';
import {RadioButton, Switch} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const Navigatingbox = ({pressed, text, icon, onValueChange, value}) => {
    const [checked, setChecked] = useState(false);
    const {colors} = useTheme()
    
    return (
    <Pressable onPress={pressed}>
      <View
        style={{
          width: 327,
          height: 56,
          borderWidth: 1,
          borderColor: colors.borderOutline,
          borderRadius: 8,
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: colors.heading, fontSize: 16, fontWeight: 500}}>
          {text}
        </Text>
        {icon == 'arrow' ? (
          <MaterialIcons
            style={{color: colors.heading, fontSize: 25}}
            name="keyboard-arrow-right"
          />
        ) : icon == 'switch' ? (
          <Switch color="#756EF3" value={value} onValueChange={onValueChange} />
        ) : (
          <View>
            <RadioButton
            color='#756EF3'
            value={checked}
            status={ checked === true ? 'checked' : 'unchecked' }
            onPress={() => setChecked(!checked)}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};
export default Navigatingbox;
