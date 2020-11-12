import { selector } from 'recoil';
import { userState } from '@recoil/atom/user'

export const getUserState = selector({
    key: 'getUserState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }): number => {
        const count = get(userState);
        return count;
    },
    set: ({ set }, newValue: number) => set(userState, newValue),
});