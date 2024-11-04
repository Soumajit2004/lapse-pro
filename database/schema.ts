import {appSchema, tableSchema} from '@nozbe/watermelondb'
import TABLE_NAME from "@/constants/tablenames";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TABLE_NAME.project,
      columns: [
        {name: 'title', type: 'string'},
      ]
    }),
  ]
})