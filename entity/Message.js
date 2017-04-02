/**
 * Created by David Xie on 2017/4/2.
 * Message entity
 */
class Message {
  constructor() {
    this._id = null;
    this._title = null;
    this._content = null;
    this._creationTime = null;
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

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get creationTime() {
    return this._creationTime;
  }

  set creationTime(value) {
    this._creationTime = value;
  }

  get delMark() {
    return this._delMark;
  }

  set delMark(value) {
    this._delMark = value;
  }

  toString(){
    return '(' + this._id + this._title + this._creationTime +
      + this._content + this._delMark + ')';
  }
}