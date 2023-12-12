// src/components/CharacterListItem.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, CharacterImage, CharacterName } from "./styles";
import { Character } from "../../types/types";

const CharacterListItem: React.FC<{
  character: Character;
  onPress: () => void;
}> = ({ character, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <CharacterImage source={{ uri: character.image }} />
      <CharacterName>{character.name}</CharacterName>
    </Container>
  </TouchableOpacity>
);

export default CharacterListItem;
