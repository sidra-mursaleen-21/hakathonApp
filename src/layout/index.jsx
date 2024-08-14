import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import theme from '../theme/colors';
import { useTheme } from '@react-navigation/native';

const ScreenWrapper = ({ children }) => {
    const {colors} = useTheme()
    return (
        <View style={{ flex: 1, backgroundColor: colors.background }} >
            {children}
        </View>
    )
}

export default ScreenWrapper
