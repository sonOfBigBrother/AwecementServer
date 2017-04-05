/**
 * Created by David Xie on 2017/4/4.
 */
import express from 'express'
import userService from '../service/userService'

let router = express.Router();

router.post('/',function (req, res, next) {
  userService.checkUser(req, res, next);
});
export default router
