import React from 'react'
import { Pressable, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native';

const IconCircle = ({ display, children, onPress }) => {
    const colors = useTheme().colors

    return (
        <View style={{ flexGrow: 1 }}>
            <Pressable
                onPress={onPress}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    display: display,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: colors.borderOutline,
                }}>
                {children}
            </Pressable>
        </View>
    )
}

export default IconCircle
