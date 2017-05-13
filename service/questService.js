/**
 * Created by David Xie on 2017/4/11.
 */
import pool from '../util/sqlUtil'
import questMapper from '../dao/questionnaireMapper'
import {reqUtil} from '../util/repUtil'
import {removeEscape} from '../util/stringUtil';

export default {
  queryAllForEmployee(req, res, next){
    pool.getConnection(function(err, connection){
      connection.query(questMapper.queryAllForEmployee, req.api_user.username, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  },
  queryAllForManInCharge(req, res, next){
    pool.getConnection(function(err, connection){
      connection.query(questMapper.queryAllForManInCharge, req.api_user.username, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }

        connection.release();
      });
    })
  },
  queryAllForResearcher(req, res, next){
    pool.getConnection(function(err, connection){
      connection.query(questMapper.queryAllForResearcher, req.api_user.username, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }

        connection.release();
      });
    })
  },
  queryByConditionForEmployee(req, res, next){
    let sql = 'select * from questionnaire ' +
      'where del_mark = 0 and receiver = '
      + pool.escape(req.api_user.username);
    let productionCapacity = removeEscape(req.body.productionCapacity);
    let province = removeEscape(req.body.province);
    let inviter = removeEscape(req.body.inviter);
    let creationTime = removeEscape(req.body.creationTime);
    let submissionTime = removeEscape(req.body.submissionTime);
    if (productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(productionCapacity));
    }
    if (inviter) {
      sql += (' and inviter = ' + pool.escape(inviter));
    }
    if (creationTime){
      sql += (' and creation_time >= ' + pool.escape(creationTime));
    }
    if (submissionTime){
      sql += (' and submission_time <= ' + pool.escape(submissionTime));
    }
    if (province){
      sql += (' and province = ' + pool.escape(province));
    }
    pool.getConnection(function(err, connection){
      connection.query(sql, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }

        connection.release();
      });
    })
  },
  queryByConditionForResearcher(req, res, next){
    let sql = 'select * from questionnaire ' +
      'where del_mark = 0 and inviter = '
      + pool.escape(req.api_user.username);
    let productionCapacity = removeEscape(req.body.productionCapacity);
    let province = removeEscape(req.body.province);
    let receiver = removeEscape(req.body.receiver);
    let creationTime = removeEscape(req.body.creationTime);
    let submissionTime = removeEscape(req.body.submissionTime);
    if (productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(productionCapacity));
    }
    if (province){
      sql += (' and province = ' + pool.escape(province));
    }
    if (receiver) {
      sql += (' and receiver = ' + pool.escape(receiver));
    }
    if (creationTime){
      sql += (' and creation_time >= ' + pool.escape(creationTime));
    }
    if (submissionTime){
      sql += (' and submission_time <= ' + pool.escape(submissionTime));
    }
    pool.getConnection(function(err, connection){
      connection.query(sql, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }

        connection.release();
      });
    })
  },
  queryByConditionForManInCharge(req, res, next){
    let sql = questMapper.queryForManInCharge + pool.escape(req.api_user.username);
    let productionCapacity = removeEscape(req.body.productionCapacity);
    let province = removeEscape(req.body.province);
    let inviter = removeEscape(req.body.inviter);
    let receiver = removeEscape(req.body.receiver);
    let creationTime = removeEscape(req.body.creationTime);
    let submissionTime = removeEscape(req.body.submissionTime);
    if (productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(productionCapacity));
    }
    if (province){
      sql += (' and province = ' + pool.escape(province));
    }
    if (inviter) {
      sql += (' and inviter = ' + pool.escape(inviter));
    }
    if (receiver) {
      sql += (' and receiver = ' + pool.escape(receiver));
    }
    if (creationTime){
      sql += (' and creation_time >= ' + pool.escape(creationTime));
    }
    if (submissionTime){
      sql += (' and submission_time <= ' + pool.escape(submissionTime));
    }
    pool.getConnection(function(err, connection){
      connection.query(sql, function (err, result) {
        if (result){
          reqUtil.responseToFont(res, result);
        }
        connection.release();
      });
    })
  }
}