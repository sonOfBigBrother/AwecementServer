/**
 * Created by David Xie on 2017/4/7.
 */
export default {
  insert: 'insert into research(del_mark, received, creation_time, title, location,' +
  ' target, start_date, end_date, publisher, receiver) values(0,' +
  ' 0, ?, ?, ?, ?, ?, ?, ?, ?)',
  accept:'update research set received = 1,received_time = ? where id = ?',
  refuse:'update research set received = -1 where id = ?',
  commit: 'update research set photo = ?, received_time = ?,' +
  ' received = 1 where receiver = ?',
  delete: 'update research set del_mark = 1 where id = ?',
  queryForReceiver:'select * from research where received = 0 ' +
  'and del_mark = 0 and receiver = ?' +
  'order by creation_time',
  queryAcceptedOnes:'select * from research where received = 1' +
  'and del_mark = 0 and receiver = ?' +
  'order by received_time desc',
  queryForPublisher:'select * from research where del_mark = 0' +
  'and publisher = ? order by creation_time'
}