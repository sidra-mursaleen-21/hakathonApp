import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TaskProgressBox = ({pressed}) => {
    const { colors } = useTheme()
    return (
        <Pressable onPress={pressed} >
        <View
            style={{
                width: '100%',
                height: 80,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.borderOutline,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <View>
                <Text style={{ color: "#A0BAC5", fontSize: 14 }} >Productivity Mobile App</Text>
                <Text style={{ fontWeight: 500, color: colors.heading, fontSize: 18 }}>
                    Create Detail Booking
                </Text>
            </View>
            <View style={{ width: 44, height: 44, borderWidth: 2, borderRadius: 50 }} >
                {/* <CircularProgress
                    value={100}
                    activeStrokeColor='#2465FD'
                    activeStrokeSecondaryColor='#C25AFF'
                /> */}
            </View>
        </View>
        </Pressable>
    );
};

export default TaskProgressBox;
