/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
query GetAllCharacters{
    characters{
      results{
        name
        image
      }
    }
  }
`;
