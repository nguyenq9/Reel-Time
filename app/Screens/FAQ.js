import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function FAQ(props) {
  const { onPress, properly = 'WA Fishing Reporting Guidelines', crab = 'WA Crab Report Guidelines', species = 'Species Identification Guide',
          help = 'Application Help', faq = 'FAQ'  } = props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Fishing Guidelines")}>
        <Text style={styles.text}>{properly}</Text>
        </Pressable>
        </View>    
        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Crab Guidelines")}>
        <Text style={styles.text}>{crab}</Text>
        </Pressable>
        </View>  
        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Species Identification")}>
        <Text style={styles.text}>{species}</Text>
        </Pressable>
        </View>        
        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("Application Help")}>
        <Text style={styles.text}>{help}</Text>
        </Pressable>
        </View>    
        <View style ={{marginBottom:20}}>
        <Pressable style={styles.button} onPress={() => console.log("FAQ")}>
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

  export default FAQ; 