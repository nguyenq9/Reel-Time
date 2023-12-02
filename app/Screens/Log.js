import {Modal, Text, View, TouchableWithoutFeedback, Button,StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Data from '../Data/Data.json';
import { Dropdown } from 'react-native-element-dropdown';
import Realm from 'realm';
import EntrySchema from '../EntrySchema';
import UserSchema from '../UserSchema';



function Log() {
  const [entries, setEntries] = React.useState([]);
  
  async function calcIndex() {
    const realm = await Realm.open({
      path: 'realm3',
      schema: [UserSchema, EntrySchema],
    });
    const specificId = 'admin';
    const user = realm
      .objects('User')
      .filtered('userName == $0', specificId)[0];
    if(user){
      /*useEffect(() => {
        setEntries(user.entries);
      }, []);
     */
      setEntries(user.entries);
      /*useEffect(() => {
        
      }, [user.entries]);*/
    }
    else{
      console.log("no user");
    }
  }
  const [modalVisible, setModalVisible] = React.useState(false);
  const [weight, setweight] = React.useState("");
  const [length, setlength] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [quanity, setquanity] = React.useState("");
  const [waterTypeFilter, setwaterTypeFilter] = React.useState("freshWater");
  const waterTypes = [
    { label: 'freshWater', value: 'freshWater' },
    { label: 'saltWater', value: 'saltWater' }
  ];
  const [isFocus, setIsFocus] = React.useState(false);

  
  useEffect(() => {
    calcIndex();

  }, [entries]);
  
  return(
   
    <View style = {{paddingTop: 30, paddingLeft: 15 , paddingRight: 15}} >
      
        <View style = {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', height: "14%"}}>
            
          <View style = {styles.quortor}>
            <Text style = {{textAlign: 'center' }}>totalFish</Text>
            <Text style = {{textAlign: 'center' }}>{Data.info.totalFish}</Text>
          </View>
            
          <View style = {styles.quortor}>
            <Text style = {{textAlign: 'center' }}>speciesCaught</Text>
            <Text style = {{textAlign: 'center' }}>{Data.info.speciesCaught}</Text>
          </View>
        </View> 

        <View style = {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', height: "14%"}}>
            
          <View style = {styles.quortor}>
          
            <Text style = {{textAlign: 'center' }}>numberOfTrips</Text>
            <Text style = {{textAlign: 'center' }}>{Data.info.numberOfTrips}</Text>
          </View>
            
          <View style = {styles.quortor}>
            <Text style = {{textAlign: 'center' }}>favoritAreaCode</Text>
            <Text style = {{ textAlign: 'center' }}>{Data.info.favoritAreaCode}</Text>
          </View>
       
      </View>

    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <View style={{ width: "22%", backgroundColor: 'lightyellow'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>Date</Text>
          </View>
          <View style={{ width: "60%", backgroundColor: 'lightpink'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>Species</Text>
          </View>
          <View style={{ width: "18%", backgroundColor: 'lavender'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>Location</Text>
          </View>
      </View>
    {entries.map( (item, i) => {
      
        return(
          <TouchableWithoutFeedback onPress = {() => {setModalVisible(!modalVisible); setweight(20);setlength(22);setLocation(item.areaCode);setSpecies(item.species);setquanity(item.quantity)}}  key={i}>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <View style={{ width: "22%", backgroundColor: 'lightyellow'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.date}</Text>
            </View>
            <View style={{ width: "60%", backgroundColor: 'lightpink'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.species}</Text>
            </View>
            <View style={{ width: "18%", backgroundColor: 'lavender'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.areaCode}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
          );
      
    })}
    <Modal visible={modalVisible} style = {{margin: 50}}>
      <View style = {{paddingTop: "25%", paddingLeft: 15 , paddingRight: 15}} >
      <View style = {styles.full}>
        <Text style = {{textAlign: 'center' }}>Species</Text>
        <Text style = {{textAlign: 'center' }}>{species}</Text>
      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', height: "20%"}}>
          
        <View style = {styles.quortor}>
          <Text style = {{textAlign: 'center' }}>quanity</Text>
          <Text style = {{textAlign: 'center' }}>{quanity}</Text>
        </View>
          
        <View style = {styles.quortor}>
          <Text style = {{textAlign: 'center' }}>location</Text>
          <Text style = {{textAlign: 'center' }}>{location}</Text>
        </View>
      </View> 

      <View style = {{flexDirection: 'row', justifyContent: 'center',alignItems: 'center', height: "20%"}}>
          
        <View style = {styles.quortor}>
        
          <Text style = {{textAlign: 'center' }}>length</Text>
          <Text style = {{textAlign: 'center' }}>{length}</Text>
        </View>
          
        <View style = {styles.quortor}>
          <Text style = {{textAlign: 'center' }}>weight</Text>
          <Text style = {{ textAlign: 'center' }}>{weight}</Text>
        </View>
      </View> 
      <Button onPress={() => setModalVisible(!modalVisible)} title="Close" ></Button>

      </View>
    </Modal>
  </View>
  );
}
  export default Log;
  const styles = StyleSheet.create({
    quortor: {
      justifyContent: 'center',
      alignItems: 'center',
      width: "40%",
      borderRadius:4,
      borderBottomWidth:2,
      borderTopWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2
    },
    full:{height: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4,
    borderBottomWidth:2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2}
  })

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