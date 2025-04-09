import { db } from "./connection";
import { characters, metadata } from "./schema";
import { eq } from "drizzle-orm";
import { seedData } from "./data";

export const seedDatabase = async () => {
  try {
    const versionCheck = await db
      .select()
      .from(metadata)
      .where(eq(metadata.key, "data_version"))
      .limit(1);
    const currentVersion =
      versionCheck.length > 0 ? versionCheck[0].value : null;

    if (currentVersion !== seedData.version) {
      await db.delete(characters);
      await db.insert(characters).values(seedData.characters);
      await db
        .insert(metadata)
        .values({ key: "data_version", value: seedData.version })
        .onConflictDoUpdate({
          target: metadata.key,
          set: { value: seedData.version },
        });
      console.log(`Database seeded with version ${seedData.version}`);
    } else {
      console.log(
        `Data version ${seedData.version} already applied, skipping...`
      );
    }
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
};
