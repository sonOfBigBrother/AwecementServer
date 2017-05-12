/**
 * Created by David Xie on 2017/4/9.
 */
import pool from '../util/sqlUtil';
import researchMapper from '../dao/researchMapper';
import {reqUtil} from '../util/repUtil';
import upload from '../util/upload';
import fs from 'fs';

export default {
  publish(req, res, next){
    pool.getConnection(function (err, connection) {
      let research = [new Date().toLocaleString(), req.body.title,
        req.body.location, req.body.target, new Date(req.body.startDate),
        new Date(req.body.endDate), req.api_user.username, req.body.receiver];
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
      connection.query(researchMapper.refuse, [req.query.rejectedReason, new Date().toLocaleString(), req.query.id], function (err, result) {
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
  },
  queryForReceiver(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryForReceiver, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryAcceptedForReceiver(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryAcceptedForReceiver, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryRefusedForReceiver(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryRefusedForReceiver, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryForPublisher(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryForPublisher, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryAcceptedForPublisher(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryAcceptedForPublisher, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryRefusedForPublisher(req, res, next){
    pool.getConnection(function (err, connection) {
      connection.query(researchMapper.queryRefusedForPublisher, [req.api_user.username], function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  commit(req, res, next){
    upload.parse(req, function (err, fields, files) {
      if (err) {
        res.locals.error = err;
        return;
      }
      let extName = '';  //后缀名
      switch (files.file.type) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case  'image/jpg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }

      if(extName.length == 0){
        res.locals.error = '只支持png和jpg格式图片';
        return;
      }

      let avatarName = Math.random() + '.' + extName;
      let newPath = upload.uploadDir + avatarName;
      // fs.renameSync(files.file.name, newPath);//重命名
      pool.getConnection(function (err, connection) {
        connection.query(researchMapper.commit, [newPath, fields.content, req.api_user.username,fields.id], function (err, result) {
          if (result){
            result={
              msg:'操作成功',
              code:200
            }
          }
          reqUtil.responseToFont(res, result);
          connection.release();
        });
      })
    });
  }
}