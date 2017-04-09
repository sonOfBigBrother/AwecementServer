/**
 * Created by David Xie on 2017/4/8.
 */
import express from 'express'
import msgService from '../service/msgService'

let router = express.Router();

router.post('/addMsg',function (req, res, next) {
  msgService.addMsg(req, res, next);
});
router.get('/delMsg', function (req, res, next) {
  msgService.delMsg(req, res, next);
});
router.get('/publisher/getMsg', function (req, res, next) {
  msgService.getMsgForPublisher(req, res, next);
});
router.get('/employee/getMsg',function (req, res, next) {
  msgService.getMsgForEmployee(req, res, next);
});
router.get('/researcher/getMsg',function (req, res, next) {
  msgService.getMsgForResearcher(req, res, next);
});
router.post('/updateMsg', function (req, res, next) {
  msgService.updateMsg(req, res, next);
});
export default router;