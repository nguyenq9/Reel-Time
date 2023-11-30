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

function Login({navigation}) {
  const [pressedR, setR] = useState(false);
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
          secureTextEntry={true}
        />
      </View>
      <View style={{marginBottom: 0}}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {/* <MaterialCommunityIcons 
              name="check-circle" 
              size={30} 
              margin={0}
              onPress={() => {console.log("Remember me"), setR(!pressedR)}}
              color={pressedR ?'#ff0000' : "#ffffff"}
              /> */}
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
          onPress={() => navigation.navigate('Home')}>
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
