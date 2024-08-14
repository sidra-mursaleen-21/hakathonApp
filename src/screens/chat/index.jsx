import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../layout';
import Seachbar from '../../components/searchBar';
import { useTheme } from '@react-navigation/native';

const Chat = () => {
  const { colors } = useTheme();

  return (
    <ScreenWrapper>
      <View style={{ marginHorizontal: 20, paddingTop: 10 }}>
        <Seachbar />
        <View style={{ gap: 15 }} >
          <View
            style={{
              borderBottomWidth: 1,
              flexDirection: 'row',
              height: 68,
              gap: 15,
              borderBottomColor: colors.borderOutline,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                height: 45,
                width: 45,
                borderRadius: 50,
                borderColor: colors.heading
              }}></View>
            <Text style={{ fontSize: 16, fontWeight: 500, color: colors.heading }}>
              Jenny Alxinder
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              flexDirection: 'row',
              height: 68,
              gap: 15,
              borderBottomColor: colors.borderOutline,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                height: 45,
                width: 45,
                borderRadius: 50,
                borderColor: colors.heading
              }}></View>
            <Text style={{ fontSize: 16, fontWeight: 500, color: colors.heading }}>
              Jenny Alxinder
            </Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};



export default Chat;
