import React from "react";
import { View, Text, Image } from "react-native";

const CharacterDetail: React.FC<{ character: any }> = ({ character }) => (
  <View>
    <Image
      source={{ uri: character.image }}
      style={{ width: 100, height: 100 }}
    />
    <Text>Name: {character.name}</Text>
    <Text>Status: {character.status}</Text>
    <Text>Species: {character.species}</Text>
  </View>
);

export default CharacterDetail;
