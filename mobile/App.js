import React from 'react';
import { StatusBar } from 'react-native';


import Routes from './src/routes'

export default function App() {
  return (
    <>
      {/* background color eh para o android */}
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

