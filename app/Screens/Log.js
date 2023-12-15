import {
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import Data from '../Data/Data.json';
import {Dropdown} from 'react-native-element-dropdown';
import Realm from 'realm';
import EntrySchema from '../EntrySchema';
import UserSchema from '../UserSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

function Log(props) {
  const [entries, setEntries] = React.useState([]);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [weight, setweight] = React.useState('');
  const [length, setlength] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [species, setSpecies] = React.useState('');
  const [quanity, setquanity] = React.useState('');
  //const [waterTypeFilter, setwaterTypeFilter] = React.useState("freshWater");

  /*const waterTypes = [
    { label: 'freshWater', value: 'freshWater' },
    { label: 'saltWater', value: 'saltWater' }
  ];*/
  const isFocused = useIsFocused();
  const [user, setUser] = React.useState('');

  useEffect(() => {
    console.log('in');
    async function calcIndex() {
      const realm = await Realm.open({
        path: 'realm3',
        schema: [UserSchema, EntrySchema],
      });
      var specificId;
      try {
        specificId = JSON.parse(await AsyncStorage.getItem('user'));
      } catch (error) {
        console.log(error);
      }
      console.log(specificId);
      if (specificId == user) {
        return;
      }

      const realm_user = realm
        .objects('User')
        .filtered('userName == $0', specificId)[0];

      if (realm_user) {
        if (specificId != user) {
          setEntries(realm_user.entries);
        }
      }
    }

    if (isFocused) {
      calcIndex();
    } else {
      setEntries([]);
    }
  }, [isFocused]); //entries

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 30,
          paddingLeft: 15,
          paddingRight: 15,
          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          <View style={styles.quortor}>
            <Text style={{textAlign: 'center'}}>totalFish</Text>
            <Text style={{textAlign: 'center'}}>4</Text>
          </View>

          <View style={styles.quortor}>
            <Text style={{textAlign: 'center'}}>speciesCaught</Text>
            <Text style={{textAlign: 'center'}}>2</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          <View style={styles.quortor}>
            <Text style={{textAlign: 'center'}}>numberOfTrips</Text>
            <Text style={{textAlign: 'center'}}>2</Text>
          </View>

          <View style={styles.quortor}>
            <Text style={{textAlign: 'center'}}>favoritAreaCode</Text>
            <Text style={{textAlign: 'center'}}>9</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', paddingBottom: 10, height: 50}}>
          <View
            style={{
              width: '23%',
              backgroundColor: 'lightyellow',
              paddingTop: 7,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
              Date
            </Text>
          </View>
          <View
            style={{width: '60%', backgroundColor: 'lightpink', paddingTop: 7}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
              Species
            </Text>
          </View>
          <View
            style={{width: '18%', backgroundColor: 'lightblue', paddingTop: 7}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
              Location
            </Text>
          </View>
        </View>
        {entries.map((item, i) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible);
                setweight(item.weight);
                setlength(item.length);
                setLocation(item.areaCode);
                setSpecies(item.species);
                setquanity(item.quantity);
              }}
              key={i}>
              <View
                style={{flexDirection: 'row', paddingBottom: 10, height: 50}}>
                <View
                  style={{
                    width: '23%',
                    backgroundColor: 'lightyellow',
                    paddingTop: 7,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {item.date}
                  </Text>
                </View>
                <View
                  style={{
                    width: '60%',
                    backgroundColor: 'lightpink',
                    paddingTop: 7,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {item.species}
                  </Text>
                </View>
                <View
                  style={{
                    width: '18%',
                    backgroundColor: 'lightblue',
                    paddingTop: 7,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {item.areaCode}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
        <Modal visible={modalVisible} style={{margin: 50}}>
          <View style={{paddingTop: '25%', paddingLeft: 15, paddingRight: 15}}>
            <View style={styles.full}>
              <Text style={{textAlign: 'center'}}>Species</Text>
              <Text style={{textAlign: 'center'}}>{species}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
              }}>
              <View style={styles.quortor}>
                <Text style={{textAlign: 'center'}}>quanity</Text>
                <Text style={{textAlign: 'center'}}>{quanity}</Text>
              </View>

              <View style={styles.quortor}>
                <Text style={{textAlign: 'center'}}>location</Text>
                <Text style={{textAlign: 'center'}}>{location}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20%',
              }}>
              <View style={styles.quortor}>
                <Text style={{textAlign: 'center'}}>length</Text>
                <Text style={{textAlign: 'center'}}>30</Text>
              </View>

              <View style={styles.quortor}>
                <Text style={{textAlign: 'center'}}>weight</Text>
                <Text style={{textAlign: 'center'}}>45</Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -70}}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
                title="Close">
                <Text style={styles.text}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
export default Log;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1597DD',
    justifyContent: 'center',
    width: 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  quortor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 4,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  full: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
});

/*
      <Dropdown
        style = {{borderWidth: 2}}
        data={waterTypes}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={waterTypeFilter}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setwaterTypeFilter(item.value);
          setIsFocus(false);
        }}
        />*/
