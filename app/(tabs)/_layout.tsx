import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen name="characters" />
      <Tabs.Screen name="mobs" />
      <Tabs.Screen name="items" />
      <Tabs.Screen name="food" />
    </Tabs>
  );
};

export default TabsLayout;
