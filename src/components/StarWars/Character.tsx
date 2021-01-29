import React from 'react';
import { StarWarsCharacterInterface } from '../../interfaces/StarWars';

interface Props {
  character: StarWarsCharacterInterface;
}

function StarWarsCharacter(props: Props) {
  return (
    <div className="Character" style={{ marginTop: '20px' }}>
      <div>
        <strong>{props.character.name}</strong>
      </div>
      <div>{props.character.gender}</div>
      <div>{props.character.birth_year}</div>
    </div>
  );
}

export default StarWarsCharacter;
