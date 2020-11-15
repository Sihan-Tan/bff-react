import { selector } from 'recoil';
import { userState } from '@recoil/atom/user';

export var getUserState = selector({
  key: 'getUserState',
  // unique ID (with respect to other atoms/selectors)
  get: function get(_ref) {
    const _get = _ref.get;

    const count = _get(userState);

    return count;
  },
  set: function set(_ref2, newValue) {
    const _set = _ref2.set;
    return _set(userState, newValue);
  },
});
