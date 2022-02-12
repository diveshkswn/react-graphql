import { useQuery } from '@apollo/client';
import { CharactersList } from './CharactersList.types';
import {} from './CharactersList.graphql';

function CharactersList(props) {
  const list = useQuery();
  return (
    <h1>Characters</h1>
  );
}

export default CharactersList;
