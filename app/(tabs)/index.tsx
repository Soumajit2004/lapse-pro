import {Surface, Text, useTheme} from "react-native-paper";
import {StyleSheet} from "react-native";

export default function Tab() {
  const {colors} = useTheme();

  return (
    <Surface style={{backgroundColor: colors.surface, ...styles.container}}>
      <Text>Hello World</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
