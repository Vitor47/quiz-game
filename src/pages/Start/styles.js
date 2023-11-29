import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #9F7FFF;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const HeaderImg = styled.Image`
  width: 100%;
  height: 250px;
`;

export const IconPass = styled.TouchableOpacity`
  position: fixed;
  bottom: 47px;
  left: 38%;
  width: 70px;
  padding: 20px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: #FF9051;
`;