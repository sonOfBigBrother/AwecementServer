/**
 * Created by David Xie on 2017/3/31.
 */
import mysql from 'mysql'
import conf from '../conf/db'
module.exports = {
  pool:mysql.createPool(conf.mysql)
};