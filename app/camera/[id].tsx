import {StyleSheet} from "react-native";
import {Camera, useCameraDevice, useCameraPermission} from "react-native-vision-camera";

export default function CameraPage() {
  const device = useCameraDevice('back')
  const {hasPermission} = useCameraPermission()

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device!}
      isActive={true}
    />
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  }
})