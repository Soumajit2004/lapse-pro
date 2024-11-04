import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "@/database/schema";
import migrations from "@/database/migrations";
import {Database} from "@nozbe/watermelondb";
import {Platform} from "react-native";
import ProjectModel from "@/database/models/Project.model";

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  dbName: 'defaultDB',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: Platform.OS === 'ios',
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})

export const database = new Database({
  adapter,
  modelClasses: [
    ProjectModel
  ],
})