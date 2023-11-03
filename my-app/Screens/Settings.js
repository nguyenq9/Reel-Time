import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from 'react-native-web';
import { useState } from 'react';



function Settings(props) {
  const { onPress, title = 'Change Username', licence = 'Change license number', sync = 'Sync whenever possible', 
          gps = 'GPS Location', push = 'Push notifications' } = props;
  const [pressedGPS, setGPS] = useState(false);
  const [pressedPush, setPush] = useState(false);
  const [pressedSync, setSync] = useState(false);

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <View style ={{marginBottom:10}}>
           <MaterialCommunityIcons 
              name="account-circle" 
              size={150} 
              margin={10}
              onPress={() => console.log("Change profile picture")}
              color={"#213c96"}
              // color={'white'}
              // backgroundColor={'white'}
              />
        </View>

        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Change username")}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
        </View>

        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Change license number")}>
        <Text style={styles.text}>{licence}</Text>
        </Pressable>
        </View>

        <View style ={{marginBottom:20, display:'flex', flexDirection:'row'}}>
        <Pressable style={styles.button2} onPress={onPress}>
        <Text style={styles.text}>{sync}</Text>
        </Pressable>
        <MaterialCommunityIcons 
              name="check" 
              size={40} 
              margin={10}
              onPress={() => {console.log("Sync whenever"), setSync(!pressedSync)}}
              color={pressedSync ? "#213c96" : '#ff0000'}
              // color={'white'}
              // backgroundColor={'white'}
              />
        </View>

        <View style ={{marginBottom:20, display:'flex', flexDirection:'row'}}>
        <Pressable style={styles.button2} onPress={onPress}>
        <Text style={styles.text}>{push}</Text>
        </Pressable>
        <MaterialCommunityIcons 
              name="check" 
              size={40} 
              margin={10}
              onPress={() => {console.log("Push Notifications"), setPush(!pressedPush)}}
              color={pressedPush ? "#213c96" : '#ff0000'}
              // color={'white'}
              // backgroundColor={'white'}
              />
        </View>

        <View style ={{marginBottom:20, display:'flex', flexDirection:'row'}}>
        <Pressable style={styles.button2} onPress={onPress}>
        <Text style={styles.text}>{gps}</Text>
        </Pressable>
        <MaterialCommunityIcons 
              name="check" 
              size={40} 
              margin={10}
              onPress={() => {console.log("GPS Location"), setGPS(!pressedGPS)}}
              color={pressedGPS ? "#213c96" : '#ff0000'}
              // color={'white'}
              // backgroundColor={'white'}
              />
        </View>

        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button3} onPress={() => console.log("Change username")}>
        <Text style={styles.text}>{'Sign Out'}</Text>
        </Pressable>
        </View>

      </View>
      
    );
  }

  const styles = StyleSheet.create({
    button: {
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
    button2: {
      alignItems: 'cemter',
      justifyContent: 'center',
      //paddingVertical: 0,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: 260,
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
  });

  export default Settings;