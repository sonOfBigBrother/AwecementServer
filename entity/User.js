/**
 * Created by David Xie on 2017/4/2.
 * User entity
 */
class User {
  constructor(){
    this._id = null;
    this._delMark = 0;
    this._username = null;
    this._password = null;
    this._roleId = null;
    this._fromWhere = null;
  }


  set id(value) {
    this._id = value;
  }

  set delMark(value) {
    this._delMark = value;
  }

  set username(value) {
    this._username = value;
  }

  set password(value) {
    this._password = value;
  }

  set roleId(value) {
    this._roleId = value;
  }

  set fromWhere(value) {
    this._fromWhere = value;
  }


  get id() {
    return this._id;
  }

  get delMark() {
    return this._delMark;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get roleId() {
    return this._roleId;
  }

  get fromWhere() {
    return this._fromWhere;
  }

  toString(){
    return '(' + this._id + this._username + this._password +
        this._roleId + this._fromWhere + this._delMark + ')';
  }
}