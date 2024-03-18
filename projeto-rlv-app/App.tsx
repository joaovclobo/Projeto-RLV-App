import { Text, View } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Noticias from './src/pages/Noticias';
import styles from './AppStyles';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Noticias />
      <Footer />
    </View>
  );
}
