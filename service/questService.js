/**
 * Created by David Xie on 2017/4/11.
 */
import pool from '../util/sqlUtil'
import questMapper from '../dao/questionnaireMapper'
import {reqUtil} from '../util/repUtil'

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
    if (req.body.productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(req.body.productionCapacity));
    }
    if (req.body.inviter) {
      sql += (' and inviter = ' + pool.escape(req.body.inviter));
    }
    if (req.body.creationTime){
      sql += (' and creation_time >= ' + pool.escape(req.body.creationTime));
    }
    if (req.body.submissionTime){
      sql += (' and submission_time <= ' + pool.escape(req.body.submissionTime));
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
    if (req.body.productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(req.body.productionCapacity));
    }
    if (req.body.province){
      sql += (' and province = ' + pool.escape(req.body.province));
    }
    if (req.body.receiver) {
      sql += (' and receiver = ' + pool.escape(req.body.receiver));
    }
    if (req.body.creationTime){
      sql += (' and creation_time >= ' + pool.escape(req.body.creationTime));
    }
    if (req.body.submissionTime){
      sql += (' and submission_time <= ' + pool.escape(req.body.submissionTime));
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
    let sql = 'select * from questionnaire join project ' +
      'on questionnaire.project_id = project.id where del_mark = 0 ' +
      'and man_in_charge = ' + pool.escape(req.api_user.username);
    if (req.body.productionCapacity){
      sql += (' and production_capacity >= ' + pool.escape(req.body.productionCapacity));
    }
    if (req.body.province){
      sql += (' and province = ' + pool.escape(req.body.province));
    }
    if (req.body.inviter) {
      sql += (' and inviter = ' + pool.escape(req.body.inviter));
    }
    if (req.body.receiver) {
      sql += (' and receiver = ' + pool.escape(req.body.receiver));
    }
    if (req.body.creationTime){
      sql += (' and creation_time >= ' + pool.escape(req.body.creationTime));
    }
    if (req.body.submissionTime){
      sql += (' and submission_time <= ' + pool.escape(req.body.submissionTime));
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