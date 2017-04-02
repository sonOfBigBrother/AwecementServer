/**
 * Created by David Xie on 2017/4/2.
 * Role entity
 */
class Role {
  constructor() {
    this._id = null;
    this._roleName = null;
    this._roleDesc = null;
    this._delMark = 0;
  }


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get roleName() {
    return this._roleName;
  }

  set roleName(value) {
    this._roleName = value;
  }

  get roleDesc() {
    return this._roleDesc;
  }

  set roleDesc(value) {
    this._roleDesc = value;
  }

  get delMark() {
    return this._delMark;
  }

  set delMark(value) {
    this._delMark = value;
  }

  toString(){
    return '(' + this._id + this._roleDesc + this._roleName +
      + this._delMark + ')';
  }
}