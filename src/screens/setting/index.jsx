import { useEffect, useMemo, useState } from 'react';
import { Appearance, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Switch } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Navigatingbox from '../../components/navigatingBox';
import Theme from '../../layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/button';
import ScreenWrapper from '../../layout';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Toggle } from '../../store/themeSlice';

const Setting = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch()

    useEffect(() => {
        loadTheme();
    }, []);


    const loadTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem("@theme");
            if (theme !== null) {
                setIsDarkTheme(theme === 'dark');
            }
        } catch (e) {
            console.error(e);
        }
    };
    const toggleTheme = async () => {
        try {
            const newTheme = isDarkTheme ? 'light' : 'dark';
            await AsyncStorage.setItem("@theme", newTheme);
            dispatch(Toggle(newTheme))
            loadTheme();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <ScreenWrapper>
            <View style={{ gap: 20, alignItems: "center", paddingVertical: 20 }} >
                <Navigatingbox text="Dark Mood" icon="switch" value={isDarkTheme} onValueChange={toggleTheme} />
                <Navigatingbox text="Laguage" icon="arrow" pressed={() => navigation.navigate('language', { title: 'Language' })} />
                <Navigatingbox text="About Application" icon="arrow" />
            </View>
        </ScreenWrapper>
    );
};



export default Setting;
