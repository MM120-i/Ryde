import React from "react";
import { Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region = {};

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ width: "100%", height: 300 }}
      initialRegion={{
        latitude: 43.7731,
        longitude: -79.2578,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      tintColor="black"
      mapType="standard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
