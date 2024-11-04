import {StyleSheet, View} from 'react-native';
import {Button, MD3Theme, TextInput, useTheme} from "react-native-paper";
import {Controller, useForm} from "react-hook-form";
import ProjectsController from "@/database/controllers/project.controller";

type CreateProjectFormData = {
  title: string;
};

export default function New() {
  const theme = useTheme();
  const themedStyles = styles(theme);

  const {control, handleSubmit, formState: {errors}} = useForm<CreateProjectFormData>({
    defaultValues: {
      title: '',
    }
  });

  const onSubmit = async (data: CreateProjectFormData) => {
    try {
      await ProjectsController.save(data.title)
    } catch (e) {

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
