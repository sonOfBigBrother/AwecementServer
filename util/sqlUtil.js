/**
 * Created by David Xie on 2017/3/31.
 */
import mysql from 'mysql'
import conf from '../conf/db'
const pool = mysql.createPool(conf.mysql);

export default pool;