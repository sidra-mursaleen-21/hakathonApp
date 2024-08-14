import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../layout';
import Navigatingbox from '../../components/navigatingBox';
import { useState } from 'react';

const Language = () => {
    return (
        <ScreenWrapper>
            <View style={{ alignItems: 'center', gap: 20, marginVertical: 20 }}>
                <Navigatingbox
                    text="English"
                />
                <Navigatingbox
                    text="Bangla"
                />
                <Navigatingbox
                    text="Spanish"
                />
                <Navigatingbox
                    text="France"
                />
            </View>
        </ScreenWrapper>
    );
};



export default Language;
