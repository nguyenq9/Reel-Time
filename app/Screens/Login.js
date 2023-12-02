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
import {Alert} from 'react-native';
import Realm from 'realm';
import UserSchema from '../UserSchema';
import EntrySchema from '../EntrySchema';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {
  const [pressedR, setR] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);

  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  async function getAllUsers() {
    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });
    const users = realm.objects('User');
    console.log(`list of users: ${users.map(u => u.userName)}`);
  }

  async function handleLogin() {
    let valid = true;
    if (!userName) {
      valid = false;
    }

    if (!password) {
      valid = false;
    }

    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });
    const specificId = userName;

    const user = realm
      .objects('User')
      .filtered('userName == $0', specificId)[0];
    if (user) {
      if (user.password === password) {
        console.log('password is CORRECT for user: ', user.userName);
        valid = true;
      } else {
        console.log('password is INCORRECT for user: ', user.userName);
        valid = false;
      }
    } else {
      console.log('No user found');
      valid = false;
    }

    if (valid) {
      getAllUsers();
      setPassword('');
      storeUser(userName);
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Error', 'Invalid Username or Password', [
        {text: 'OK'},
      ]);
      setPassword('');
    }
  }

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
          placeholder="Username"
          // secureTextEntry={true}
          onChangeText={setUserName}
          value={userName}
        />
      </View>
      <View style={{marginBottom: 0}}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
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
