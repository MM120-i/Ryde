import GoogleTextInput from "@/components/GoogleTextInput";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { recentRides } from "@/constants/recentRides";
import { useUser } from "@clerk/clerk-expo";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const { user } = useUser();
  const loading = true;

  // TODO
  const handleSignout = () => {};

  // TODO
  const handleDestinationPress = () => {};

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => {
          return (
            <View className="flex flex-col items-center justify-center">
              {!loading ? (
                <>
                  <Image
                    source={images.noResult}
                    className="w-40 h-40"
                    alt="No recent rides found"
                    resizeMode="contain"
                  />

                  <Text className="text-sm">No recent rides found</Text>
                </>
              ) : (
                <ActivityIndicator size={"small"} color={"#000"} />
              )}
            </View>
          );
        }}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl capitalize font-JakartaExtraBold">
                Welcome{", "}
                {user?.firstName ||
                  user?.emailAddresses[0].emailAddress.split("@")[0]}
              </Text>

              <TouchableOpacity
                onPress={handleSignout}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>

            {/* google text input */}
            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />

            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your Current Location
              </Text>

              <View className="flex flex-row items-center bg-transparent h-[300px]">
                {/* render the map */}
              </View>
            </>
          </>
        )}
      />
    </SafeAreaView>
  );
}
