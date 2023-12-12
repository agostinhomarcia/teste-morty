// src/api.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Character, CharacterDetails } from "../types/types";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default client;

//https://rickandmortyapi.com/graphql
