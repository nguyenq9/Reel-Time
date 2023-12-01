import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TextInput} from 'react-native';
import Realm from 'realm';
import { useState } from 'react';

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

function Signup({navigation}) {
  const [username, setUsername] = useState('');
  const [freeId, setFreeId] = useState(0)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [license, setLicense] = useState('');
  const [password, SetPassword] = useState('');

  async function createAnAccount(){
    const realm = await Realm.open({
      path: 'userrealm',
      schema: [UserSchema],
    });

    // realm.write a user
  }

    return (
      <View style={{justifyContent: 'flex-start', alignItems: 'center', gap:-5}}>
        <View>
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
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Username'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Email'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Phone Number'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Street Address'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='City State Zipcode'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='License Number'
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
        />
        </View>
        <View style ={{marginBottom:20, marginTop:20}}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>{"Submit"}</Text>
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