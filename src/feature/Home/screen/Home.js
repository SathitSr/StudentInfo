import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#000" }}>Setup Project with Safe Area View</Text>
    </View>
  );
};

export default Home;
