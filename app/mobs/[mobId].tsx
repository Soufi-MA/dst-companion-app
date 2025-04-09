import { Tabs, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MobPage = () => {
  const { mobId } = useLocalSearchParams();

  return (
    <View>
      <Tabs.Screen options={{ headerShown: true }} />
      <Text>{mobId}</Text>
    </View>
  );
};

export default MobPage;
