import { db } from "./connection";
import { characters } from "./schema";

export const getAllCharacters = async () => {
  try {
    const result = await db.select().from(characters);
    return result;
  } catch (error) {
    throw new Error(
      "Failed to fetch all characters: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
};
