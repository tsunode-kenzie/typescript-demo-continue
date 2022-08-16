import { ReactNode } from "react";

// interface IUser que são as propriedas do usuario
export interface IUser {
  name: string;
  age: number;
  techs?: string[] | string;
}

// interface IUserProps que são as props que o componente User irá receber
interface IUserProps {
  users: IUser[];
  // ReactNode é uma interface padrão do React usada para o tipo do children
  children: ReactNode;
}

const User = ({ users, children }: IUserProps) => (
  <>
    {children}
    <h2>{users[0].name}</h2>
    <ul>

      {
        users.map(({ age }) => (
          <li key={`${age}`}>{age}</li>
        ))
      }
    </ul>
  </>
)

export default User;