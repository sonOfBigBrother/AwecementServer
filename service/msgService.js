/**
 * Created by David Xie on 2017/4/8.
 */
import pool from '../util/sqlUtil'
import msgMapper from '../dao/messageMapper'
import {reqUtil} from '../util/repUtil'

export default {
  addMsg(req, res, next){
    pool.getConnection(function(err, connection){
      let message = [new Date().toLocaleString(),req.body.title,
        req.body.content, req.body.publisher, req.body.projectId];
      connection.query(msgMapper.insert, message, function (err, result) {
        if (result){
          console.log(result);
          result = {
            code:200,
            msg:'添加信息成功'
          };
        }

        reqUtil.responseToFont(res, result);

        connection.release();
      });
    })
  },
  delMsg(req, res, next) {
    pool.getConnection(function (err, connection) {
      let msgId = req.query.id;
      connection.query(msgMapper.delete, [msgId], function (err, result) {
        if (result){
          result = {
            code:200,
            msg:'删除信息成功'
          };
        }

        reqUtil.responseToFont(res, result);

        connection.release();
      });
    })
  },
  getMsgForPublisher(req, res, next){
    pool.getConnection(function (err, connection) {
      let publisher = req.session.user.username;
      connection.query(msgMapper.getMsgForPublisher, [publisher], function (err, result, fields) {
        if (result) {
          for (let msg of result) {
            console.log(msg);
          }
        }
        connection.release();
      });
    })
  },
  getMsgForEmployee(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(msgMapper.getMsgForEmployee, [req.body.fromWhere], function (err, result, fields) {
        if (result) {
          for (let msg of result) {
            console.log(msg);
          }
        }
        connection.release();
      });
    })
  },
  getMsgForResearcher(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(msgMapper.getMsgForResearcher, [req.body.name], function (err, result, fields) {
        if (result) {
          for (let msg of result) {
            console.log(msg);
          }
        }
        connection.release();
      });
    })
  },
  updateMsg(req, res, next){
    pool.getConnection(function(err, connection){
      let message = [req.body.title,req.body.content,
        new Date().toLocaleString(),req.body.id];
      connection.query(msgMapper.update, message, function (err, result) {
        if (result){
          console.log(result);
          result = {
            code:200,
            msg:'更新信息成功'
          };
        }

        reqUtil.responseToFont(res, result);

        connection.release();
      });
    })
  },

}