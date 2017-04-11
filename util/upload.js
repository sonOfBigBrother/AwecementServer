/**
 * Created by David Xie on 2017/4/11.
 */
import formidable from 'formidable'

const form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = 'uploads/';
form.keepExtensions = true;
form.maxFieldsSize = 2 * 1024 * 1024;
export default form;