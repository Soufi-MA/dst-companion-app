import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Items = () => {
  const router = useRouter();

  return (
    <View>
      <Text>
        {[1, 2].map((c) => (
          <Button
            key={c}
            onPress={() => {
              router.push(`/items/${c}`);
            }}
            title={`Item ${c}`}
          />
        ))}
      </Text>
    </View>
  );
};

export default Items;
