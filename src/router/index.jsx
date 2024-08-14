import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Signup from '../screens/signUp';
import Projects from '../screens/projects';
import Chat from '../screens/chat';
import Profile from '../screens/profile';
import Add from '../screens/add';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import {
  Easing,
  Pressable,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from '../screens/splash';
import Slider from '../screens/slider';
import Signin from '../screens/logIn';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomSheet from '../components/bottomSheet';
import {useEffect, useState} from 'react';
import CreateTask from '../screens/createTask';
import CreateTeam from '../screens/createTeam';
import Editprofile from '../screens/editProfile';
import Setting from '../screens/setting';
import {CardStyleInterpolators} from '@react-navigation/stack';
import theme from '../theme/colors';
import Language from '../screens/language';
import Header from '../components/header';
import TodayTask from '../screens/todayTask';
import {useDispatch, useSelector} from 'react-redux';
import {Toggle} from '../store/themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../theme/colors';
import SearchProject from '../screens/serchProject';
import {Actionsheet, useDisclose} from 'native-base';
import {ScreenContainer} from 'react-native-screens';
import TaskStatus from '../screens/taskStatus';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}>
      {/* <Stack.Screen name="searchProject" initialParams={{ title: 'Home' }} component={SearchProject} /> */}
      <Stack.Screen
        initialParams={{title: 'Home'}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="todayTask" component={TodayTask} />
      <Stack.Screen name="taskStatus" component={TaskStatus} />
    </Stack.Navigator>
  );
};

const AddStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          header: Header,
        }}>
        <Stack.Screen
          initialParams={{title: 'add'}}
          name="Add"
          component={Add}
        />
        <Stack.Screen name="createTask" component={CreateTask} />
        <Stack.Screen name="createTeam" component={CreateTeam} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        initialParams={{title: 'Profile'}}
        name="profile"
        component={Profile}
      />
      <Stack.Screen name="editProfile" component={Editprofile} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="language" component={Language} />
    </Stack.Navigator>
  );
};

const Tabnavigation = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 82,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Foundation color="#756EF3" size={28} name="home" />
            ) : (
              <Octicons color="#848A94" size={24} name="home" />
            );
          },
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          header: Header,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <FontAwesome6 color="#756EF3" size={24} name="folder-minus" />
            ) : (
              <Feather color="#848A94" size={24} name="folder-minus" />
            );
          },
        }}
        initialParams={{title: 'Projects'}}
        name="Project"
        component={Projects}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => {
            return (
              <View style={style.add}>
                <AntDesign name="plus" color="#ffff" size={25} />
              </View>
            );
          },
        }}
        name="addStack"
        component={AddStack}
      />
      <Tab.Screen
        initialParams={{title: 'Chat'}}
        options={{
          header: Header,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Ionicons color="#756EF3" size={28} name="chatbubble-ellipses" />
            ) : (
              <Ionicons
                color="#848A94"
                size={28}
                name="chatbubble-ellipses-outline"
              />
            );
          },
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Ionicons color="#756EF3" size={28} name="person" />
            ) : (
              <Ionicons color="#848A94" size={28} name="person-outline" />
            );
          },
        }}
        name="profileStack"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const Stack = createNativeStackNavigator();
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const theme = await AsyncStorage.getItem('@theme');
        dispatch(Toggle(theme));
      } catch (r) {
        console.log(r);
      }
    };
    loadTheme();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme == 'dark' ? 'black' : 'white'}
      />
      <NavigationContainer
        theme={theme === 'dark' ? colors.darkTheme : colors.lightTheme}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="splash"
            component={Splash}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="slider"
            component={Slider}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="signIn"
            component={Signin}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="signUp"
            component={Signup}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="tabNavigation"
            component={Tabnavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
