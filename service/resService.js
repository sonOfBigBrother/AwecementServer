/**
 * Created by David Xie on 2017/4/9.
 */
import pool from '../util/sqlUtil'
import researchMapper from '../dao/researchMapper'
import {reqUtil} from '../util/repUtil'

export default {
  publish(req, res, next){
    pool.getConnection(function (err, connection) {
      let research = [new Date().toLocaleString(), req.body.title,
        req.body.location, req.body.target, new Date(req.body.start_date),
        new Date(req.body.end_date), req.body.publisher, req.body.receiver];
      connection.query(researchMapper.insert, research, function (err, result) {
        if (result){
          result = {
            code:200,
            msg:'发布任务成功'
          };
        }
        reqUtil.responseToFont(res, result);
        connection.release();
      });
    })
  },
  accept(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.accept, [new Date().toLocaleString(),req.query.id], function (err, result) {
        if (result){
          result = {
            code:200,
            msg:'接受任务'
          };
        }
        reqUtil.responseToFont(res, result);
        connection.release();
      });
    })
  },
  refuse(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.refuse, req.query.id, function (err, result) {
        if (result){
          result = {
            code:200,
            msg:'拒绝任务'
          };
        }
        reqUtil.responseToFont(res, result);
        connection.release();
      });
    })
  },
  delete(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.delete, req.query.id, function (err, result) {
        if (result){
          result = {
            code:200,
            msg:'删除任务'
          };
        }
        reqUtil.responseToFont(res, result);
        connection.release();
      });
    })
  }
}