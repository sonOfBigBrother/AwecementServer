/**
 * Created by David Xie on 2017/4/7.
 */
export default {
  insert: 'insert into research(del_mark, received, creation_time, title, content, location,' +
  ' target, start_date, end_date, publisher, receiver,) values(0,' +
  ' 0, Now(), ?, ?, ?, ?, ?, ?, ?, ?)',
  commit: 'update research set photo = ?, received_time = ?,' +
  ' received = 1 where receiver = ?',
  delete: 'update research set del_mark = 1 where id = ?',
  queryForReceiver:'select * from research where received = 0 ' +
  'and del_mark = 0 and receiver = ?' +
  'order by creation_time',
  queryForPublisher:'select * from research where del_mark = 0' +
  'order by creation_time'
}