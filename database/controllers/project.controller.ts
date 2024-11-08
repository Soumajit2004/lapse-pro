import {database} from "@/database";
import ProjectModel from "@/database/models/Project.model";
import TABLE_NAME from "@/constants/tablenames";

export const projects = database.collections.get<ProjectModel>(TABLE_NAME.project);

export default class ProjectsController {
  static async save(title: string) {
    await database.write(async () => {
      await projects.create(project => {
        project.title = title;
      });
    });
  }

}