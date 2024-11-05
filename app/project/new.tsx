import {StyleSheet, View} from 'react-native';
import {Button, MD3Theme, TextInput, useTheme} from "react-native-paper";
import {Controller, useForm} from "react-hook-form";
import ProjectsController from "@/database/controllers/project.controller";
import {router} from "expo-router";

type CreateProjectFormData = {
  title: string;
};

export default function New() {
  const theme = useTheme();
  const themedStyles = styles(theme);

  const {control, handleSubmit} = useForm<CreateProjectFormData>({
    defaultValues: {
      title: '',
    }
  });

  const onSubmit = async (data: CreateProjectFormData) => {
    try {
      const project = await ProjectsController.save(data.title)

      if (!project.id) {
        console.error('Error saving project')
        return
      }

      router.push(`/project/open-project/${project.id}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={themedStyles.page}>
      <View style={themedStyles.formContainer}>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Project Name"
              mode={"outlined"}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
          name="title"
        />

        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Save
        </Button>
      </View>

    </View>
  );
}

const styles = (theme: MD3Theme) => StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  formContainer: {
    height: 200,
    width: '100%',
    gap: 15,
    padding: 15,
  }
});
