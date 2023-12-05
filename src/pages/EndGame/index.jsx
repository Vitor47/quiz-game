import React, { useState, useContext } from "react";
import {
  Container,
  ScrollViewContent,
  ResultTitle,
  CheckImg,
  StarImg,
  ResultMessage,
  ButtonArea,
  ContainerContext,
} from "./styles";
import Check from "../../../assets/images/Check.png";
import Starw1 from "../../../assets/images/Star1.png";
import Stars2 from "../../../assets/images/Star2.png";
import Stars3 from "../../../assets/images/Star3.png";
import { QuestionButton } from "../../components/QuestionButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function EndGame() {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <ScrollViewContent>
        <ContainerContext>
          <ResultTitle>Nice Work!</ResultTitle>
          <CheckImg source={Check} />
          <StarImg source={Stars3} />
          <ResultMessage>You earned X points</ResultMessage>
        </ContainerContext>
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
