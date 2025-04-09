import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Button onPress={() => router.push("/(tabs)/characters")} title="Tabs" />
    </View>
  );
}
