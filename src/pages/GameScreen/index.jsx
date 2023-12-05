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
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const loadQuestions = async () => {
    try {
      const storageUser = JSON.parse(await AsyncStorage.getItem("@user"));
      setUser(storageUser);
      
      const response = await api.get(
        `?amount=${storageUser.numberOfQuestions}&category=18&difficulty=${storageUser.difficulty}&type=multiple`
      );

      setQuestions(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const optionsQuestion =
    questions[currentQuestionIndex]?.incorrect_answers || [];
  const correctAnswer = questions[currentQuestionIndex]?.correct_answer || "";
  optionsQuestion.pop();
  optionsQuestion.push(correctAnswer);
  const question = questions[currentQuestionIndex]?.question || "";

  const navigateToNextQuestion = () => {
    return setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleOptionPress = (selectedOption) => {
    navigateToNextQuestion();
    console.log(currentQuestionIndex, user.numberOfQuestions);

    if (selectedOption == correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if ((currentQuestionIndex + 1) >= user.numberOfQuestions) {
      navigation.navigate("EndGame", {
        correctAnswers: correctAnswers,
        incorrectAnswers: incorrectAnswers,
      });
    }
  };

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }

  return (
    <Container>
      <ScrollViewContent>
        <TitlePage>{`Question ${currentQuestionIndex + 1}`}</TitlePage>
        <Baloon title={question || "No question available"} />
        {optionsQuestion.map((option, index) => (
          <QuestionButton
            key={index}
            onPress={() => handleOptionPress(option)}
            text={option}
          />
        ))}
      </ScrollViewContent>
    </Container>
  );
}
