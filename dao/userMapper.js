/**
 * Created by David Xie on 2017/3/31.
 * CURD Sql sentences
 */
export default  {
  insert: 'insert into user(del_mark, username, password, role_id, from_where) values(0,?,?,?,?)',
  delete: 'update user set del_mark = ? where id = ?',
  update: 'update user set username = ?, password = ? where id = ?',
  queryById: 'select * from user where id = ?',
  queryAll: 'select * from user',
  queryByName:'select * from user where username = ?'
};
