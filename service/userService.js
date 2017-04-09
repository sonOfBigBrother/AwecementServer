/**
 * Created by David Xie on 2017/3/31.
 */
import pool from '../util/sqlUtil'
import userMapper from '../dao/userMapper'
import {reqUtil} from '../util/repUtil'
import User from '../entity/User'
//return data to the fond end

export default {
  addUser(req, res, next) {
    pool.getConnection(function (err, connection) {
      let user = [req.body.username,req.body.password,
        req.body.roleId,req.body.fromWhere,];

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

        reqUtil.responseToFont(res, result);

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
          req.session.user = results[0];
          let name = req.session.user.username;
          res.render('home', {username:name, password:password});
        }
      });
      connection.release();
    });
  },
  updateUser(req, res, next) {
    pool.getConnection(function (err, connection) {
      //set up a connection
      //insert data
      connection.query(userMapper.insert, [req.body.password],
        function (err, result){
          if (result){
            result = {
              code:200,
              msg:'修改用户成功'
            };
          }

          reqUtil.responseToFont(res, result);

          connection.release();
        });
    })
  },
};
