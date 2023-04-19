import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Car = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{marginTop: 100}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>
          Brain Anderson Ford
        </Text>
        <Text>Our address</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 50,
          marginTop: 50,
        }}>
        <TouchableOpacity
          style={{backgroundColor: '#00FFFF', padding: 15, marginTop: 10}}>
          <Text>add vehicle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#00FFFF', padding: 15, marginTop: 10}}>
          <Text>edit vehicle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Car;
