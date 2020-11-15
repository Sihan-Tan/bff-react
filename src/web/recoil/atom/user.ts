import { atom } from 'recoil';

export var userState = atom({
  key: 'userState',
  // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)

});
