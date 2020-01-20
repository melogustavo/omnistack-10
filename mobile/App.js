import React from 'react';
import { StatusBar, YellowBox } from 'react-native';


import Routes from './src/routes'

YellowBox.ignoreWarnings([
  'Unrecognized Websocket'
])

export default function App() {
  return (
    <>
      {/* background color eh para o android */}
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

