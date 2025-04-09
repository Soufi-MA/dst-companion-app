import { Tabs, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CharacterPage = () => {
  const { characterId } = useLocalSearchParams();

  return (
    <View>
      <Tabs.Screen options={{ headerShown: true }} />
      <Text>{characterId}</Text>
    </View>
  );
};

export default CharacterPage;
