import {Divider, MD3Theme, Text, useTheme} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import ActionButtonsSection from "@/components/homeScreen/ActionButtonsSection";

export default function Tab() {
  const theme = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.container}>
      <ActionButtonsSection/>

      <Divider style={themedStyles.divider}/>

      <View style={{flex: 1, width: "100%", padding: 15}}>
        <Text variant={"titleMedium"}>Recent Projects</Text>
      </View>
    </View>
  );
}

const styles = ({colors}: MD3Theme) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems:
      'center',
  },
  divider: {
    width: "50%",
    marginVertical: 5,
  },
});
