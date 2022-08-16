import { useEffect, useState } from 'react';
import './App.css';
import User, { IUser } from './components/User';
import { getPokemons, IPokemon } from './services/getPokemons';


function App() {
  const [counter, setCounter] = useState(0);
  const [users, setUser] = useState<IUser[]>([
    { name: 'Tsunode', age: 24 },
    { name: 'Wesley', age: 22, techs: ['react', 'node', 'heroku'] },
    { name: 'Alex', age: 25, techs: ['React', 'css', 'figma'] },
    { name: 'Gabriel', age: 26, techs: 'React' }
  ]);

  // useState<IPokemon[]> estou falando que meu estado
  // tem o formato de um array de IPokemon, que é uma interface
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    getPokemons().then((response) => {
      setPokemons(response.results);
    }).catch((error: Error) => {
      console.error(error);
    });
  }, []);

  // usuario pode não ter tecnologia
  // usuario pode ter varias tecnologias
  // usuario pode ter apenas uma tecnologia

  // const user: IUser = { name: 'Tsunode', age: 24 };

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <button type='button' onClick={() => setCounter(counter + 1)}>+</button>
      <button type='button' onClick={() => setCounter(counter - 1)}>-</button>

      <User users={users}>
        <h1>Usuarios:</h1>
      </User>
    </div>
  );
}

export default App;
