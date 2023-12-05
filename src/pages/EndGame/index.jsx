import React, { useState, useContext } from "react";
import {
  Container,
  ScrollViewContent,
  FormArea,
  ResultTitle,
  CheckImg,
  StarImg,
  ResultMessage,
} from "./styles";
import Check from "../../../assets/images/Check.png";
import Stars3 from "../../../assets/images/Star3.png";
import { useNavigation } from "@react-navigation/native";

export default function EndGame() {
  console.log("Endgame - result");
  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          <ResultTitle>Nice Work!</ResultTitle>
        </FormArea>
        <CheckImg source={Check} />
        <StarImg source={Stars3} />
        <ResultMessage>You earned X points</ResultMessage>
      </ScrollViewContent>
    </Container>
  );
}
