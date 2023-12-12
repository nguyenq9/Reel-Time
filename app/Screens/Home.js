import * as React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const [name, SetName] = React.useState('');
  const isFocused = useIsFocused();

  async function getName() {
    var specificId;
      try {
        specificId = JSON.parse(await AsyncStorage.getItem('user'));
      } catch (error) {
        console.log(error);
      }
      SetName(specificId.toUpperCase());
  }
  
  useEffect(() => {
    if(isFocused) {
      getName();
    }
  }, [isFocused]); //entries

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://e0.pxfuel.com/wallpapers/266/422/desktop-wallpaper-sea-fishing-iphone-ocean-fishing-boat.jpg",
        }}
        style={styles.image}
      >
        <Text style={styles.text}>REEL TIME</Text>
        <Text style={styles.textBox}>{name}{"\n"}
          <Text style={styles.license}>{"\n"}Recreational Saltwater License Valid until: {"\n"}April 2024{"\n"}</Text>
          <Text style={styles.license}>{"\n"}Recreational Freshwater License Valid until: {"\n"}April 2024{"\n"}</Text>
          <Text style={styles.license}>{"\n"}Recreational Shellfish License Valid until: {"\n"}April 2024{"\n"}</Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 50,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 160
    // backgroundColor: "#000000c0",
  },
  textBox: {
    color: "black",
    fontSize: 22,
    // lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  license: {
    color: "black",
    fontSize: 15,

  }
});

export default Home;
