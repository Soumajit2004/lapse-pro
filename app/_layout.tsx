import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {MD3DarkTheme, MD3Theme, PaperProvider} from "react-native-paper";
import StackHeader from "@/components/common/headers/StackHeader";

import "@/database"
import darkTheme from "@/constants/dark.theme";

const theme: MD3Theme = {
  ...MD3DarkTheme,
  colors: darkTheme.colors
};

export default function RootLayout() {

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{
        header: (props) => <StackHeader navProps={props} children={undefined}/>
      }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="project" options={{headerShown: false}}/>
      </Stack>
    </PaperProvider>
  );
}