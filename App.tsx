import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./src/api/api";
import HomeScreen from "./src/screens/HomeScreen";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <HomeScreen />
  </ApolloProvider>
);

export default App;
