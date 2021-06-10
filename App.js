import React, {useState} from 'react';
import {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStyles from './styles/AppStyles';
import DatePicker from 'react-native-date-picker';
import Date from './components/Date/Date';

const Header: () => Node = () => {
  return (
    <View style={AppStyles.Header}>
      <Text style={AppStyles.Header}>When did you quit?</Text>
    </View>
  );
};

const App: () => Node = () => {
  let gradient = [
    'rgba(31, 34, 32, 1)',
    'rgba(74, 109, 105, 1)',
    'rgba(34, 228, 85, 1)',
  ];

  return (
    <LinearGradient
      colors={gradient}
      style={AppStyles.container}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1}}>
      <View>
        <Header />
        <Text>{'  '}</Text>
        <Date />
        {}
      </View>
    </LinearGradient>
  );
};

export default App;
