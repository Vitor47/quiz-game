// 09CACA
import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9f7fff;
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

export const TitlePage = styled.Text`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #fff;
  padding: 22px;
`;