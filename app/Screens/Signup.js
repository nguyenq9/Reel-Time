import * as React from 'react';
import { Text, View, Pressable, StyleSheet, TextInput} from 'react-native';

function Signup({navigation}) {
    return (
      <View style={{justifyContent: 'flex-start', alignItems: 'center', gap:-5}}>
        <View>
            <TextInput
            style={styles.input}
            placeholder='First Name'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Last Name'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Username'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Email'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Phone Number'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Street Address'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='City State Zipcode'
            secureTextEntry={true}
        />
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholder='License Number'
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