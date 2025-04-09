import { Tabs, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MobPage = () => {
  const { foodId } = useLocalSearchParams();

  return (
    <View>
      <Tabs.Screen options={{ headerShown: true }} />
      <Text>{foodId}</Text>
    </View>
  );
};

export default MobPage;
