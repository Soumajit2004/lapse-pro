import {getHeaderTitle} from '@react-navigation/elements'
import {NativeStackHeaderProps} from '@react-navigation/native-stack'
import React from 'react'
import {Appbar, AppbarProps, MD3Theme, useTheme} from 'react-native-paper'
import {StyleSheet} from "react-native";

interface StackHeaderProps extends AppbarProps {
  navProps: NativeStackHeaderProps
}

export default function StackHeader(props: StackHeaderProps) {
  const theme = useTheme()
  const themedStyles = styles(theme);

  return <Appbar.Header {...props}>
    {props.navProps.options.headerLeft
      ? props.navProps.options.headerLeft({
        canGoBack: props.navProps.navigation.canGoBack(),
      })
      : undefined}

    {props.navProps.back ? (
      <Appbar.BackAction onPress={props.navProps.navigation.goBack}/>
    ) : null}

    <Appbar.Content
      title={getHeaderTitle(props.navProps.options, props.navProps.route.name)}
      titleStyle={themedStyles.title}
    />

    {props.navProps.options.headerRight
      ? props.navProps.options.headerRight({
        canGoBack: props.navProps.navigation.canGoBack(),
      })
      : undefined}
  </Appbar.Header>
}

const styles = (theme: MD3Theme) => StyleSheet.create({
  title: {
    color: theme.colors.onBackground,
    fontSize: 20,
    fontWeight: '700',
  }
})