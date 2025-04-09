import { Stack } from "expo-router";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import "react-native-reanimated";
import "./global.css";
import { db, openDb } from "@/db/connection";
import migrations from "../drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { seedDatabase } from "@/db/seed";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  useDrizzleStudio(openDb);
  useEffect(() => {
    if (success) {
      seedDatabase();
    }
  }, [success]);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
