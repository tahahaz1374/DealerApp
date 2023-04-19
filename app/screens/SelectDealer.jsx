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

const SelectDealer = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
      }}>
      <View style={{marginTop: 50}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Select a Dealer</Text>
      </View>
      <View style={{marginTop: 50, width: '50%'}}>
        <DropDownPicker
          placeholder="My Dealer List"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          zIndex={20}
        />
      </View>
      <View
        style={{
          marginVertical: 10,
          borderBottomColor: 'blue',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'blue'}}>Add a new dealer</Text>
      </View>
    </View>
  );
};

export default SelectDealer;
