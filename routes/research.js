/**
 * Created by David Xie on 2017/4/9.
 */
import express from 'express'
import resService from '../service/resService'

const router = express.Router();

router.post('/publisher/publish', function (req, res, next) {
  resService.publish(req, res, next);
});
router.get('/receiver/accept', function (req, res, next) {
  resService.accept(req, res, next);
});
router.get('/receiver/refuse', function (req, res, next) {
  resService.refuse(req, res, next);
});
router.get('/publisher/delete',function (req, res, next) {
  resService.delete(req, res, next);
});
export default router;