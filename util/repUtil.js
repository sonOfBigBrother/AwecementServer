/**
 * Created by David Xie on 2017/4/8.
 */
export const reqUtil = {
  responseToFont(res, ret) {
    if (typeof ret === undefined) {
      res.json({
        code: 1,
        msg:'操作失败'
      });
    } else {
      res.json(ret);
    }
  }
};


