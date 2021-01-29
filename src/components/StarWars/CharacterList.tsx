import React from 'react';
import { StarWarsCharacterInterface } from '../../interfaces/StarWars';
import StarWarsCharacter from './Character';

interface Props {
  characters: StarWarsCharacterInterface[];
}

function StarWarsCharacterList(props: Props) {
  return (
    <div className="StarWarsCharacterList">
      {props.characters.map((character: StarWarsCharacterInterface, index: number) => {
        return <StarWarsCharacter key={index} character={character} />;
      })}
    </div>
  );
}

export default StarWarsCharacterList;
