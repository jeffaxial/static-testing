import React, { useState, useEffect } from 'react';
import { StarWarsCharacterInterface } from '../../interfaces/StarWars';
import StarWarsCharacterList from '../../components/StarWars/CharacterList';
import Loading from '../../components/Loading';

function HttpXHR() {
  const [characters, setCharacters] = useState<StarWarsCharacterInterface[]>([]);
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoadingCharacters(true);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      setCharacters(xhr.response.results);
      setLoadingCharacters(false);
    });
    xhr.open('GET', 'https://swapi.co/api/people/');
    xhr.send();
  };

  return (
    <div className="HttpXHR Content-Padded">
      <h1>Http XHR</h1>
      {loadingCharacters ? <Loading /> : undefined}
      <StarWarsCharacterList characters={characters} />
    </div>
  );
}

export default HttpXHR;
