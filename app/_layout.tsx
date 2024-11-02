import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {MD3DarkTheme, PaperProvider} from "react-native-paper";
import StackHeader from "@/components/StackHeader";

const theme = {
  ...MD3DarkTheme,
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{
        headerTitle: "Lapse Pro",
        headerBackButtonMenuEnabled: false,
        header: (props) => <StackHeader navProps={props} children={null}/>
      }}>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </PaperProvider>
  );
}
