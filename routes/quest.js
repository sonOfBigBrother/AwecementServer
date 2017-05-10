/**
 * Created by David Xie on 2017/4/11.
 */
import express from 'express'
import questService from '../service/questService'
const router = express.Router();

router.get('/invitee/query',function (req, res, next) {
  questService.queryAllForEmployee(req, res, next);
});
router.get('/manager/query', function (req, res, next) {
  questService.queryAllForManInCharge(req, res, next);
});
router.get('/inviter/query', function (req, res, next) {
  questService.queryAllForResearcher(req, res, next);
});
router.post('/invitee/queryByCondition', function (req, res, next) {
  questService.queryByConditionForEmployee(req, res, next);
});
router.post('/inviter/queryByCondition', function (req, res, next) {
  questService.queryByConditionForResearcher(req, res, next);
});
router.post('/manager/queryByCondition', function (req, res, next) {
  questService.queryByConditionForManInCharge(req, res, next)
});
export default router;