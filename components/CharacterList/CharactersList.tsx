import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { CharactersListProps } from './CharactersList.types';
import { GET_ALL_CHARACTERS } from './CharactersList.graphql';
import styles from '../../styles/CharactersList.module.css';

const renderCharacters = (name : string, imgUrl : string, index:number) => (
  <div className={styles.CharacterCard} key={index}>
    <h3 className={styles.characterName}>{name}</h3>
    <div className={styles.imgContainer}>
      <Image src={imgUrl} alt={name} layout="fill" />
    </div>
  </div>
);

function CharactersList(props : CharactersListProps) {
  const { error, data, loading } = useQuery(GET_ALL_CHARACTERS);

  if (loading) { return <h3>loading....</h3>; }

  return (
    <>
      <h1 className={styles.heading}>Characters</h1>
      <div className={styles.characterList}>
        {data.characters.results.map((item :{name : string, image : string}, index : number) => (
          renderCharacters(item.name, item.image, index)
        ))}
      </div>
    </>
  );
}

export default CharactersList;
