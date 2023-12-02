import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9f7fff;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
  top: 40px;
`;

export const HeaderImg = styled.Image`
  width: 100%;
  height: 250px;
  top: 20px;
`;

export const IconPass = styled.TouchableOpacity`
  position: fixed;
  top: 50px;
  left: 40%;
  width: 70px;
  padding: 20px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #ff9051;
`;
