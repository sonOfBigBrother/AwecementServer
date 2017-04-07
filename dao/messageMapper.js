/**
 * Created by David Xie on 2017/4/7.
 * Sql sentence for CURD
 */
export default {
  insert: 'insert into message(del_mark, title, content, publisher, creation_time) values(0, ?, ?, ?, Now())',
  delete: 'update message set del_mark = 1 where id = ?',
  update: 'update message set title = ?, content = ?, creation_time = ? where id = ?',
  getMsgForEmployee: 'select title, content ' +
  'from (select id from project where plant = ? ) as T,message as M' +
  'where T.id = M.project_id and M.del_mark = 0' +
  'order by creation_time',
  getMsgForResearcher:'select M.title, content ' +
  'from message as M, subject as S ' +
  'where M.project_id = S.subject_to and S.name = ? and M.del_mark = 0 ' +
  'order by creation_time',
  getMsgForPublisher: 'select * from message where del_mark = 0 and publisher = ?'
}
