import {Stack} from "expo-router";
import StackHeader from "@/components/common/headers/StackHeader";

export default function ProjectLayout() {

  return (
    <Stack screenOptions={{
      header: (props) => <StackHeader navProps={props} children={undefined}/>
    }}>
      <Stack.Screen
        name="new"
        options={{
          presentation: 'modal',
          headerTitle: 'New Project',
        }}
      />
    </Stack>
  );
}