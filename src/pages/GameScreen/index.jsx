import React, { useState, useContext } from "react";
import { Container, ScrollViewContent, HeaderImg } from "./styles";
import sword from "../../../assets/images/sword.png";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function GameScreen() {
  console.log("game screen");
  return (
    <Container>
      <ScrollViewContent scrollEnabled={false}></ScrollViewContent>
    </Container>
  );
}
