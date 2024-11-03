import {StyleSheet, Text, View} from 'react-native';
import {MD3Theme, useTheme} from "react-native-paper";

export default function NewProjectModal() {
  const theme = useTheme();
  const themedStyles = styles(theme);

  return (
    <View style={themedStyles.page}>
      <Text>Modal screen</Text>
    </View>
  );
}

const styles = (theme: MD3Theme) => StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },
});
