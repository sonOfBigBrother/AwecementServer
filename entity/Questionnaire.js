/**
 * Created by David Xie on 2017/4/2.
 * Questionnaire entity
 */
class Questionnaire {
  constructor() {
    this._id = null;
    this._title = null;
    this._publisher = null;
    this._receiver = null;
    this._creationTime = null;
    this._submissionTime = null;
    this._delMark = 0;
  }


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get publisher() {
    return this._publisher;
  }

  set publisher(value) {
    this._publisher = value;
  }

  get receiver() {
    return this._receiver;
  }

  set receiver(value) {
    this._receiver = value;
  }

  get creationTime() {
    return this._creationTime;
  }

  set creationTime(value) {
    this._creationTime = value;
  }

  get submissionTime() {
    return this._submissionTime;
  }

  set submissionTime(value) {
    this._submissionTime = value;
  }

  get delMark() {
    return this._delMark;
  }

  set delMark(value) {
    this._delMark = value;
  }

  toString() {
    return '(' + this._id + this._creationTime + this._delMark
      + this._publisher + this._submissionTime +
      this._title + this._receiver + ')';
  }
}
