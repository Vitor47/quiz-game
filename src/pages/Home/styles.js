import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const FormArea = styled.View`
  padding: 18px;r
  border-radius: 5px;
  margin-bottom: 8px;
`;
