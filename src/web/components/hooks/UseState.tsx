import React, { FC, useState } from "react";

interface IUser {
  name: string;
  age: number;
}

const userArr: Array<IUser> = [
  {
    name: "小王",
    age: 30,
  },
  {
    name: "小吴",
    age: 18,
  },
  {
    name: "小帅",
    age: 21,
  },
];

const UseState: FC = () => {
  const [user, setUser] = useState<IUser>(userArr[0]);
  const [index, setIndex] = useState<number>(0);

  const handleClickIndex = (): void => {
    setIndex(index === 2 ? 0 : index + 1);
    setUser(userArr[index]);
  };

  return (
    <div>
      <button onClick={handleClickIndex}>点击更换角色</button>
      <div>
        {user.name} -- {user.age}
      </div>
    </div>
  );
};

export default UseState;
