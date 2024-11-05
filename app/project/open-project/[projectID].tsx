import {StyleSheet, View} from "react-native";
import {MD3Theme, Text, useTheme} from "react-native-paper";
import {useLocalSearchParams} from "expo-router";

export default function OpenProject() {
  const theme = useTheme();
  const {projectID} = useLocalSearchParams();

  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.page}>
      <Text>{projectID}</Text>
    </View>
  )
}

const styles = ({colors}: MD3Theme) => StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  }
})