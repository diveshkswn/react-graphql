/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
query GetALlCharacters{
    characters{
      results{
        name
        image
      }
    }
  }
`;
