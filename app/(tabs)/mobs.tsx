import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Mobs = () => {
  const router = useRouter();

  return (
    <View>
      <Text>
        {[1, 2, 3, 4, 5, 6].map((c) => (
          <Button
            key={c}
            onPress={() => {
              router.push(`/mobs/${c}`);
            }}
            title={`Mob ${c}`}
          />
        ))}
      </Text>
    </View>
  );
};

export default Mobs;
