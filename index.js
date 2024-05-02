// Main.js
import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import App from './src/App'; // Assuming your main application component is App
import { name as appName } from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF4A85',
    accent: 'yellow',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme} >
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main);