import React, { FC } from "react";
import { useRecoilState, useRecoilValue, SetRecoilState } from 'recoil'
import { getUserState } from '@recoil/selector/user'

const User: FC = () => {
    let [userState, setUserState] = useRecoilState(getUserState);

    const addUserCount = (): void => setUserState(userState + 1);

    const subUserCount = (): void => setUserState(userState - 1 < 0 ? 0 : userState - 1);

    return (
        <div>
            <h2>User</h2>
            <p>{userState}</p>
            <button onClick={addUserCount}>人数加1</button>
            <button onClick={subUserCount}>人数减1</button>
        </div>
    );
}

export default User