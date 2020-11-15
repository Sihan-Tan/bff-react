import React from 'react';
import { useRecoilState } from 'recoil';
import { getUserState } from '@recoil/selector/user';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const User = function User() {
  const _useRecoilState = useRecoilState(getUserState);
  const _useRecoilState2 = _slicedToArray(_useRecoilState, 2);
  const userState = _useRecoilState2[0];
  const setUserState = _useRecoilState2[1];

  const addUserCount = function addUserCount() {
    return setUserState(userState + 1);
  };

  const subUserCount = function subUserCount() {
    return setUserState(userState - 1 < 0 ? 0 : userState - 1);
  };

  return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h2', null, 'User'), /* #__PURE__ */React.createElement('p', null, userState), /* #__PURE__ */React.createElement('button', {
    onClick: addUserCount,
  }, '\u4EBA\u6570\u52A01'), /* #__PURE__ */React.createElement('button', {
    onClick: subUserCount,
  }, '\u4EBA\u6570\u51CF1'));
};

export default User;
