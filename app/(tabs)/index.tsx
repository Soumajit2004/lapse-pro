import {Surface, Text} from "react-native-paper";
import {StyleSheet} from "react-native";

export default function Tab() {
  return (
    <Surface style={styles.container}>
      <Text>Hello</Text>
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
