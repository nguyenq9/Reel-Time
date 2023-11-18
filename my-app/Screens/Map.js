import * as React from "react";
import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonCallout: {
    position: "absolute",
    bottom: 50,
    left: 20, // Set the left position to your desired value
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
  },
  buttonCallout2: {
    position: "absolute",
    bottom: 120,
    left: 20, // Set the left position to your desired value
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
  },
  buttonCallout3: {
    position: "absolute",
    bottom: 190,
    left: 20, // Set the left position to your desired value
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "white",
  },
});

function Map() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = React.useState(48.769768);
  const [longitude, setLongitude] = React.useState(-122.485886);
  const [markers, setMarkers] = React.useState([]);
  const [createMarker, setCreateMarker] = React.useState(false);

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
        onPress={(event) => {
          if (createMarker) {
            setLatitude(event.nativeEvent.coordinate.latitude);
            setLongitude(event.nativeEvent.coordinate.longitude);
            setMarkers((markers) => [
              ...markers,
              {
                latitude: latitude,
                longitude: longitude,
              },
            ]);
            setCreateMarker(false);
          }
        }}
      >
        {/* <Marker coordinate={{ latitude: latitude, longitude: longitude }} /> */}
        {markers.map((marker, index) => {
            return <Marker key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}} />;
          })}
      </MapView>

      <Pressable
        style={styles.buttonCallout}
        onPress={() => console.log("magnify MINUS")}
      >
        <MaterialCommunityIcons
          name="magnify-minus-outline"
          color={"black"}
          size={50}
        />
      </Pressable>

      <Pressable
        style={styles.buttonCallout2}
        onPress={() => console.log("magnify PLUS")}
      >
        <MaterialCommunityIcons
          name="magnify-plus-outline"
          color={"black"}
          size={50}
        />
      </Pressable>

      <Pressable
        style={styles.buttonCallout3}
        onPress={() => {
          setCreateMarker(!createMarker);
          console.log("CREATING WAYPOINT " + createMarker);
        }}
      >
        <MaterialCommunityIcons name="map-marker" color={createMarker ? 'green' : "black"} size={50} />
      </Pressable>
    </View>
  );
}

export default Map;
