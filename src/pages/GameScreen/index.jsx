import React, { useState, useContext } from "react";
import { Container, ScrollViewContent, HeaderImg } from "./styles";
import sword from "../../../assets/images/sword.png";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

import { Baloon } from "../../components/Baloon";

export default function GameScreen() {
  return (
    <Container>
      <ScrollViewContent>
        <Baloon title="QThe best quiz game around"></Baloon>
      </ScrollViewContent>
    </Container>
  );
}
