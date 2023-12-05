import React, { useState, useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";

import { AuthContext } from "../../contexts/auth";
import { Baloon } from "../../components/Baloon";
import { QuestionButton } from "../../components/QuestionButton";
import { Container, ScrollViewContent, HeaderImg, TitlePage } from "./styles";

export default function GameScreen() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const loadQuestions = async () => {
    try {
      const storageUser = JSON.parse(await AsyncStorage.getItem("@user"));

      console.log(typeof storageUser);

      console.log(
        `?amount=${storageUser.numberOfQuestions}&category=18&difficulty=${storageUser.difficulty}&type=multiple`
      );
      const response = await api.get(
        `?amount=10&category=18&difficulty=easy&type=multiple`
      );

      console.log(response.data.results);

      setQuestions(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const navigateToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleOptionPress = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
    navigateToNextQuestion();
  };

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }

  const optionsQuestion = questions[currentQuestionIndex]?.incorrect_answers || [];
  const correctAnswer = questions[currentQuestionIndex]?.correct_answer || "";

  return (
    <Container>
      <ScrollViewContent>
        <TitlePage>{`Question ${currentQuestionIndex + 1}`}</TitlePage>
        <Baloon
          title={
            questions[currentQuestionIndex]?.question || "No question available"
          }
        />
        {optionsQuestion.map((option, index) => (
          <QuestionButton
            key={index}
            onPress={() => handleOptionPress(option)}
            title={option}
          />
        ))}
      </ScrollViewContent>
    </Container>
  );
}
