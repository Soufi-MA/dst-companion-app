import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Food = () => {
  const router = useRouter();

  return (
    <View>
      <Text>
        {[1, 2, 3, 4, 5, 6, 7].map((c) => (
          <Button
            key={c}
            onPress={() => {
              router.push(`/food/${c}`);
            }}
            title={`Food ${c}`}
          />
        ))}
      </Text>
    </View>
  );
};

export default Food;
