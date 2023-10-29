import * as React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://e0.pxfuel.com/wallpapers/266/422/desktop-wallpaper-sea-fishing-iphone-ocean-fishing-boat.jpg",
        }}
        style={styles.image}
      >
        <Text style={styles.text}>REEL TIME</Text>
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
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 160
    // backgroundColor: "#000000c0",
  },
});

export default Home;
