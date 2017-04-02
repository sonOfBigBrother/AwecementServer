/**
 * Created by David Xie on 2017/4/2.
 * Company entity
 */
class Company {
  constructor() {
    this._id = null;
    this._delMark = 0;
    this._contact = null;
    this._address = null;
    this._phone = null;
  }

  get id() {
    return this._id;
  }

  get delMark() {
    return this._delMark;
  }

  get contact() {
    return this._contact;
  }

  get address() {
    return this._address;
  }

  get phone() {
    return this._phone;
  }


  set id(value) {
    this._id = value;
  }

  set delMark(value) {
    this._delMark = value;
  }

  set contact(value) {
    this._contact = value;
  }

  set address(value) {
    this._address = value;
  }

  set phone(value) {
    this._phone = value;
  }

  toString(){
    return '(' + this._id + this._contact + this._address +
      + this._phone + this._delMark + ')';
  }
}