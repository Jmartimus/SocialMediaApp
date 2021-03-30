import { atom } from 'recoil';

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  },
});