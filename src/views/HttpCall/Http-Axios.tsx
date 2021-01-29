import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StarWarsCharacterInterface } from '../../interfaces/StarWars';
import Loading from '../../components/Loading';
import StarWarsCharacterList from '../../components/StarWars/CharacterList';

function HttpAxios() {
  const [characters, setCharacters] = useState<StarWarsCharacterInterface[]>([]);
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoadingCharacters(true);
    const response = await axios('https://swapi.co/api/people');
    setCharacters(response.data.results);
    setLoadingCharacters(false);
  };

  return (
    <div className="HttpXHR Content-Padded">
      <h1>Http Axios</h1>
      {loadingCharacters ? <Loading /> : undefined}
      <StarWarsCharacterList characters={characters} />
    </div>
  );
}

export default HttpAxios;
