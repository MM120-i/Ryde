// MAP RENDERING IS GIVING ISSUES WTF

import { calculateRegion } from "@/lib/map";
import { useLocationStore } from "@/store";
import React from "react";
import { Text, View } from "react-native";

const Map = () => {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  return (
    // <MapView
    //   provider={PROVIDER_DEFAULT}
    //   style={{ width: "70%", height: 100 }}
    //   initialRegion={region}
    //   tintColor="black"
    //   mapType="standard"
    //   showsPointsOfInterest={false}
    //   showsUserLocation={true}
    //   userInterfaceStyle="light"
    // >

    // </MapView>

    <View className="w-full h-full rounded-2xl">
      <Text>Map</Text>
    </View>
  );
};

export default Map;
