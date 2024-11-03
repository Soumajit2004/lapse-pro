import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {StyleSheet} from "react-native";
import {MD3DarkTheme, MD3Theme, PaperProvider} from "react-native-paper";
import darkTheme from "@/constants/darkTheme";
import StackHeader from "@/components/common/headers/StackHeader";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "@/model/schema";
import migrations from "@/model/migrations";
import {Database} from "@nozbe/watermelondb";

const theme: MD3Theme = {
  ...MD3DarkTheme,
  colors: darkTheme.colors
};

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true, /* Platform.OS === 'ios' */
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})

const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
})

export default function RootLayout() {

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{
        header: (props) => <StackHeader navProps={props} children={undefined}/>
      }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen
          name="newProjectModal"
          options={{
            presentation: 'modal',
            headerTitle: 'New Project',
          }}
        />
      </Stack>
    </PaperProvider>
  );
}