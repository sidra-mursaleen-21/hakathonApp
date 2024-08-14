import React from 'react'
import { TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native';

const Seachbar = () => {
    const {colors } = useTheme();

    return (
        <View
            style={{
                alignSelf: 'center',
                borderRadius: 12,
                width: 320,
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: 15,
                borderColor: colors.borderOutline,
                gap: 10,
                marginVertical: 20,
                alignItems: 'center',
            }}>
            <AntDesign color={colors.headerText} size={24} name="search1" />
            <TextInput
                style={{
                    flex: 1,
                    fontSize: 16,
                    color: colors.heading,
                    fontWeight: '500',
                }}
                placeholder="Search"
                placeholderTextColor="#868D95"
            />
        </View>
    )
}

export default Seachbar
