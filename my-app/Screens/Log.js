import * as React from 'react';
import {FlatList, Text, View, StyleSheet, Table} from 'react-native';
import Data from '../Data/Data.json';

const Log = () => {
  return(
    <View style = {{paddingTop: 30, paddingLeft: 15 , paddingRight: 15}}>
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
    {Data.catches.map( item => {
      return(
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <View style={{ width: "22%", backgroundColor: 'lightyellow'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.date}</Text>
          </View>
          <View style={{ width: "60%", backgroundColor: 'lightpink'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.species}</Text>
          </View>
          <View style={{ width: "18%", backgroundColor: 'lavender'}}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.location}</Text>
          </View>
      </View>
         );
    })}
  </View>
  );
}
  export default Log;