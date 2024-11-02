import {Tabs} from 'expo-router';
import {Icon, MD3Colors} from "react-native-paper";
import renderBottomNavigationBar from "@/components/BottomTabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={renderBottomNavigationBar} screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon size={28} source={"home"} color={MD3Colors.primary50}/>,
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: () => <Icon size={28} source={"play-box-multiple"} color={MD3Colors.primary50}/>,
        }}
      />
      <Tabs.Screen
        name="import"
        options={{
          title: 'Import',
          tabBarIcon: () => <Icon size={28} source={"tray-arrow-down"} color={MD3Colors.primary50}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <Icon size={28} source={"cog"} color={MD3Colors.primary50}/>,
        }}
      />
    </Tabs>
  );
}
