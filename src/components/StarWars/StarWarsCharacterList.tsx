import * as React from 'react';
import { StarWarsCharacterInterface } from '../../interfaces/StarWars';
import StarWarsCharacter from './StarWarsCharacter';

interface Props {
  characters: StarWarsCharacterInterface[];
}

function StarWarsCharacterList(props: Props) {
  return (
    <div className="StarWarsCharacterList">
      <h1>Characters</h1>
      <div innerHTML="test"></div>
      {props.characters.map((character: StarWarsCharacterInterface, index: number) => {
        return <StarWarsCharacter key={index} character={character} />;
      })}
    </div>
  );
}

export default StarWarsCharacterList;
