import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Appbar, DefaultTheme, Provider } from 'react-native-paper';
import Orders from './Components/orders';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

class App extends React.Component {
  render(){
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Stock Manager" subtitle="Orders" />
        </Appbar.Header>
        <Orders />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default function Main(){
  return (
    <Provider theme={theme}>
      <App />
    </Provider>
  );
}
