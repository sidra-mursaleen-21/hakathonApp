/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import React, {useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import Router from './src/router';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store';
import {useTheme} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
      <Router />
      </PaperProvider>
    </Provider>
  );
};

export default Main;

AppRegistry.registerComponent(appName, () => Main);
