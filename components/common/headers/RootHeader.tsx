import React from 'react'
import {StyleSheet} from 'react-native'
import {Appbar, AppbarProps} from 'react-native-paper'


export default function RootHeader(props: AppbarProps) {
  return <Appbar.Header {...props}>
    <Appbar.Content
      title={"Lapse Pro"}
      titleStyle={styles.titleStyle}
    />
  </Appbar.Header>
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})