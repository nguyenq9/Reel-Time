import * as React from 'react';
import {Text, View, Pressable, StyleSheet, TextInput} from 'react-native';
import Realm from 'realm';
import {useState, useEffect} from 'react';
import { Alert } from 'react-native';
import UserSchema from '../UserSchema';
import EntrySchema from '../EntrySchema';

// const UserSchema = {
//   name: 'User',
//   properties: {
//     _id: 'int',
//     userName: 'string',
//     password: 'string',
//   },
//   primaryKey: '_id',
// };

function Signup({navigation}) {
  async function calcIndex() {
    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });

    const users = realm.objects('User');
    const index = users.length + 1;
    console.log('setting free id of users to ' + index);
    setFreeId(index);
  }
  const [userName, setUserName] = useState('');
  const [freeId, setFreeId] = useState(0);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNum, setPhoneNum] = useState('');
  // const [streetAddress, setStreetAddress] = useState('');
  // const [license, setLicense] = useState('');
  const [password, SetPassword] = useState('');

  useEffect(() => {
    calcIndex();
  }, []);

  async function deleteAllEntries() {
    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });

    realm.write(() => {
      // Obtain all entries
      const entries = realm.objects("User");
  
      // Delete each entry
      entries.forEach((entry) => {
        realm.delete(entry);
      });
  
      console.log("All entries deleted.");
    });
    setFreeId(1);
  }


  async function createAnAccount() {
    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });

    const specificId = userName;

    const user = realm.objects('User').filtered('userName == $0', specificId)[0];
    console.log("here")
    if (user) {
      // Found the user with the specific _id
      console.log('Found user:', user.password);

    } else {
      let entry1;
      realm.write(() => {
        entry1 = realm.create('User',  {
          _id: freeId,
          userName: userName,
          password: password,
          entries: [],
        })
      });
      // User with the specific username not found
      console.log("creating an account\nUsername: " + userName + "\nPassword: " + password + "\nEntries: " + entry1.entries)
    }
    
    
    // realm.write a user
  }

  const handleSubmit = () => {
    let valid = true;
    if (!userName) {
      valid = false;
    }

    if (!password) {
      valid = false;
    }

    if (valid) {
      createAnAccount();
      setUserName('')
      SetPassword('')
      navigation.navigate('Login');
    } else {
      setUserName('')
      SetPassword('')
      Alert.alert('Signup Error', 'Make sure to fill out all fields.', [
        {text: 'OK'},
      ]);
    }
  }

  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center', gap: -5}}>
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='First Name'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Last Name'
        />
        </View> */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username *"
          value={userName}
          onChangeText={setUserName}
        />
      </View>
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='Email'
        />
        </View> */}
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='Phone Number'
        />
        </View> */}
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='Street Address'
        />
        </View> */}
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='City State Zipcode'
        />
        </View> */}
      {/* <View>
            <TextInput
            style={styles.input}
            placeholder='License Number'
        />
        </View> */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password *"
          secureTextEntry={true}
          value={password}
          onChangeText={SetPassword}
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 20}}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={styles.text}>{'Submit'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            deleteAllEntries()
          }}>
          <Text style={styles.text}>{'Delete'}</Text>
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
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
  },
});
export default Signup;
