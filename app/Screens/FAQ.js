import { Link } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Linking } from 'react-native';

function FAQ(props) {
  const { onPress, properly = 'WA Catch Reporting Guidelines', crab = 'Crab Identification Guide', species = 'Salmon Identification Guide',
          help = 'Application Help', faq = 'FAQ'  } = props;
  
  const salmonURL    = "https://wdfw.wa.gov/sites/default/files/publications/01384/2012-13_marine.pdf";  
  const crabURL      = "https://wdfw.wa.gov/sites/default/files/2022-06/WA%20Sea%20Grant%20Crab%20Team%20ID%20guide%202022%20version.pdf";
  const recordingURL = "https://wdfw.wa.gov/sites/default/files/2019-01/crc_instructions.pdf"; 

  // The two links below to change to point to the website once it is created. 
  const apphelpURL   = "https://sites.google.com/view/reeltime/product";
  const appFAQURL    = "https://sites.google.com/view/reeltime"; 
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style ={{marginBottom:40}}>
        <Pressable style={styles.button} onPress={() => {console.log("Fishing Guidelines"); Linking.openURL(recordingURL);}}>
        <Text style={styles.text}>{properly}</Text>
        </Pressable>
        </View>    
        <View style ={{marginBottom:40}}>
        <Pressable style={styles.button} onPress={() => {console.log("Crab Guidelines"); Linking.openURL(crabURL);}}>
        <Text style={styles.text}>{crab}</Text>
        </Pressable>
        </View>  
        <View style ={{marginBottom:40}}>
        <Pressable style={styles.button} onPress={() => {console.log("Species Identification"); Linking.openURL(salmonURL);}}>
        <Text style={styles.text}>{species}</Text>
        </Pressable>
        </View>        
        <View style ={{marginBottom:40}}>
        <Pressable style={styles.button} onPress={() => {console.log("Application Help"); Linking.openURL(apphelpURL);}}>
        <Text style={styles.text}>{help}</Text>
        </Pressable>
        </View>    
        <View style ={{marginBottom:40}}>
        <Pressable style={styles.button} onPress={() => {console.log("FAQ"); Linking.openURL(appFAQURL);}}>
        <Text style={styles.text}>{faq}</Text>
        </Pressable>
        </View>            
      </View>
    );
    
  }
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: 350,
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

  export default FAQ; 