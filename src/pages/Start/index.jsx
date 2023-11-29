import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import { Container, ScrollViewContent, HeaderImg } from "./styles";
import questionsImage from "../../../assets/images/questions.png";

export default function Start() {
  return (
    <Container>
      <ScrollViewContent>
        <HeaderImg source={questionsImage}/>
      </ScrollViewContent>
    </Container>
  );
}
