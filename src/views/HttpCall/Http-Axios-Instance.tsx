import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StarWarsCharacterInterface, StarWarsFilmInterface } from '../../interfaces/StarWars';
import Loading from '../../components/Loading';
import StarWarsCharacterList from '../../components/StarWars/CharacterList';
import StarWarsFilmList from '../../components/StarWars/FilmList';

const instance = axios.create({
  baseURL: 'https://swapi.co/api',
});

function HttpAxiosInstance() {

  const [characters, setCharacters] = useState<StarWarsCharacterInterface[]>([]);
  const [films, setFilms] = useState<StarWarsFilmInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCharacterData();
  }, []);


  const getCharacterData = async() => {
    setCharacters([]);
    setFilms([]);
    setLoading(true);
    const response = await instance('/people');
    setCharacters(response.data.results);
    setLoading(false);
  }

  const getFilmData = async() => {
    setCharacters([]);
    setFilms([]);
    setLoading(true);
    const response = await instance('/films');
    setFilms(response.data.results);
    setLoading(false);
  }

  return (
    <div className="HttpXHR Content-Padded">
      <h1>Http Axios Instance</h1>
      <ul style={{ cursor: 'pointer' }}>
        <li onClick={getCharacterData}>Characters</li>
        <li onClick={getFilmData}>Films</li>
      </ul>
      { loading ? (
        <Loading />
      ) : undefined}
      { characters ? (
        <StarWarsCharacterList characters={characters} />
      ) : undefined }
      { films ? (
        <StarWarsFilmList films={films} />
      ) : undefined }
    </div>
  )
}

export default HttpAxiosInstance;