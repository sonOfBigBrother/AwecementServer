/**
 * Created by David Xie on 2017/4/11.
 */
const sql = 'select Q.id as id, title, inviter, receiver, creation_time,' +
  ' submission_time, project_name, production_capacity, province from questionnaire as Q join project on Q.project_name = project.name' +
  ' where del_mark = 0 and project.man_in_charge =';
export default {
  queryAllForEmployee:'select * from questionnaire where del_mark = 0 and receiver = ?',
  queryAllForResearcher:'select * from questionnaire where del_mark = 0 and inviter = ?',
  queryAllForManInCharge: sql + '?',
  queryForManInCharge:sql
}