import React from 'react';
import Main from './src/main';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}
