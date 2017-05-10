/**
 * Created by David Xie on 2017/4/17.
 */
import jwt from 'jsonwebtoken'
import Constant from '../util/Constant'

export default function (req, res, next) {
  let token = req.body.token || req.query.token || req.headers['authorization'];
  if (token){
    // 确认token
    jwt.verify(token, Constant.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'token I have a dream' });
      } else {
        // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
        req.api_user = decoded;
        console.dir(req.api_user);
        next();
      }
    });
  } else {
    // 如果没有token，则返回错误
    return res.status(403).send({
      success: false,
      message: '没有提供token！'
    });
  }
}