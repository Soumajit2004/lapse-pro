import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {MD3DarkTheme, PaperProvider} from "react-native-paper";
import StackHeader from "@/components/StackHeader";
import darkTheme from "@/constants/darkTheme";

const theme = {
  ...MD3DarkTheme,
  colors: darkTheme.colors
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </PaperProvider>
  );
}
