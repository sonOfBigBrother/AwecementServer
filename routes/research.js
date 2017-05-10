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
router.get('/receiver/query', function (req, res, next) {
  resService.queryForReceiver(req, res, next);
});
router.get('/receiver/queryAccepted', function (req, res, next) {
  resService.queryAcceptedForReceiver(req, res, next);
});
router.get('/receiver/queryRefused', function (req, res, next) {
  resService.queryRefusedForReceiver(req, res, next);
});
router.get('/publisher/query', function (req, res, next) {
  resService.queryForPublisher(req, res, next);
});
router.get('/publisher/queryAccepted', function (req, res, next) {
  resService.queryAcceptedForPublisher(req, res, next);
});
router.get('/publisher/queryRefused', function (req, res, next) {
  resService.queryRefusedForPublisher(req, res, next);
});
router.post('/receiver/commit', function (req, res, next) {
  resService.commit(req, res, next);
});
export default router;