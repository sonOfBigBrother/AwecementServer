/**
 * Created by David Xie on 2017/4/11.
 */
export default {
  queryAllForEmployee:'select * from questionnaire where del_mark = 0 and receiver = ?',
  queryAllForResearcher:'select * from questionnaire where del_mark = 0 and inviter = ?',
  queryAllForManInCharge:'select * from questionnaire join project on questionnaire.project_id = project.id' +
  ' where del_mark = 0 and project.man_in_charge = ?'
}