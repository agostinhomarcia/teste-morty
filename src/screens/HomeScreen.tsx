import React, { useState } from "react";
import { View, FlatList, Modal, Button, Text, Image } from "react-native";
import { useQuery } from "@apollo/client";
import { Character, GET_CHARACTERS } from "../graphql/graphql";
import CharacterListItem from "../components/List/CharacterListItem";
import { Container, SearchInput, SearchButton, LoadingText } from "./styles";

const HomeScreen: React.FC = () => {
  const [characterName, setCharacterName] = useState("Morty");
  const { loading, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 2, name: characterName },
  });
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const openModal = (character: any) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <Container>
      <SearchInput
        placeholder="Nome do Personagem"
        value={characterName}
        onChangeText={(text) => setCharacterName(text)}
      />
      <SearchButton title="Pesquisar" onPress={() => refetch()} />

      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <FlatList
          data={data.characters.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CharacterListItem
              character={item}
              onPress={() => openModal(item)}
            />
          )}
        />
      )}

      <Modal visible={selectedCharacter !== null} animationType="slide">
        {selectedCharacter && (
          <View>
            <Button title="Fechar" onPress={closeModal} />
            <Image
              source={{ uri: selectedCharacter.image }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Name: {selectedCharacter.name}</Text>
            {/* Adicione outras informações do personagem conforme necessário */}
          </View>
        )}
      </Modal>
    </Container>
  );
};

export default HomeScreen;
