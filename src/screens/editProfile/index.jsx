import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Input from '../../components/input';
import Theme from '../../layout';
import ScreenWrapper from '../../layout';
import {useTheme} from '@react-navigation/native';

const Editprofile = () => {
  const{ colors } = useTheme();

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            alignSelf: "center",
            borderWidth: 1,
            borderColor: colors.heading,
            marginVertical: 15,
            height: 132,
            width: 132,
            borderRadius: 100,
          }}
        />
        <View style={{ marginVertical: 20, gap: 15 }} >

          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Firstname
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your firstname"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Lastname
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your lastname"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Username
          </Text>
          <Input
            // keyboardType="ascii-capable"
            // textType="name"
            secureEntry={false}
            placeholder="Enter your username"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Email
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your email"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Password
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={true}
            placeholder="Enter your password"
          />

          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Date of Birth
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your birthdate"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Gender
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your gender"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Location
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your location"
          />
          <Text style={{ color: "#848A94", fontWeight: 500, fontSize: 16 }} >
            Bio
          </Text>
          <Input
            keyboardType="email-address"
            textType="emailAddress"
            secureEntry={false}
            placeholder="Enter your bio"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};



export default Editprofile;
