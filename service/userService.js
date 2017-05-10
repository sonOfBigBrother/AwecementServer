/**
 * Created by David Xie on 2017/3/31.
 */
import pool from '../util/sqlUtil'
import userMapper from '../dao/userMapper'
import {reqUtil} from '../util/repUtil'
import cryptoUtil from '../util/cryptoUtil'
import jwt from 'jsonwebtoken'
import Constant from '../util/Constant'

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
    let password = cryptoUtil(req.body.password);
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(userMapper.queryByName, [username], function (error, result, fields) {
        try{
          if (result[0].password === password){
            let token = jwt.sign(result[0],Constant.secret, {
              expiresIn: "2 days"
            });
            req.session.user =result[0];
            result = {
              code:200,
              msg:'验证成功',
              token:token,
              roleId:req.session.user.role_id,
              fromWhere:req.session.user.from_where,
            };
          } else {
            result = {
              code:1,
              msg:'密码错误'
            };
          }
        } catch (error){
          result = {
              code:1,
              msg:'用户不存在'
          };

        }

        reqUtil.responseToFont(res, result);
        connection.release();
      });

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
