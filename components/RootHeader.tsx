import React from 'react'
import {Appbar, AppbarProps} from 'react-native-paper'


const RootHeader = (props: AppbarProps) => {
  return <Appbar.Header {...props}>
    <Appbar.Content
      title={"Lapse Pro"}
    />
  </Appbar.Header>
}
export default RootHeader