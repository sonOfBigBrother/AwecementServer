import express from 'express'
import userService from '../service/userService'

let router = express.Router();

router.post('/addUser',function (req, res, next) {
  userService.addUser(req, res, next);
});
export default router