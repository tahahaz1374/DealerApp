import * as react from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{marginTop: 100}}>
        <Text style={{fontWeight: 'bold', marginBottom: 50}}>Login</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="username"
          style={{
            borderColor: '#dedede',
            borderWidth: 0.4,
            paddingVertical: 10,
            paddingHorizontal: 100,
            textAlign: 'left',
            // width: '100%',
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          placeholder="password"
          style={{
            borderColor: '#dedede',
            borderWidth: 0.4,
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
          <Text>submit</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 10,
          borderBottomColor: 'blue',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'blue'}}>forget password</Text>
      </View>
    </View>
  );
};

export default Login;
