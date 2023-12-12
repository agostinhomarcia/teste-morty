// src/graphql.ts
import { gql } from "@apollo/client";

interface Character {
  id: string;
  name: string;
  image: string;
}

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      name
      status
      species
    }
  }
`;
export type { Character };
