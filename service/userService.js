/**
 * Created by David Xie on 2017/3/31.
 */
import {pool} from '../util/sqlUtil'
import userMapper from '../dao/userMapper'

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

export default {
  addUser(user, res) {
    pool.getConnection(function (err, connection) {
      //set up a connection
      //insert data
      connection.query(userMapper.insert, user,
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
  },
  checkUser(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(userMapper.queryByName, [username], function (error, results, fields) {
        if (results[0].password === password){
          res.render('home');
        }
      });
      connection.release();
    });
  }
};
