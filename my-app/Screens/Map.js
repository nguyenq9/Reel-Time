import * as React from "react";
import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonCallout: {
    position: 'absolute',
    bottom: 50,
    left: 20, // Set the left position to your desired value
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: "white",
  },
  buttonCallout2: {
    position: 'absolute',
    bottom: 120,
    left: 20, // Set the left position to your desired value
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: "white",
  },
  buttonCallout3: {
    position: 'absolute',
    bottom: 190,
    left: 20, // Set the left position to your desired value
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: "white",
  },
  
});

function Map() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>Map Screens</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.769768,
          longitude: -122.485886,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showUserLocation={true}
        showsCompass={true}
      />
      <Pressable style={styles.buttonCallout} onPress={() => console.log("magnify MINUS")}>
                <MaterialCommunityIcons name="magnify-minus-outline" color={"black"} size={50} />
      </Pressable>

      <Pressable style={styles.buttonCallout2} onPress={() => console.log("magnify PLUS")}>
                <MaterialCommunityIcons name="magnify-plus-outline" color={"black"} size={50} />
      </Pressable>

      <Pressable style={styles.buttonCallout3} onPress={() => console.log("CREATING WAYPOINT")}>
                <MaterialCommunityIcons name="map-marker" color={"black"} size={50} />
      </Pressable>
    </View>
  );
}

export default Map;
