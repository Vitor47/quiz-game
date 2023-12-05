import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9f7fff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 0px;
`;

export const ContainerContext = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultTitle = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: #fff;
  margin-top: 10%;
`;

export const ResultMessage = styled.Text`
  font-size: 20px;
  margin-top: 8%;
  color: #fff;
`;

export const CheckImg = styled.Image`
  height: 200px;
  width: 200px;
  max-height: 200px;
  padding: 18px;
`;

export const StarImg = styled.Image`
  height: 60px;
  width: 140px;
`;

export const ButtonArea = styled.View`
  padding: 10px;
  width: 100%;
  height: 250px;
  align-items: center;
  margin-top: 8%;
`;
