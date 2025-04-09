import { db } from "@/db/connection";
import { getAllCharacters } from "@/db/queries";
import { Character, characters } from "@/db/schema";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const Characters = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const allCharacters = await getAllCharacters();
        setCharacters(allCharacters);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);
  if (loading) return <Text>Loading...</Text>;
  return (
    <View>
      <Text>
        {characters.map((c) => (
          <Button
            key={c.id}
            onPress={() => {
              router.push(`/characters/${c.id}`);
            }}
            title={c.name}
          />
        ))}
      </Text>
    </View>
  );
};

export default Characters;
