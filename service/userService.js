/**
 * Created by David Xie on 2017/3/31.
 */
import mysql from 'mysql'
import conf from '/conf/db'
import sqlUtil from '/util/sqlUtil'
import userMapper from '../dao/userMapper'

//use connection pool
const pool = mysql.createPool(sqlUtil.extend({}, conf.mysql));

//return data to the fond end
const responseToFont = function (res, ret) {
  if (typeof ret === undefined) {
    res.json({
      code:'1',
      msg:'操作失败'
    });
  } else {
    res.json(ret);
  }
};

export const userDao = {
  add(req, res, next) {
    pool.getConnection(function (err, connection) {
      //get parameter from font end
      let param = req.query || req.params;

      //set up a connection
      //insert data
      connection.query(userMapper.insert,
        [1, param.username, param.password, param.roleId, param.fromWhere],
        function (err, result){
        if (result){
          result = {
            code:200,
            msg:'添加用户成功'
          };
        }

        responseToFont(res, result);

        connection.release();
        });
    })
  }
};
