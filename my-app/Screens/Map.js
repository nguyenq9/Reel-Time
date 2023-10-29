import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
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
      />
    </View>
  );
}

export default Map;
