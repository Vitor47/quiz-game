import React, { useState, useContext } from "react";
import {
  Container,
  ScrollViewContent,
  FormArea,
  ResultTitle,
  CheckImg,
  StarImg,
  ResultMessage,
  ButtonArea,
} from "./styles";
import Check from "../../../assets/images/Check.png";
import Starw1 from "../../../assets/images/Star1.png";
import Stars2 from "../../../assets/images/Star2.png";
import Stars3 from "../../../assets/images/Star3.png";
import { Keyboard, Alert } from "react-native";
import { QuestionButton } from "../../components/QuestionButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function EndGame() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          <ResultTitle>Nice Work!</ResultTitle>
        </FormArea>
        <CheckImg source={Check} />
        <StarImg source={Stars3} />
        <ResultMessage>You earned X points</ResultMessage>
        <ButtonArea>
          <QuestionButton
            onPress={() => navigation.navigate("GameScreen")}
            text="Next Question"
          />
          <QuestionButton onPress={signOut} text="Exit" />
        </ButtonArea>
      </ScrollViewContent>
    </Container>
  );
}
