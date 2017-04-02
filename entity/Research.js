/**
 * Created by David Xie on 2017/4/2.
 * Research entity
 */
class Research {
  constructor(){
    this._id = null;
    this._title = null;
    this._content = null;
    this._location = null;
    this._photo = null;
    this._target = null;
    this._startDate = null;
    this._endDate = null;
    this._publisher = null;
    this._receiver = null;
    this._creationTime = null;
    this._receivedTime = null;
    this._delMark = 0;
    this._received = 0;
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

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  get photo() {
    return this._photo;
  }

  set photo(value) {
    this._photo = value;
  }

  get target() {
    return this._target;
  }

  set target(value) {
    this._target = value;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(value) {
    this._startDate = value;
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(value) {
    this._endDate = value;
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

  get receivedTime() {
    return this._receivedTime;
  }

  set receivedTime(value) {
    this._receivedTime = value;
  }

  get delMark() {
    return this._delMark;
  }

  set delMark(value) {
    this._delMark = value;
  }

  get received() {
    return this._received;
  }

  set received(value) {
    this._received = value;
  }

  toString() {
    return '(' + this._id + this._content + this._creationTime +
      this._delMark + this._endDate + this._location + this._photo +
      this._publisher + this._received + this._receivedTime +
      this._startDate + this._target + this._title + this._receiver + ')';
  }
}