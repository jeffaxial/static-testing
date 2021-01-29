import React from 'react';
import { StarWarsFilmInterface } from '../../interfaces/StarWars';

interface Props {
  film: StarWarsFilmInterface;
}

function StarWarsFilm(props: Props) {
  return (
    <div className="Film" style={{ marginTop: '20px' }}>
      <div>
        <strong>{props.film.title}</strong>
      </div>
      <div>{props.film.director}</div>
      <div>{props.film.created}</div>
      <div>{props.film.opening_crawl}</div>
    </div>
  );
}

export default StarWarsFilm;
