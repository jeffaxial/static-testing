import React from 'react';
import { StarWarsFilmInterface } from '../../interfaces/StarWars';
import StarWarsFilm from './Film';

interface Props {
  films: StarWarsFilmInterface[];
}

function StarWarsFilmList(props: Props) {
  return (
    <div className="StarWarsFilmList">
      {props.films.map((film: StarWarsFilmInterface, index: number) => {
        return <StarWarsFilm key={index} film={film} />;
      })}
    </div>
  );
}

export default StarWarsFilmList;
