import {Pressable, StyleSheet, View} from "react-native";
import {Icon, MD3Theme, Text, useTheme} from "react-native-paper";
import {router} from "expo-router";

export default function ActionButtonsSection() {
  const theme = useTheme();

  const themedStyles = styles(theme);

  const handelNewProjectButton = () => {
    router.push('/project/new');
  }

  return (
    <View style={{flexDirection: 'row', gap: 15, padding: 15}}>
      <View style={themedStyles.buttonOuterContainer}>
        <Pressable style={themedStyles.buttonInnerContainer}
                   android_ripple={{color: theme.colors.primaryContainer}}
                   onPress={handelNewProjectButton}>
          <Icon size={35} source={"plus"} color={theme.colors.primary}/>
          <Text style={themedStyles.actionButtonText}>New Project</Text>
        </Pressable>
      </View>

      <View style={themedStyles.buttonOuterContainer}>
        <Pressable style={themedStyles.buttonInnerContainer}
                   android_ripple={{color: theme.colors.primaryContainer}}
                   onPress={() => console.log('Button pressed')}>
          <Icon size={35} source={'import'} color={theme.colors.primary}/>
          <Text style={themedStyles.actionButtonText}>Import</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = ({colors}: MD3Theme) => StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    flex: 1,
    aspectRatio: 1
  },
  buttonInnerContainer: {
    backgroundColor: colors.elevation.level1,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 15,
    borderRadius: 15,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  actionButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  }
})