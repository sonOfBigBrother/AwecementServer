/**
 * Created by David Xie on 2017/4/12.
 */
import crypto from 'crypto'

export default function (val) {
  return crypto.createHash('sha1').update(val).digest('hex');
}