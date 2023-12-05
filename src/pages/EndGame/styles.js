import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9f7fff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
  bottom: 70px;
`;

export const FormArea = styled.View`
  border-radius: 5px;
  margin-bottom: 8px;
  top: 150px;
  max-height: 70px;
  align-items: center;
`;

export const ResultTitle = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: #fff;
`;

export const ResultMessage = styled.Text`
  font-size: 20px;
  top: 210px;
  color: #fff;
  left: 103px;
`;

export const CheckImg = styled.Image`
  height: 200px;
  width: 200px;
  max-height: 200px;
  padding: 18px;
  top: 200px;
  align-items: center;
  left: 95px;
`;

export const StarImg = styled.Image`
  height: 60px;
  width: 140px;
  top: 180px;
  align-items: center;
  left: 123px;
`;

export const ButtonArea = styled.View`
  padding: 10px;
  width: 100%;
  height: 250px;
  top: 230px;
  align-items: center;
`;
