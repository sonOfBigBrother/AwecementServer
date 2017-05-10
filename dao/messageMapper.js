/**
 * Created by David Xie on 2017/4/7.
 * Sql sentence for CURD
 */
export default {
  insert: 'insert into message(del_mark, creation_time, msg_title, msg_content, publisher, project_name) values(0, ?, ?, ?, ?, ?)',
  delete: 'update message set del_mark = 1 where id = ?',
  update: 'update message set msg_title = ?, msg_content = ?, creation_time = ? where id = ?',
  getMsgForEmployee: 'select message.id as id, msg_title, msg_content ' +
  'from message join project on message.project_name = project.name' +
  ' where plant = ? and del_mark = 0 ' +
  'order by creation_time desc',
  getMsgForResearcher:'select distinct M.id , M.msg_title, M.msg_content ' +
  'from message as M, subject as S ' +
  'where M.project_name = S.subject_to and S.name = ? and M.del_mark = 0 ' +
  'order by creation_time desc',
  getMsgForPublisher: 'select * from message where del_mark = 0 and publisher = ? ' +
  'order by creation_time desc'
}
