import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {TouchableHighlight} from 'react-native-web';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Settings({navigation}) {
  const [pressedGPS, setGPS] = useState(false);
  const [pressedPush, setPush] = useState(false);
  const [pressedSync, setSync] = useState(false);

  const removeData = async () => {
    try {
      const savedUser = await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginBottom: 10}}>

        <Icon
          name="user-circle"
          size={150}
          style={{margin: 10, color: 'black'}}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <Pressable
          style={styles.button}
          onPress={() => console.log('Change username')}>
          <Text style={styles.text}>{'Change Username'}</Text>
        </Pressable>
      </View>

      <View style={{marginBottom: 20}}>
        <Pressable
          style={styles.button}
          onPress={() => console.log('Change license number')}>
          <Text style={styles.text}>{'Change license number'}</Text>
        </Pressable>
      </View>

      <View style={{marginBottom: 20, display: 'flex', flexDirection: 'row'}}>
        <Pressable style={styles.button2}>
          <Text style={styles.text}>{'Sync whenever possible'}</Text>
        </Pressable>

        <Icon
          name="check"
          size={40}
          margin={10}
          onPress={() => {
            console.log('Sync whenever'), setSync(!pressedSync);
          }}
          color={pressedSync ? '#ff0000' : '#213c96'}
        />
      </View>

      <View style={{marginBottom: 20, display: 'flex', flexDirection: 'row'}}>
        <Pressable style={styles.button2}>
          <Text style={styles.text}>{'Push notifications'}</Text>
        </Pressable>
        <Icon
          name="check"
          size={40}
          margin={10}
          onPress={() => {
            console.log('Push Notifications'), setPush(!pressedPush);
          }}
          color={pressedPush ? '#ff0000' : '#213c96'}
        />
      </View>

      <View style={{marginBottom: 20, display: 'flex', flexDirection: 'row'}}>
        <Pressable style={styles.button2}>
          <Text style={styles.text}>{'GPS Location'}</Text>
        </Pressable>
        <Icon
          name="check"
          size={40}
          margin={10}
          onPress={() => {
            console.log('GPS Location'), setGPS(!pressedGPS);
          }}
          color={pressedGPS ? '#ff0000' : '#213c96'}
        />
      </View>

      <View style={{marginBottom: 20}}>
        <Pressable
          style={styles.button3}
          onPress={() => {
            removeData();
            navigation.navigate('Login')
            }}>
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
    width: 325,
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
