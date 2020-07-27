import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Container } from "./styles";

const Home = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.push("Camera")}>
        <Text>Visualize your camera</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
