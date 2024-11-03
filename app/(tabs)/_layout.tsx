import {Tabs} from 'expo-router';
import {Icon, useTheme} from "react-native-paper";
import CustomBottomTabBar from "@/components/common/tabBars/BottomTabBar";
import RootHeader from "@/components/common/headers/RootHeader";

export default function TabLayout() {
  const {colors: themeColors} = useTheme()

  return (
    <Tabs tabBar={(props) => <CustomBottomTabBar {...props}/>} screenOptions={{
      headerTitle: "Lapse Pro",
      header: () => <RootHeader children={null}/>
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon size={28} source={"home"} color={themeColors.primary}/>,
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: () => <Icon size={28} source={"play-box-multiple"} color={themeColors.primary}/>,
        }}
      />
      <Tabs.Screen
        name="import"
        options={{
          title: 'Import',
          tabBarIcon: () => <Icon size={28} source={"tray-arrow-down"} color={themeColors.primary}/>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => <Icon size={28} source={"cog"} color={themeColors.primary}/>,
        }}
      />
    </Tabs>
  );
}
