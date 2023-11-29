// 09CACA
import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #2094ff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const HeaderImg = styled.Image`
  width: 40%;
  height: 200px;
  left: 30%;
  top: 15px;
`;
