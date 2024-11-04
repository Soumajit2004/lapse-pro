import {Model} from "@nozbe/watermelondb";
import {text} from "@nozbe/watermelondb/decorators";
import TABLE_NAME from "@/constants/tablenames";

export default class ProjectModel extends Model {
  static table = TABLE_NAME.project

  // @ts-ignore
  @text('title') title!: string;
}