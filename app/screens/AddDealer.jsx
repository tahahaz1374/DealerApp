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

const AddDealer = () => {
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
      }}>
      <View style={{marginTop: 100}}>
        <Text style={{fontWeight: 'bold', marginBottom: 50, fontSize: 25}}>
          Add new Dealer
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="Name"
          style={{
            borderColor: '#dedede',
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 100,
            textAlign: 'left',
            // width: '100%',
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="Address"
          style={{
            borderColor: '#dedede',
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 100,
            textAlign: 'left',
            // width: '100%',
          }}
        />
      </View>
      <View style={{marginVertical: 10, width: '60%'}}>
        <DropDownPicker
          placeholder="state List"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          zIndex={20}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="PhoneNumber"
          style={{
            borderColor: '#dedede',
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 100,
            textAlign: 'left',
            // width: '100%',
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="Website"
          style={{
            borderColor: '#dedede',
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 100,
            textAlign: 'left',
            // width: '100%',
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{backgroundColor: '#00FFFF', padding: 15, marginTop: 10}}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddDealer;
