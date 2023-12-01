import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    _id: 'int',
    firstName: 'string',
    lastName: 'string',
    userName: 'string',
    // email: { type: 'string', validation: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ },
    email: 'string',
    phoneNum: 'string',
    streetAddress: 'string',
    license: 'string',
    password: 'string'
  },
  primaryKey: '_id',
};


function Login({navigation}) {
  const [pressedR, setR] = useState(false);
  const [license, setLicense] = useState('');
  const [password, SetPassword] = useState('');

  async function test() {
    const realm = await Realm.open({
      path: 'userrealm',
      schema: [UserSchema],
    });
    const users = realm.objects('User');
    console.log(`list of users: ${users.map(u => u._id)}`);
  }
  

  const handleLogin = () => {
    let valid = true;
    if (!license) {
      valid = false;
    }

    if (!password) {
      // VALIDATE PASSWORD BASED ON THE LICENSE NUMBER
      valid = false;
    }
    
    if (valid) {
      test();
      setLicense('')
      SetPassword('')
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Error', 'Invalid Username or Password', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#add8e6'}}>
      <View>
        <Image
          style={{width: 250, height: 200}}
          source={require('./fish.png')}
        />
      </View>
      <View>
        <Text style={{fontSize: 43, lineHeight: 60, color: 'white'}}>
          {'Log In'}
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="License Number"
          // secureTextEntry={true}
          onChangeText={setLicense}
          value={license}
        />
      </View>
      <View style={{marginBottom: 0}}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={SetPassword}
          value={password}
        />
      </View>
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Icon
          name="check-circle"
          size={30}
          margin={10}
          onPress={() => {
            console.log('Remember me'), setR(!pressedR);
          }}
          color={pressedR ? '#ff0000' : '#ffffff'}
        />
        <Text style={styles.text2}>{'Remember Me'}</Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={styles.text}>{'Login'}</Text>
        </Pressable>
      </View>

      <View style={{marginBottom: 40}}>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text}>{'Create Account'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  button2: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Login;
