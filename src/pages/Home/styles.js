import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9f7fff;
  padding-bottom: 12%;
`;

export const HeaderImg = styled.Image`
  width: 40%;
  height: 220px;
  left: 30%;
  top: 35px;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const FormArea = styled.View`
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 8px;
  top: 12%;
`;

export const InputContainer = styled(View)`
  margin-bottom: 5px;
  margin: 10px;
  margin-top: 5px;
  height: 60px;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #d3d3d3;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 25px;
  font-size: 17px;
  border-radius: 8px;
  margin-bottom: 15px;
`;
