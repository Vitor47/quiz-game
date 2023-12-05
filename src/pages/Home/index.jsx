import { Keyboard, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { LevelButton } from "../../components/HexagonalButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { createGameSchema } from "../../utils/createUserValidation";
import Sword from "../../../assets/images/sword.png";
import { StartButton } from "../../components/SubmitButton";
import { ref, push } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import QuestionPicker from "../../components/QuestionsPicker";
import {
  Container,
  ScrollViewContent,
  FormArea,
  InputContainer,
  Input,
  HeaderImg,
  InputContainerPicker,
} from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      numberOfQuestions: 0,
      difficulty: 0,
    },
    resolver: yupResolver(createGameSchema),
  });

  const onSubmit = async (data) => {
    signIn(data);

    Keyboard.dismiss();
    try {
      const newData = {
        name: data.name,
        email: data.email,
        numberOfQuestions: data.numberOfQuestions,
        difficulty: data.difficulty,
      };
      push(ref(db, "/users"), newData);

      reset({
        name: "",
        email: "",
        numberOfQuestions: 0,
        difficulty: 0,
      });

      navigation.navigate("GameScreen");
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  };

  return (
    <Container>
      <ScrollViewContent scrollEnabled={true}>
        <HeaderImg source={Sword} />
        <FormArea>
          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    name="name"
                    placeholder="Type your name"
                    control={control}
                    onChangeText={onChange}
                    selectionColor="#fff"
                    placeholderTextColor="#fff"
                    value={value}
                    errors={errors}
                    secureTextEntry={false}
                  />
                </>
              )}
              name="name"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    name="email"
                    placeholder="Type your email"
                    onChangeText={onChange}
                    selectionColor="#fff"
                    placeholderTextColor="#fff"
                    value={value}
                    errors={errors}
                    secureTextEntry={false}
                  />
                </>
              )}
              name="email"
            />
          </InputContainer>

          <InputContainerPicker>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <QuestionPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    errors={errors}
                  />
                </>
              )}
              name="numberOfQuestions"
            />
          </InputContainerPicker>
          {/* botoes hexagonais, ainda não terminei */}
          {/* <LevelButton text="1" /> */}
        </FormArea>
        <StartButton text="Start" onPress={handleSubmit(onSubmit)} />
      </ScrollViewContent>
    </Container>
  );
}
